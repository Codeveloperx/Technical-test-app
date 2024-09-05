import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PokemonList from "./index";
import Pagination from "../pagination";

// Mock del hook usePagination
vi.mock("../../hooks/usePagination", () => ({
  usePagination: () => ({
    backToHome: vi.fn(),
  }),
}));

// Mock del componente PokemonItem
vi.mock("../pokemon-item", () => ({
  default: ({ url }: { url: string }) => (
    <div data-testid="pokemon-item">
      <a href={url}>Pokemon Link</a>
    </div>
  ),
}));

afterEach(() => {
  // Limpiar el DOM
  cleanup();
  // Limpiar los mocks
  vi.clearAllMocks();
});
// Para proporcionar el contexto de Router
const WithRouter = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("Componente PokemonList", () => {
  const mockPokemonData = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  ];

  const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);
    return render(ui, { wrapper: WithRouter });
  };

  it("renderiza correctamente con datos", () => {
    renderWithRouter(<PokemonList values={mockPokemonData} page={1} />);
    const pokemonItems = screen.getAllByTestId("pokemon-item");
    expect(pokemonItems).toHaveLength(3);
  });

  it("filtra pokemones correctamente", () => {
    renderWithRouter(
      <PokemonList values={mockPokemonData} searchPokemon="iv" page={1} />
    );
    const pokemonItems = screen.getAllByTestId("pokemon-item");
    expect(pokemonItems).toHaveLength(1);
  });

  it("muestra mensaje cuando no hay resultados", () => {
    renderWithRouter(
      <PokemonList values={mockPokemonData} searchPokemon="pikachu" page={1} />
    );
    expect(screen.getByText(/No se encontro el pokemon/)).toBeDefined();
  });

  it("muestra el botón de limpiar y lo maneja correctamente", () => {
    const onResetMock = vi.fn();
    renderWithRouter(
      <PokemonList
        values={mockPokemonData}
        searchPokemon="bulba"
        page={1}
        onReset={onResetMock}
      />
    );

    const clearButton = screen.getByTestId("clear-search-button");
    expect(clearButton).toBeDefined();

    fireEvent.click(clearButton);
    expect(onResetMock).toHaveBeenCalledTimes(1);
  });

  it("muestra el número correcto de resultados encontrados", () => {
    renderWithRouter(
      <PokemonList values={mockPokemonData} searchPokemon="iv" page={1} />
    );
    const searchResultsCount = screen.getByTestId("search-results-count");
    expect(searchResultsCount.textContent).toBe(
      "Se encontraron 1 pokemones con la palabra iv"
    );
  });

  it("renderiza el contenedor de paginación cuando hay resultados", () => {
    renderWithRouter(
      <PokemonList values={mockPokemonData} page={1}>
        <Pagination/>
      </PokemonList>
    );
    expect(screen.getByTestId("pagination-container")).toBeDefined();
  });

  it("no renderiza el contenedor de paginación cuando no hay resultados", () => {
    renderWithRouter(
      <PokemonList values={[]} searchPokemon="noexiste" page={1} />
    );
    expect(screen.queryByTestId("pagination-container")).not.toBeUndefined();
  });

});

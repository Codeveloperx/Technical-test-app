import { render, screen } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PokemonItem from "./index";
import useFetch from "../../hooks/useFetch";

vi.mock("../../hooks/useFetch");

describe("PokemonItem", () => {
  const mockUseFetch = useFetch as Mock;

  it("muestra el esqueleto mientras se están cargando los datos", () => {
    mockUseFetch.mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(
      <BrowserRouter>
        <PokemonItem url="https://pokeapi.co/api/v2/pokemon/1" />
      </BrowserRouter>
    );

    const skeleton = screen.getByRole("status");
    expect(skeleton).toBeDefined();
  });

  it("muestra el nombre y la imagen del Pokémon una vez que se cargan los datos", () => {
    mockUseFetch.mockReturnValue({
      data: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          front_default: "bulbasaur-image-url",
          other: { dream_world: { front_default: null } },
        },
        types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      },
      isLoading: false,
    });

    render(
      <BrowserRouter>
        <PokemonItem url="test-url" testId="pokemon-item" />
      </BrowserRouter>
    );

    expect(screen.getByText("bulbasaur")).toBeDefined();

    const image = screen.getByAltText("bulbasaur");
    expect(image).toBeDefined();
    expect(image.getAttribute("src")).toBe("bulbasaur-image-url")

    expect(screen.getByText("grass")).toBeDefined();
    expect(screen.getByText("poison")).toBeDefined();
  });
});

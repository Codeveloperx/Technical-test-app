import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Message from "./index";

describe("Componente Message", () => {
  it("renderiza correctamente el mensaje cuando no se proporciona un valor que no existe", () => {
    render(<Message value="xxxx" />);

    const titulo = screen.getByText("No se encontro el pokemon");
    const valor = screen.getByText('"xxxx"');

    expect(titulo).toBeDefined();
    expect(valor).toBeDefined();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import Welcome from "../Welcome";

const Superheroes = () => <div>Superheroes Page</div>;

describe("Welcome Component (without mocks)", () => {
  it("should render correctly", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    // Verify that the title renders
    expect(screen.getByText("DC & Marvel Heroes")).toBeInTheDocument();

    // Verify that the paragraph renders
    expect(
      screen.getByText(
        "Explore the vast universe of DC and Marvel superheroes. From the mighty Superman to the incredible Iron Man, discover detailed information about your favorite heroes."
      )
    ).toBeInTheDocument();

    // Verify that the button renders
    expect(
      screen.getByRole("button", { name: /start exploring/i })
    ).toBeInTheDocument();
  });

  it("should navigate to the /superheroes route when the button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/superheroes" element={<Superheroes />} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /start exploring/i });

    // Simulate a click on the button
    fireEvent.click(button);

    // Verify that the Superheroes page is displayed
    expect(screen.getByText("Superheroes Page")).toBeInTheDocument();
  });
});

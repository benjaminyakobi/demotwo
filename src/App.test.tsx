import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders App component", () => {
  render(<App />);
  const element: HTMLElement = screen.getByText(/Hi./);
  expect(element).toBeInTheDocument;
});

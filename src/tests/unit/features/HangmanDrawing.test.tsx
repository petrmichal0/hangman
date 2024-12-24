import { render, screen } from "@testing-library/react";

import HangmanDrawing from "../../../features/HangmanDrawing";

describe("HangmanDrawing", () => {
  test("renders no body parts when numberOfGuesses is 0", () => {
    render(<HangmanDrawing numberOfGuesses={0} />);
    const bodyParts = screen.queryAllByTestId("body-part");
    expect(bodyParts).toHaveLength(0);
  });

  test("renders correct number of body parts based on numberOfGuesses", () => {
    render(<HangmanDrawing numberOfGuesses={3} />);
    const bodyParts = screen.getAllByTestId("body-part");
    expect(bodyParts).toHaveLength(3);
  });

  test("renders all body parts when numberOfGuesses equals maximum", () => {
    render(<HangmanDrawing numberOfGuesses={6} />);
    const bodyParts = screen.getAllByTestId("body-part");
    expect(bodyParts).toHaveLength(6);
  });

  test("does not render more body parts than available", () => {
    render(<HangmanDrawing numberOfGuesses={10} />);
    const bodyParts = screen.getAllByTestId("body-part");
    expect(bodyParts).toHaveLength(6);
  });

  test("renders static parts of the hangman structure", () => {
    render(<HangmanDrawing numberOfGuesses={0} />);
    const staticParts = screen.getAllByTestId("static-part");
    expect(staticParts).toHaveLength(4);
  });
});

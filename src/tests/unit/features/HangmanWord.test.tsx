import { render, screen } from "@testing-library/react";

import HangmanWord from "../../../features/HangmanWord";

describe("HangmanWord", () => {
  test("renders the word with hidden letters when guessedLetters is empty", () => {
    render(<HangmanWord guessedLetters={[]} wordToGuess="react" />);
    const letters = screen.getAllByTestId("word-letter");
    letters.forEach((letter) => {
      expect(letter).toHaveStyle("visibility: hidden");
    });
  });

  test("reveals the correctly guessed letters", () => {
    render(<HangmanWord guessedLetters={["r", "e"]} wordToGuess="react" />);
    const letters = screen.getAllByTestId("word-letter");
    expect(letters[0]).toHaveStyle("visibility: visible"); // "R"
    expect(letters[1]).toHaveStyle("visibility: visible"); // "E"
    expect(letters[2]).toHaveStyle("visibility: hidden"); // "A"
    expect(letters[3]).toHaveStyle("visibility: hidden"); // "C"
    expect(letters[4]).toHaveStyle("visibility: hidden"); // "T"
  });

  test("reveals all letters if 'reveal' is true", () => {
    render(
      <HangmanWord guessedLetters={[]} wordToGuess="react" reveal={true} />
    );
    const letters = screen.getAllByTestId("word-letter");
    letters.forEach((letter) => {
      expect(letter).toHaveStyle("visibility: visible");
    });
  });

  test("shows unguessed letters in red when 'reveal' is true", () => {
    render(
      <HangmanWord guessedLetters={["r"]} wordToGuess="react" reveal={true} />
    );
    const letters = screen.getAllByTestId("word-letter");
    expect(letters[0]).toHaveStyle("color: black"); // "R"
    expect(letters[1]).toHaveStyle("color: red"); // "E"
    expect(letters[2]).toHaveStyle("color: red"); // "A"
    expect(letters[3]).toHaveStyle("color: red"); // "C"
    expect(letters[4]).toHaveStyle("color: red"); // "T"
  });
});

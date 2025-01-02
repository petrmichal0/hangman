import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../../App";

jest.mock("../../data/wordList.json", () => ["mockedword"]);

describe("App Component", () => {
  test("renders the initial layout correctly", () => {
    render(<App />);

    expect(
      screen.queryByText(/Winner! You can try again/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Nice try - You can try again/i)
    ).not.toBeInTheDocument();
  });

  test("adds guessed letters on keypress", async () => {
    render(<App />);
    const randomLetter = "m";

    await user.keyboard(randomLetter);

    const elements = screen.getAllByText(randomLetter);
    expect(elements).toHaveLength(2);
  });

  test("resets the game on Enter keypress", async () => {
    render(<App />);
    const randomLetter = "m";

    await user.keyboard(randomLetter);

    await user.keyboard("{Enter}");

    const winnerText = screen.queryByText(/Winner! You can try again/i);
    const guessedLetter = screen.queryByText(randomLetter.toUpperCase());

    expect(winnerText).not.toBeInTheDocument();
    expect(guessedLetter).not.toBeInTheDocument();
  });

  test.only("does not allow guessing the same letter twice", async () => {
    render(<App />);
    const randomLetter = "m";

    // Stisknutí stejného písmena dvakrát
    await user.keyboard(randomLetter);
    await user.keyboard(randomLetter);

    // Kontrola, že písmeno je jen jednou
    const guessedLetter = screen.getAllByText(randomLetter.toUpperCase());
    expect(guessedLetter).toHaveLength(1);
  });

  test("displays losing state after 6 incorrect guesses", async () => {
    render(<App />);

    // Zadej 6 nesprávných písmen
    const wrongLetters = ["q", "w", "e", "r", "t", "y"];
    for (const letter of wrongLetters) {
      await user.keyboard(letter);
    }

    // Ověření zobrazení stavu prohry
    expect(
      screen.getByText(/Nice try - You can try again/i)
    ).toBeInTheDocument();
  });

  test("displays winning state when all letters are guessed", async () => {
    render(<App />);

    // Získej aktuální slovo (simulace výhry)
    const currentWord = screen.getByText(/Winner! You can try again/i);

    for (const letter of currentWord.textContent || "") {
      if (letter.match(/[a-zA-Z]/)) {
        await user.keyboard(letter);
      }
    }

    // Ověření zobrazení stavu výhry
    expect(screen.getByText(/Winner! You can try again/i)).toBeInTheDocument();
  });
});

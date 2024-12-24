import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Keyboard from "../../../features/Keyboard";

describe("Keyboard Component", () => {
  const mockAddGuessedLetter = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all keys", () => {
    render(
      <Keyboard
        activeLetters={[]}
        inactiveLetters={[]}
        addGuessedLetter={mockAddGuessedLetter}
      />
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(26);
    expect(buttons[0]).toHaveTextContent("a");
    expect(buttons[25]).toHaveTextContent("z");
  });

  test("disables buttons for active and inactive letters", () => {
    render(
      <Keyboard
        activeLetters={["a"]}
        inactiveLetters={["b"]}
        addGuessedLetter={mockAddGuessedLetter}
      />
    );

    const activeButton = screen.getByText("a");
    const inactiveButton = screen.getByText("b");
    const enabledButton = screen.getByText("c");

    expect(activeButton).toBeDisabled();
    expect(inactiveButton).toBeDisabled();
    expect(enabledButton).not.toBeDisabled();
  });

  test("calls addGuessedLetter when a button is clicked", async () => {
    render(
      <Keyboard
        activeLetters={[]}
        inactiveLetters={[]}
        addGuessedLetter={mockAddGuessedLetter}
      />
    );

    const button = screen.getByText("a");
    await user.click(button);

    expect(mockAddGuessedLetter).toHaveBeenCalledTimes(1);
    expect(mockAddGuessedLetter).toHaveBeenCalledWith("a");
  });

  test("does not call addGuessedLetter when a button is disabled", async () => {
    render(
      <Keyboard
        activeLetters={["a"]}
        inactiveLetters={[]}
        addGuessedLetter={mockAddGuessedLetter}
      />
    );

    const disabledButton = screen.getByText("a");

    await user.click(disabledButton);

    expect(mockAddGuessedLetter).not.toHaveBeenCalled();
  });

  test("renders with disabled prop", () => {
    render(
      <Keyboard
        activeLetters={[]}
        inactiveLetters={[]}
        addGuessedLetter={mockAddGuessedLetter}
        disabled={true}
      />
    );

    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });
});

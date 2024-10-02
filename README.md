# Hangman

## Project Title and Description
Hangman is a classic word-guessing game implemented in React and TypeScript. The user tries to guess a randomly selected word, one letter at a time, within a limited number of incorrect guesses. 

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/V5ADweD6yuG82ImfuFlNvOCA" width="700" alt="Hangman App Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Play a classic Hangman game
- Random word selection from a predefined word list
- Keyboard input for guessing letters
- Display of incorrect guesses
- Victory or defeat message displayed based on game outcome

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/hangman.git
    ```

2. Navigate to the project directory:
    ```bash
    cd hangman
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the application, run the following command:
```bash
npm run dev
```

After starting, go to [http://localhost:3000](http://localhost:3000) in your web browser.

## Screenshots

<table>
  <tr>
    <th>Homepage</th>
    <th>Game Interface</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/37080a48-02ca-44b5-a3fa-9fc61e86d386" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/user-attachments/assets/37080a48-02ca-44b5-a3fa-9fc61e86d386" width="300" height="300" alt="Homepage">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/be7de6eb-b3e8-4d31-a328-d9329ca807c8" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/user-attachments/assets/be7de6eb-b3e8-4d31-a328-d9329ca807c8" width="300" height="300" alt="Game Interface">
      </a>
    </td>
  </tr>
</table>

## Demo (link)

Check out the live demo of the application [here](https://hangman-2024.netlify.app/).

## Project Structure

```css
Hangman/
├── public/
│   ├── vite.svg
├── src/
│   ├── App.tsx
│   ├── HangmanDrawing.tsx
│   ├── HangmanWord.tsx
│   ├── Keyboard.tsx
│   ├── Keyboard.module.css
│   ├── main.tsx
│   ├── wordList.json
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
├── vite.config.ts
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)
[![TypeScript Badge](https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007ACC)](#)
[![Vite Badge](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&labelColor=black&logo=vite&logoColor=646CFF)](#)

## Third-Party Libraries

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast development build tool and server.
- **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and TypeScript.
- **Prettier**: A code formatter to ensure consistent coding style.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

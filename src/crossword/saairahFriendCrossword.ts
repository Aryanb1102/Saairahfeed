import { CrosswordPuzzle } from "./types";

// Placeholder NYT-style mini crossword shell.
// You said you'll provide the exact words + clues later — we'll drop them into `entries`.
export const saairahFriendCrossword: CrosswordPuzzle = {
  id: "saairah-friend-mini-crossword",
  title: "Saairahfeed Mini Crossword",
  description: "A tiny NYT-style crossword about our friend group. (Clues/answers coming soon.)",
  size: 7,
  // A light placeholder block layout (edit later once answers are known).
  blocks: [
    { row: 0, col: 5 },
    { row: 1, col: 1 },
    { row: 1, col: 5 },
    { row: 2, col: 3 },
    { row: 3, col: 0 },
    { row: 3, col: 6 },
    { row: 4, col: 3 },
    { row: 5, col: 1 },
    { row: 5, col: 5 },
    { row: 6, col: 1 },
  ],
  // ADD IMAGE HERE
  image: "/images/crossword/mini.png",
  entries: [
    // 3 ACROSS (placeholders)
    {
      id: "A1",
      number: 1,
      direction: "across",
      row: 0,
      col: 0,
      clue: "PLACEHOLDER ACROSS 1 (you'll give the real clue)",
      answer: "PLACEH", // placeholder; replace with exact answer later
    },
    {
      id: "A2",
      number: 2,
      direction: "across",
      row: 2,
      col: 0,
      clue: "PLACEHOLDER ACROSS 2",
      answer: "OLDER",
    },
    {
      id: "A3",
      number: 3,
      direction: "across",
      row: 6,
      col: 2,
      clue: "PLACEHOLDER ACROSS 3",
      answer: "CLUE",
    },
    // 3 DOWN (placeholders)
    {
      id: "D1",
      number: 1,
      direction: "down",
      row: 0,
      col: 0,
      clue: "PLACEHOLDER DOWN 1",
      answer: "PAL",
    },
    {
      id: "D2",
      number: 4,
      direction: "down",
      row: 0,
      col: 2,
      clue: "PLACEHOLDER DOWN 2",
      answer: "INSIDE",
    },
    {
      id: "D3",
      number: 5,
      direction: "down",
      row: 0,
      col: 4,
      clue: "PLACEHOLDER DOWN 3",
      answer: "JOKE",
    },
  ],
};


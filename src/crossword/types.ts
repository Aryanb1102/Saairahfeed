export type Direction = "across" | "down";

export type CrosswordEntry = {
  id: string;
  number: number;
  direction: Direction;
  row: number;
  col: number;
  clue: string;
  answer: string;
};

export type CrosswordPuzzle = {
  id: string;
  title: string;
  description?: string;
  size: number; // square grid (e.g. 7 means 7x7)
  blocks: Array<{ row: number; col: number }>;
  entries: CrosswordEntry[];
  // Optional image header for the puzzle card
  image?: string;
};


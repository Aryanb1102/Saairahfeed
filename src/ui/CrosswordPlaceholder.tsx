import { CrosswordPuzzle } from "../crossword/types";

type Props = {
  puzzle: CrosswordPuzzle;
};

const keyOf = (row: number, col: number) => `${row}:${col}`;

export default function CrosswordPlaceholder({ puzzle }: Props) {
  const size = puzzle.size;
  const blocks = new Set(puzzle.blocks.map((b) => keyOf(b.row, b.col)));

  // Placeholder numbering: show clue numbers at the provided entry starts.
  const starts = new Map<string, number>();
  for (const entry of puzzle.entries) starts.set(keyOf(entry.row, entry.col), entry.number);

  return (
    <section className="card">
      <h1 className="title">{puzzle.title}</h1>
      <p className="subtle">{puzzle.description ?? "Crossword coming soon."}</p>

      {puzzle.image ? (
        <img
          src={puzzle.image}
          alt={puzzle.title}
          style={{
            width: "100%",
            maxHeight: 240,
            objectFit: "cover",
            borderRadius: 16,
            border: "1px solid rgba(244, 246, 255, 0.12)",
            marginTop: 14,
          }}
        />
      ) : null}

      <div className="crosswordWrap" aria-label="Crossword placeholder">
        <div
          className="crosswordGrid"
          style={{
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gridTemplateRows: `repeat(${size}, 1fr)`,
          }}
        >
          {Array.from({ length: size * size }, (_, i) => {
            const row = Math.floor(i / size);
            const col = i % size;
            const isBlock = blocks.has(keyOf(row, col));
            const number = starts.get(keyOf(row, col));

            return (
              <div key={keyOf(row, col)} className={`cell ${isBlock ? "cellBlock" : "cellOpen"}`}>
                {number ? <span className="cellNum">{number}</span> : null}
                {!isBlock ? (
                  <input
                    className="cellInput"
                    inputMode="text"
                    maxLength={1}
                    disabled
                    aria-label={`Cell ${row + 1},${col + 1}`}
                    value=""
                    onChange={() => {}}
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="clues">
          <div className="clueCol">
            <h2 className="questionTitle">Across</h2>
            <ol className="clueList">
              {puzzle.entries
                .filter((e) => e.direction === "across")
                .sort((a, b) => a.number - b.number)
                .map((e) => (
                  <li key={e.id} className="clueItem">
                    <span className="clueNum">{e.number}.</span> {e.clue}
                  </li>
                ))}
            </ol>
          </div>
          <div className="clueCol">
            <h2 className="questionTitle">Down</h2>
            <ol className="clueList">
              {puzzle.entries
                .filter((e) => e.direction === "down")
                .sort((a, b) => a.number - b.number)
                .map((e) => (
                  <li key={e.id} className="clueItem">
                    <span className="clueNum">{e.number}.</span> {e.clue}
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="shareLine" style={{ marginTop: 16 }}>
        Placeholder only. Next: add real entries + NYT-style interaction logic (typing, arrows, highlighting, clue nav).
      </div>
    </section>
  );
}


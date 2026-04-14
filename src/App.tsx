import { useState } from "react";
import CrosswordPage from "./pages/CrosswordPage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  const [tab, setTab] = useState<"quiz" | "crossword">("quiz");

  return (
    <div className="app">
      <header className="topNav">
        <button
          type="button"
          className={`tabBtn ${tab === "quiz" ? "tabBtnActive" : ""}`}
          onClick={() => setTab("quiz")}
        >
          Quiz
        </button>
        <button
          type="button"
          className={`tabBtn ${tab === "crossword" ? "tabBtnActive" : ""}`}
          onClick={() => setTab("crossword")}
        >
          Crossword
        </button>
      </header>

      {tab === "quiz" ? <QuizPage /> : <CrosswordPage />}
    </div>
  );
}

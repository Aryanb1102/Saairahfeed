import { useState } from "react";
import CrosswordPage from "./pages/CrosswordPage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  const [tab, setTab] = useState<"quiz" | "crossword">("quiz");

  return (
    <div className="app">
      {tab === "quiz" ? (
        <QuizPage onGoToCrossword={() => setTab("crossword")} />
      ) : (
        <CrosswordPage onGoToQuiz={() => setTab("quiz")} />
      )}
    </div>
  );
}

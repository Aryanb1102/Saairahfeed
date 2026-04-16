import { Routes, Route } from "react-router-dom";
import HomepageLayout from "./homepage/HomepageLayout";
import QuizPage from "./pages/QuizPage";
import CrosswordPage from "./pages/CrosswordPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageLayout />} />
      <Route
        path="/quiz"
        element={<QuizPage onGoToCrossword={() => window.location.assign("/crossword")} />}
      />
      <Route
        path="/crossword"
        element={<CrosswordPage onGoToQuiz={() => window.location.assign("/quiz")} />}
      />
    </Routes>
  );
}

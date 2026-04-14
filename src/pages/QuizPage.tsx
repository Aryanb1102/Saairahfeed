import { PersonalityQuiz } from "../quiz/types";
import { saairahMoodQuiz } from "../quiz/saairahMoodQuiz";
import PersonalityQuizView from "../ui/PersonalityQuizView";

const quiz: PersonalityQuiz = saairahMoodQuiz;

export default function QuizPage() {
  return (
    <main className="page">
      <PersonalityQuizView quiz={quiz} />
    </main>
  );
}


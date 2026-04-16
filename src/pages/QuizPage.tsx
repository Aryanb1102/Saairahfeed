import { Link } from "react-router-dom";
import { PersonalityQuiz } from "../quiz/types";
import { saairahMoodQuiz } from "../quiz/saairahMoodQuiz";
import PersonalityQuizView from "../ui/PersonalityQuizView";

const quiz: PersonalityQuiz = saairahMoodQuiz;

type Props = {
  onGoToCrossword: () => void;
};

export default function QuizPage({ onGoToCrossword }: Props) {
  return <PersonalityQuizView quiz={quiz} onGoToCrossword={onGoToCrossword} />;
}

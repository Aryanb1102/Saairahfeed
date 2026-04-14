import { saairahFriendCrossword } from "../crossword/saairahFriendCrossword";
import CrosswordPlaceholder from "../ui/CrosswordPlaceholder";

type Props = {
  onGoToQuiz: () => void;
};

export default function CrosswordPage({ onGoToQuiz }: Props) {
  return (
    <>
      <header className="topNav">
        <button type="button" className="tabBtn tabBtnActive" onClick={onGoToQuiz}>
          ← Back to Quiz
        </button>
      </header>
      <main className="page">
        <CrosswordPlaceholder puzzle={saairahFriendCrossword} />
      </main>
    </>
  );
}

import { Link } from "react-router-dom";
import { saairahFriendCrossword } from "../crossword/saairahFriendCrossword";
import CrosswordPlaceholder from "../ui/CrosswordPlaceholder";

type Props = {
  onGoToQuiz: () => void;
};

export default function CrosswordPage({ onGoToQuiz }: Props) {
  return (
    <>
      <header className="topNav" style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Link
          to="/"
          className="tabBtn"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          ← Home
        </Link>
        <button type="button" className="tabBtn tabBtnActive" onClick={onGoToQuiz}>
          Quiz
        </button>
      </header>
      <main className="page">
        <CrosswordPlaceholder puzzle={saairahFriendCrossword} />
      </main>
    </>
  );
}

import { saairahFriendCrossword } from "../crossword/saairahFriendCrossword";
import CrosswordPlaceholder from "../ui/CrosswordPlaceholder";

export default function CrosswordPage() {
  return (
    <main className="page">
      <CrosswordPlaceholder puzzle={saairahFriendCrossword} />
    </main>
  );
}


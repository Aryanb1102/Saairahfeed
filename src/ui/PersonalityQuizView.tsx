import { useMemo, useState } from "react";
import { PersonalityQuiz, QuizSelectionsByQuestionId } from "../quiz/types";
import { scorePersonalityQuiz } from "../quiz/scorePersonalityQuiz";

type Props = {
  quiz: PersonalityQuiz;
};

export default function PersonalityQuizView({ quiz }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [view, setView] = useState<"quiz" | "result">("quiz");
  const [selectionsByQuestionId, setSelectionsByQuestionId] = useState<QuizSelectionsByQuestionId>({});

  const questionCount = quiz.questions.length;
  const currentQuestion = quiz.questions[stepIndex];

  const currentSelection = currentQuestion ? selectionsByQuestionId[currentQuestion.id] : undefined;

  const result = useMemo(() => {
    if (view !== "result") return null;
    return scorePersonalityQuiz(quiz, selectionsByQuestionId);
  }, [quiz, selectionsByQuestionId, view]);

  const winner = result ? quiz.results[result.winnerId] : null;

  const answeredCount = useMemo(() => {
    let count = 0;
    for (const question of quiz.questions) {
      if (selectionsByQuestionId[question.id]) count += 1;
    }
    return count;
  }, [quiz.questions, selectionsByQuestionId]);

  const onPick = (optionId: string) => {
    if (!currentQuestion) return;

    setSelectionsByQuestionId((prev) => ({ ...prev, [currentQuestion.id]: optionId }));

    if (stepIndex < questionCount - 1) {
      setStepIndex((i) => i + 1);
    } else {
      setView("result");
    }
  };

  const onBack = () => {
    setStepIndex((i) => Math.max(0, i - 1));
  };

  const onNext = () => {
    if (stepIndex < questionCount - 1) setStepIndex((i) => i + 1);
    else setView("result");
  };

  const onRestart = () => {
    setSelectionsByQuestionId({});
    setStepIndex(0);
    setView("quiz");
  };

  if (view === "result" && winner && result) {
    const share = winner.shareText;
    return (
      <section className="card">
        <h1 className="title">{quiz.title}</h1>
        <p className="subtle">
          You answered {answeredCount}/{questionCount}. Your Saairah mood is:
        </p>

        <div className="question" style={{ marginTop: 18 }}>
          {winner.image ? (
            <img
              src={winner.image}
              alt={winner.title}
              style={{
                width: "100%",
                maxHeight: 280,
                objectFit: "cover",
                borderRadius: 16,
                border: "1px solid rgba(244, 246, 255, 0.12)",
                marginBottom: 14,
              }}
            />
          ) : null}

          <h2 className="resultName">{winner.title}</h2>
          <p className="subtle" style={{ marginTop: 0 }}>
            {winner.description}
          </p>

          <div className="shareLine" aria-label="Share text">
            {share}
          </div>

          <div className="controls">
            <button className="btn" type="button" onClick={onRestart}>
              Restart
            </button>
            <button
              className="btn btnPrimary"
              type="button"
              onClick={() => navigator.clipboard?.writeText?.(share)}
              title="Copies share text to clipboard"
            >
              Copy share text
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="card">
      <h1 className="title">{quiz.title}</h1>
      <p className="subtle">Pick what feels most like you. No wrong answers—only lore.</p>
      <div className="pillRow">
        <span className="pill">
          Question {Math.min(stepIndex + 1, questionCount)}/{questionCount}
        </span>
        <span className="pill">Answered: {answeredCount}</span>
        <span className="pill">Personality scoring</span>
        <span className="pill">Deterministic tiebreaks</span>
      </div>

      {currentQuestion ? (
        <div className="question">
          <h2 className="questionTitle">{currentQuestion.prompt}</h2>
          <div className="options" role="list">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className="optionBtn"
                onClick={() => onPick(opt.id)}
                aria-pressed={currentSelection === opt.id}
              >
                {opt.text}
              </button>
            ))}
          </div>

          <div className="controls">
            <button className="btn" type="button" onClick={onBack} disabled={stepIndex === 0}>
              Back
            </button>
            <button className="btn" type="button" onClick={onRestart}>
              Restart
            </button>
            <button className="btn btnPrimary" type="button" onClick={onNext} disabled={!currentSelection}>
              {stepIndex < questionCount - 1 ? "Next" : "See results"}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}


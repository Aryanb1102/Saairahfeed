import { useMemo, useRef, useState } from "react";
import { PersonalityQuiz, QuizSelectionsByQuestionId } from "../quiz/types";
import { scorePersonalityQuiz } from "../quiz/scorePersonalityQuiz";
import "./buzzfeedQuiz.css";

type Props = {
  quiz: PersonalityQuiz;
  onGoToCrossword?: () => void;
};

const isShortLabel = (text: string) => {
  const trimmed = text.trim();
  const wordCount = trimmed.split(/\s+/).filter(Boolean).length;
  return trimmed.length <= 44 && wordCount <= 7;
};

export default function PersonalityQuizView({ quiz, onGoToCrossword }: Props) {
  const [view, setView] = useState<"quiz" | "result">("quiz");
  const [selectionsByQuestionId, setSelectionsByQuestionId] = useState<QuizSelectionsByQuestionId>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const questionCount = quiz.questions.length;

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

  const onRestart = () => {
    setSelectionsByQuestionId({});
    setView("quiz");
    setSubmitAttempted(false);
    const first = quiz.questions[0];
    if (first) questionRefs.current[first.id]?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  };

  const firstUnansweredIndex = useMemo(() => {
    for (let i = 0; i < quiz.questions.length; i += 1) {
      const question = quiz.questions[i]!;
      if (!selectionsByQuestionId[question.id]) return i;
    }
    return -1;
  }, [quiz.questions, selectionsByQuestionId]);

  const isComplete = answeredCount === questionCount;
  const progressPct = questionCount === 0 ? 0 : Math.round((answeredCount / questionCount) * 100);

  const onPick = (questionId: string, optionId: string) => {
    setSelectionsByQuestionId((prev) => ({ ...prev, [questionId]: optionId }));
    setSubmitAttempted(false);

    const currentIndex = quiz.questions.findIndex((q) => q.id === questionId);
    const next = quiz.questions[currentIndex + 1];
    if (next) {
      // Auto-scroll (BuzzFeed feel): pick -> glide to next question
      setTimeout(() => {
        questionRefs.current[next.id]?.scrollIntoView?.({ behavior: "smooth", block: "start" });
      }, 0);
    }
  };

  const onGetResults = () => {
    setSubmitAttempted(true);
    if (!isComplete) {
      const idx = firstUnansweredIndex;
      if (idx >= 0) {
        const q = quiz.questions[idx]!;
        questionRefs.current[q.id]?.scrollIntoView?.({ behavior: "smooth", block: "start" });
      }
      return;
    }
    setView("result");
  };

  return (
    <div className="bfPage">
      <header className="bfTopNav">
        <div className="bfTopNavInner">
          <a className="bfLogo" href="/" onClick={(e) => e.preventDefault()}>
            Saairahfeed
          </a>
          <div className="bfNavTabs">
            <button type="button" className="bfNavTab bfNavTabActive" disabled>
              Quiz
            </button>
            {onGoToCrossword ? (
              <button type="button" className="bfNavTab" onClick={onGoToCrossword}>
                Crossword
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <main className="bfMain">
        <article className="bfQuizCard" aria-label="BuzzFeed-style quiz">
          <header className="bfQuizHeader">
            {view === "result" && winner ? (
              <>
                <h1 className="bfResultTitle">{winner.title}</h1>
                <p className="bfResultDek">{winner.description}</p>
                {winner.image ? (
                  <div className="bfResultMedia">
                    <img className="bfResultImg" src={winner.image} alt={winner.title} />
                  </div>
                ) : null}
                <div className="bfShareLine" aria-label="Share text">
                  {winner.shareText}
                </div>
                <div className="bfControls">
                  <button className="bfBtn" type="button" onClick={onRestart}>
                    Restart
                  </button>
                  <button
                    className="bfBtn bfBtnPrimary"
                    type="button"
                    onClick={() => navigator.clipboard?.writeText?.(winner.shareText)}
                    title="Copies share text to clipboard"
                  >
                    Copy share text
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="bfQuizTitle">{quiz.title}</h1>
                <p className="bfQuizDek">Pick what feels most like you. No wrong answers—only lore.</p>

                <div className="bfProgressWrap" aria-label="Quiz progress">
                  <div className="bfProgressMeta">
                    <span className="bfProgressText">
                      Answered {answeredCount} of {questionCount}
                    </span>
                    <span className="bfProgressText bfMuted">Tiebreaks are deterministic</span>
                  </div>
                  <div
                    className="bfProgressTrack"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={questionCount}
                    aria-valuenow={answeredCount}
                  >
                    <div className="bfProgressFill" style={{ width: `${progressPct}%` }} />
                  </div>
                </div>

                {submitAttempted && !isComplete ? (
                  <div className="bfError" role="alert">
                    Answer all questions before getting your results. (We need the full lore.)
                  </div>
                ) : null}
              </>
            )}
          </header>

          {view !== "result" ? (
            <>
              {quiz.questions.map((question, index) => {
                const selection = selectionsByQuestionId[question.id];
                const hasImage = question.options.some((opt) => Boolean(opt.image));
                const isUnlocked = firstUnansweredIndex === -1 ? true : index <= firstUnansweredIndex;

                return (
                  <div
                    key={question.id}
                    className="bfQuestionBlock"
                    ref={(el) => {
                      questionRefs.current[question.id] = el;
                    }}
                    aria-label={`Question ${index + 1}`}
                  >
                    <h2 className="bfQuestionTitle">
                      {index + 1}. {question.prompt}
                    </h2>

                    {hasImage ? (
                      <div className="bfAnswerGrid" role="list" aria-disabled={!isUnlocked}>
                        {question.options.map((opt) => {
                          const isSelected = selection === opt.id;
                          const shouldDim = Boolean(selection) && !isSelected;
                          const selectedClass = isSelected
                            ? index % 2 === 0
                              ? "bfIsSelected"
                              : "bfIsSelectedBlue"
                            : "";

                          return (
                            <button
                              key={opt.id}
                              type="button"
                              className={`bfAnswerCard ${selectedClass} ${shouldDim ? "bfDimmed" : ""}`}
                              aria-pressed={isSelected}
                              onClick={() => {
                                if (!isUnlocked) return;
                                onPick(question.id, opt.id);
                              }}
                            >
                              <div className="bfAnswerMedia">
                                {opt.image ? <img className="bfAnswerImg" src={opt.image} alt={opt.text} /> : null}
                              </div>
                              <div
                                className={`bfAnswerLabel ${
                                  isShortLabel(opt.text) ? "bfAnswerLabelBold" : "bfAnswerLabelNormal"
                                }`}
                              >
                                {opt.text}
                              </div>
                              <div className="bfCheck" aria-hidden="true">
                                ✓
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="bfAnswerList" role="list" aria-disabled={!isUnlocked}>
                        {question.options.map((opt) => {
                          const isSelected = selection === opt.id;
                          const shouldDim = Boolean(selection) && !isSelected;
                          const selectedClass = isSelected
                            ? index % 2 === 0
                              ? "bfIsSelected"
                              : "bfIsSelectedBlue"
                            : "";

                          return (
                            <button
                              key={opt.id}
                              type="button"
                              className={`bfTextOption ${selectedClass} ${shouldDim ? "bfDimmed" : ""}`}
                              aria-pressed={isSelected}
                              onClick={() => {
                                if (!isUnlocked) return;
                                onPick(question.id, opt.id);
                              }}
                              style={{ fontWeight: isShortLabel(opt.text) ? 700 : 400 }}
                            >
                              {opt.text}
                              <span className="bfCheckInline" aria-hidden="true">
                                ✓
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="bfControls">
                <button className="bfBtn" type="button" onClick={onRestart}>
                  Restart
                </button>
                <button className="bfBtn bfBtnPrimary" type="button" onClick={onGetResults} disabled={!isComplete}>
                  Get Results
                </button>
              </div>
            </>
          ) : null}
        </article>
      </main>
    </div>
  );
}

import { MoodId, PersonalityQuiz, QuizSelectionsByQuestionId, moodIds } from "./types";

export type MoodScoreBreakdown = {
  points: number;
  selectionCount: number;
  maxSingleContribution: number;
};

export type PersonalityQuizScoreResult = {
  winnerId: MoodId;
  breakdown: Record<MoodId, MoodScoreBreakdown>;
  ranking: Array<{ id: MoodId } & MoodScoreBreakdown>;
};

const createEmptyBreakdown = (): Record<MoodId, MoodScoreBreakdown> => {
  const entries = moodIds.map((id) => [
    id,
    { points: 0, selectionCount: 0, maxSingleContribution: 0 },
  ] as const);
  return Object.fromEntries(entries) as Record<MoodId, MoodScoreBreakdown>;
};

const tieIndex = (quiz: PersonalityQuiz, moodId: MoodId): number => {
  const index = quiz.tieBreakOrder.indexOf(moodId);
  return index === -1 ? Number.POSITIVE_INFINITY : index;
};

const compareMoodIds = (
  quiz: PersonalityQuiz,
  breakdown: Record<MoodId, MoodScoreBreakdown>,
  a: MoodId,
  b: MoodId,
): number => {
  const left = breakdown[a];
  const right = breakdown[b];

  if (left.points !== right.points) return right.points - left.points;
  if (left.selectionCount !== right.selectionCount) return right.selectionCount - left.selectionCount;
  if (left.maxSingleContribution !== right.maxSingleContribution)
    return right.maxSingleContribution - left.maxSingleContribution;

  const tieA = tieIndex(quiz, a);
  const tieB = tieIndex(quiz, b);
  if (tieA !== tieB) return tieA - tieB;

  return a.localeCompare(b);
};

export const scorePersonalityQuiz = (
  quiz: PersonalityQuiz,
  selectionsByQuestionId: QuizSelectionsByQuestionId,
): PersonalityQuizScoreResult => {
  const breakdown = createEmptyBreakdown();

  for (const question of quiz.questions) {
    const selectedOptionId = selectionsByQuestionId[question.id];
    if (!selectedOptionId) continue;

    const option = question.options.find((opt) => opt.id === selectedOptionId);
    if (!option) continue;

    for (const [moodIdRaw, pointsRaw] of Object.entries(option.scores)) {
      const moodId = moodIdRaw as MoodId;
      const points = Number(pointsRaw);
      if (!Number.isFinite(points) || points <= 0) continue;

      breakdown[moodId].points += points;
      breakdown[moodId].selectionCount += 1;
      breakdown[moodId].maxSingleContribution = Math.max(breakdown[moodId].maxSingleContribution, points);
    }
  }

  const moodRanking = [...moodIds].sort((a, b) => compareMoodIds(quiz, breakdown, a, b));
  const winnerId = moodRanking[0]!;

  return {
    winnerId,
    breakdown,
    ranking: moodRanking.map((id) => ({ id, ...breakdown[id] })),
  };
};


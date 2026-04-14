export const moodIds = [
  "not_pregnant_saairah",
  "saairah_queen",
  "locked_in_saairah",
  "low_blood_sugar_saairah",
  "grateful_saairah",
  "capitalist_saairah",
  "thursday_night_saairah",
] as const;

export type MoodId = (typeof moodIds)[number];

export type ScoreMap = Partial<Record<MoodId, number>>;

export type PersonalityQuizResult = {
  id: MoodId;
  title: string;
  description: string;
  shareText: string;
  image?: string;
};

export type PersonalityQuizAnswerOption = {
  id: string;
  text: string;
  image?: string;
  scores: ScoreMap;
};

export type PersonalityQuizQuestion = {
  id: string;
  prompt: string;
  options: PersonalityQuizAnswerOption[];
};

export type PersonalityQuiz = {
  id: string;
  title: string;
  results: Record<MoodId, PersonalityQuizResult>;
  questions: PersonalityQuizQuestion[];
  tieBreakOrder: MoodId[];
};

export type QuizSelectionsByQuestionId = Record<string, string | undefined>;

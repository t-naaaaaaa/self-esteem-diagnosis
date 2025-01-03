export type QuestionType = {
  id: number;
  question: string;
  category: string;
  advice: string;
};

export type ResultType = {
  category: string;
  count: number;
  description: string;
  recommendations: string[];
};

export type CategoryDescriptions = {
  [key: string]: {
    title: string;
    description: string;
    recommendations: string[];
  };
};
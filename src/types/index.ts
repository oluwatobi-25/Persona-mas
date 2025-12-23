export type Category = 'Vibe' | 'Wallet' | 'Chow';

export interface Personality {
  id: string;
  name: string;
  alias: string;
  description: string;
  imageIcon: string; // Icon name from Lucide or path to image
  traits: string[];
}

export interface Question {
  id: number;
  text: string;
  category: Category;
  options: {
    text: string;
    personalityId: string; // The personality this answer maps to
  }[];
}

export interface QuizState {
  currentQuestionIndex: number;
  score: Record<string, number>; // personalityId -> score
  selectedAnswers: number[]; // Index of selected option for each question
  isCompleted: boolean;
  questions: Question[]; // The randomized subset of questions for this session
}

import type { Question } from '../types';

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const selectQuizQuestions = (allQuestions: Question[]): Question[] => {
  // Ensure mix of categories
  const vibeQuestions = shuffleArray(allQuestions.filter(q => q.category === 'Vibe'));
  const walletQuestions = shuffleArray(allQuestions.filter(q => q.category === 'Wallet'));
  const chowQuestions = shuffleArray(allQuestions.filter(q => q.category === 'Chow'));

  // Distribute roughly evenly: 3, 3, 2 or similar
  // We need 8 total.
  // Take 3 from Vibe, 3 from Wallet, 2 from Chow (or randomized distribution)
  
  // Let's randomize the counts slightly but ensure coverage
  const selection: Question[] = [];
  
  selection.push(...vibeQuestions.slice(0, 3));
  selection.push(...walletQuestions.slice(0, 3));
  selection.push(...chowQuestions.slice(0, 2));

  // If we don't have enough in one category (unlikely with 30+), we'd need fallback, 
  // but we know we have 10+ in each.

  // Shuffle final selection
  return shuffleArray(selection);
};

export const calculatePersonality = (scores: Record<string, number>): string => {
  let bestPersonalityId = '';
  let maxScore = -1;
  let ties: string[] = [];

  for (const [id, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      bestPersonalityId = id;
      ties = [id];
    } else if (score === maxScore) {
      ties.push(id);
    }
  }

  // Handle ties randomly
  if (ties.length > 1) {
    const randomWinner = ties[Math.floor(Math.random() * ties.length)];
    return randomWinner;
  }

  return bestPersonalityId;
};

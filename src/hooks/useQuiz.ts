import { useState, useCallback } from 'react';
import type { Question, Personality } from '../types';
import { selectQuizQuestions, calculatePersonality } from '../utils/quizUtils';
import { questions as allQuestions } from '../data/questions';
import { personalities } from '../data/personalities';

export const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // @ts-ignore - used for internal calculations
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [resultPersonality, setResultPersonality] = useState<string | null>(null);

  const startQuiz = useCallback(() => {
    const selected = selectQuizQuestions(allQuestions);
    setQuestions(selected);
    setCurrentQuestionIndex(0);
    setScores({});
    setIsCompleted(false);
    setResultPersonality(null);
  }, []);

  const handleAnswer = useCallback((personalityId: string) => {
    if (currentQuestionIndex < questions.length - 1) {
      setScores(prev => ({
        ...prev,
        [personalityId]: (prev[personalityId] || 0) + 1
      }));
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      setScores(prev => {
        const newScores = {
           ...prev,
           [personalityId]: (prev[personalityId] || 0) + 1
        };
        const winnerId = calculatePersonality(newScores);
        setResultPersonality(winnerId);
        return newScores;
      });
    }
  }, [currentQuestionIndex, questions.length]);

  const resetQuiz = useCallback(() => {
    startQuiz();
  }, [startQuiz]);

  const currentQuestion = questions[currentQuestionIndex];

  const resultData = resultPersonality 
    ? (personalities.find(p => p.id === resultPersonality) as Personality | undefined)
    : null;

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    isCompleted,
    resultData,
    startQuiz,
    handleAnswer,
    resetQuiz
  };
};

import { useState, useEffect } from 'react';
import { BackgroundEffects } from './components/layout/BackgroundEffects';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { QuizScreen } from './components/screens/QuizScreen';
import { ResultScreen } from './components/screens/ResultScreen';
import { LoadingScreen } from './components/screens/LoadingScreen';
import { useQuiz } from './hooks/useQuiz';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  
  const { 
    questions, 
    currentQuestion, 
    currentQuestionIndex, 
    handleAnswer, 
    isCompleted, 
    resultData,
    startQuiz,
    resetQuiz
  } = useQuiz();

  // Handle completion loading state
  useEffect(() => {
    if (isCompleted && !isCalculating && resultData) {
      setIsCalculating(true);
      const timer = setTimeout(() => {
        setIsCalculating(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCompleted, resultData]);

  const handleStart = () => {
    startQuiz();
    setHasStarted(true);
  };

  const handleRetake = () => {
    setHasStarted(false);
    resetQuiz();
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-christmas-red selection:text-white">
      <BackgroundEffects />
      
      {!hasStarted && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {hasStarted && !isCompleted && currentQuestion && (
        <QuizScreen
          question={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {hasStarted && isCompleted && isCalculating && (
        <LoadingScreen />
      )}

      {hasStarted && isCompleted && !isCalculating && resultData && (
        <ResultScreen
          personality={resultData}
          onRetake={handleRetake}
        />
      )}
    </div>
  );
}

export default App;

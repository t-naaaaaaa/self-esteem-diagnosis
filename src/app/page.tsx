'use client';

import { useState, useEffect } from 'react';
import { questions } from '@/constants/questions';
import type { QuestionType } from '@/types';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import ResultCard from '@/components/ResultCard';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  const [currentQuestions, setCurrentQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // 質問をランダムに並び替え
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setCurrentQuestions(shuffled); // 全ての質問を使用
  }, []);

  const handleAnswer = (isYes: boolean) => {
    if (currentQuestions[currentIndex]) {
      const category = currentQuestions[currentIndex].category;
      setAnswers(prev => ({
        ...prev,
        [category]: (prev[category] || 0) + (isYes ? 1 : 0)
      }));

      if (currentIndex < currentQuestions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setCurrentQuestions(shuffled);
  };

  if (currentQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-4 text-xl">読み込み中...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          自己肯定感診断テスト (全12問)
        </h1>
        <SpeedInsights/>
        {!showResult ? (
          <>
            <ProgressBar current={currentIndex + 1} total={currentQuestions.length} />
            <QuestionCard
              question={currentQuestions[currentIndex].question}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <ResultCard results={answers} onRetry={handleRetry} />
        )}
      </div>
    </main>
  );
}
'use client';

import { motion } from 'framer-motion';

type QuestionCardProps = {
  question: string;
  onAnswer: (isYes: boolean) => void;
};

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 space-y-6"
    >
      <p className="text-lg text-gray-800 text-center">{question}</p>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onAnswer(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          はい
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
        >
          いいえ
        </button>
      </div>
    </motion.div>
  );
}
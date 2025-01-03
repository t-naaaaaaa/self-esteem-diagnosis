'use client';

import { motion } from 'framer-motion';
import { categoryDescriptions } from '@/constants/questions';

type ResultCardProps = {
  results: { [key: string]: number };
  onRetry: () => void;
};

export default function ResultCard({ results, onRetry }: ResultCardProps) {
  // 最も値が高いカテゴリーを見つける
  const maxCategory = Object.entries(results).reduce(
    (max, [category, count]) => {
      return count > max.count ? { category, count } : max;
    },
    { category: '', count: -1 }
  );

  const categoryData = categoryDescriptions[maxCategory.category];

  if (!categoryData) {
    return null;
  }

  const handleShare = () => {
    const recommendations = categoryData.recommendations.join('\n');
    const text = `これから以下のことを実践していきます！\n\n${recommendations}`;
    const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-lg p-6 space-y-6"
    >
      <h2 className="text-xl font-bold text-center text-gray-800">
        診断結果
      </h2>

      <div className="space-y-4">
        <p className="text-lg font-semibold text-center text-blue-600">
          {categoryData.title}が特に重要です
        </p>
        
        <p className="text-gray-700">
          {categoryData.description}
        </p>

        <div className="space-y-2">
          <p className="font-semibold text-gray-800">改善のためのアドバイス：</p>
          <ul className="list-disc pl-5 space-y-1">
            {categoryData.recommendations.map((rec, index) => (
              <li key={index} className="text-gray-700">{rec}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleShare}
          className="w-full px-6 py-2 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a8cd8] transition-colors flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Xでシェアする
        </button>

        <button
          onClick={onRetry}
          className="w-full px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          もう一度診断する
        </button>
      </div>
    </motion.div>
  );
}
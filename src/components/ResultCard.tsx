'use client';

import { motion } from 'framer-motion';

type ResultCardProps = {
  results: { [key: string]: number };
  onRetry: () => void;
};

const categoryInfo = {
  "自尊感情": {
    description: "自分に価値があるという感覚",
    method: "Wishリストを作成する",
    howTo: "白い紙に20分以内で50個の願望を書き出し、同じ傾向のものを分類。優先順位を★や○で付けましょう。多い項目があなたの本当にやりたいことです。"
  },
  "自己需要感": {
    description: "ありのままの自分を認められること",
    method: "スリーグッドシングスを3週間続ける",
    howTo: "毎晩寝る前に3分間、その日あった良いことを3つ書き出します。どんな小さなことでもOKです。"
  },
  "自己効力感": {
    description: "自分にはできると思える感覚",
    method: "バランスホイールを作成する",
    howTo: "健康、人間関係、仕事など8項目について1-10点で評価。直感を大切に点数をつけ、改善したい領域から優先的に取り組みましょう。"
  },
  "自己信頼感": {
    description: "自分を信頼して行動する感覚",
    method: "習慣シートを作成する",
    howTo: "1ヶ月分の習慣管理表を作成し、始めたいことと辞めたいことを記入。達成した日はカラフルに色を塗りましょう。"
  },
  "自己決定感": {
    description: "自分で決定できるという感覚",
    method: "緊急度×重要度マトリクスを作成する",
    howTo: "タスクを4象限（すぐやる・後でやる・委託する・やらない）に分類し、今年・今月・今日のTodoリストに反映させます。"
  },
  "自己有用感": {
    description: "自分は何かの役に立っているという感覚",
    method: "いいことした日記をつける",
    howTo: "毎晩、その日行った良いことを具体的に書き出します。どんな小さな親切でも記録に残しましょう。"
  },
  "高自己肯定感": {
    description: "自己肯定感が高く、自分自身を信頼できている状態",
    method: "SMARTな目標設定で更なる成長を",
    howTo: "目標設定をSMARTの法則に従って具体化し、行動計画を立てましょう。"
  }
};

const smartGoalGuide = {
  title: "SMARTの法則で目標を設定する",
  description: "高い自己肯定感を活かして、より具体的な目標達成を目指しましょう。",
  principles: [
    {
      label: "S（Specific：具体的）",
      example: "「健康になる」ではなく「週3回30分のジョギングを行う」"
    },
    {
      label: "M（Measurable：測定可能）",
      example: "進捗を数値や行動で評価できる目標を設定"
    },
    {
      label: "A（Achievable：達成可能）",
      example: "自分の現状に合わせた無理のない目標設定"
    },
    {
      label: "R（Relevant：関連性）",
      example: "人生の大きな目標に紐づいた意味のある目標"
    },
    {
      label: "T（Time-bound：期限付き）",
      example: "「いつまでに」を明確に設定"
    }
  ]
};

export default function ResultCard({ results, onRetry }: ResultCardProps) {
  // 全ての回答が「いいえ」かチェック
  const allNo = Object.values(results).every(count => count === 0);
  
  const priorityOrder = [
    "自尊感情",
    "自己需要感",
    "自己効力感",
    "自己信頼感",
    "自己決定感",
    "自己有用感"
  ];

  const maxCategory = allNo 
    ? { category: '高自己肯定感', count: 0 }
    : Object.entries(results).reduce(
        (max, [category, count]) => {
          if (count > max.count) {
            return { category, count };
          }
          if (count === max.count) {
            // 同点の場合は優先順位が高い（配列のインデックスが小さい）方を選択
            const currentPriority = priorityOrder.indexOf(category);
            const maxPriority = priorityOrder.indexOf(max.category);
            return currentPriority < maxPriority ? { category, count } : max;
          }
          return max;
        },
        { category: priorityOrder[0], count: -1 }
      );

  const categoryData = categoryInfo[maxCategory.category as keyof typeof categoryInfo];

  if (!categoryData) {
    return null;
  }

  const handleShare = () => {
    const text = allNo 
      ? `SMARTの法則で目標設定に取り組んでいきます！\n\n#自己肯定感診断 #目標設定 #メンタルケア`
      : `これから「${categoryData.method}」を実践していきます！\n\n#自己肯定感診断 #メンタルケア`;
    const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="result-card"
    >
      <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
        診断結果
      </h2>

      <div className="space-y-6">
        {allNo ? (
          <>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-blue-600 mb-2">
                あなたは素晴らしい自己肯定感をお持ちです！
              </p>
              <p className="text-gray-700">
                この強みを活かして、より具体的な目標を立て、さらなる成功を目指しましょう。
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-3">{smartGoalGuide.title}</h3>
              <p className="text-gray-700 mb-4">{smartGoalGuide.description}</p>
              <div className="space-y-3">
                {smartGoalGuide.principles.map((principle, index) => (
                  <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium text-gray-800">{principle.label}</p>
                    <p className="text-gray-600 text-sm">{principle.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-blue-600 mb-2">
                {maxCategory.category}を高めることが重要です
              </p>
              <p className="text-gray-700 mb-2">
                {categoryData.description}
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-green-700 mb-2">
                おすすめの取り組み方：{categoryData.method}
              </p>
              <p className="text-gray-700">
                {categoryData.howTo}
              </p>
            </div>
          </>
        )}

        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={handleShare}
            className="share-button"
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
            className="btn-secondary"
          >
            もう一度診断する
          </button>
        </div>
      </div>
    </motion.div>
  );
}
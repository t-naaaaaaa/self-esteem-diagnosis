import { QuestionType, CategoryDescriptions } from '../types';

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "朝鏡をみて自分の嫌なところを探してしまっている",
    category: "自尊感情",
    advice: "自分の長所に目を向け、肯定的な自己イメージを育てることが大切です"
  },
  {
    id: 2,
    question: "SNSを開くたび、人からの「いいね」を待っている自分がいる",
    category: "自尊感情",
    advice: "他者評価に依存せず、自分の価値基準を持つことが重要です"
  },
  {
    id: 3,
    question: "職場や学校、家庭でちょっと注意されるととても落ち込んでしまう、立ち直りに時間がかかる",
    category: "自己受容感",
    advice: "完璧を求めすぎず、失敗も成長の機会として受け入れましょう"
  },
  {
    id: 4,
    question: "自分のペースを乱されると些細なことでもイラッとしてしまうことがある",
    category: "自己需要感",
    advice: "柔軟性を持ち、状況に応じて対応する余裕を持つことが大切です"
  },
  {
    id: 5,
    question: "ふとしたときに「無理」「忙しい」「疲れた」「どうしよう」「嫌だ」「つらい」といったネガティブな言葉が出る",
    category: "自己効力感",
    advice: "小さな目標から始め、成功体験を積み重ねていきましょう"
  },
  {
    id: 6,
    question: "「〜せねば」「〜するべき」と考えてしまい、行動に起こせない",
    category: "自己効力感",
    advice: "完璧主義から脱却し、できることから少しずつ始めることが大切です"
  },
  {
    id: 7,
    question: "親や上司から言われた何気ない一言が気になって、こだわってしまう",
    category: "自己信頼感",
    advice: "他者の言葉を参考程度に捉え、自分の判断を信頼することを学びましょう"
  },
  {
    id: 8,
    question: "やるぞと決めたけれど、周りの目が気になり躊躇してしまう",
    category: "自己信頼感",
    advice: "自分の決定を信頼し、他者の評価に過度に影響されないようにしましょう"
  },
  {
    id: 9,
    question: "出かける前に、1日過ごす服選びにとても悩んでしまう",
    category: "自己決定感",
    advice: "決定に時間をかけすぎず、直感を信じることも大切です"
  },
  {
    id: 10,
    question: "一度決めたことなのに本当にこれでいいのかと悩んでしまうことがある",
    category: "自己決定感",
    advice: "決定後の後悔は自然なこと。その経験を次に活かすことを考えましょう"
  },
  {
    id: 11,
    question: "新しいことに挑戦したいなと思っても、「どうせ」「自分は〇〇」のように、限界を決めてしまうことがある",
    category: "自己有用感",
    advice: "自己限定的な思考から脱却し、新しい可能性に目を向けましょう"
  },
  {
    id: 12,
    question: "電車から降りる時やエレベーターに乗る時に、ペースが乱す人がいるとイライラしてしまう",
    category: "自己有用感",
    advice: "他者との関係性において柔軟性を持つことで、ストレスを軽減できます"
  }
];

export const categoryDescriptions: CategoryDescriptions = {
  "自尊感情": {
    title: "自尊感情",
    description: "自分自身の価値や存在意義を認める感覚が低下している可能性があります",
    recommendations: [
      "毎日、自分の良いところを1つ見つける習慣をつける",
      "SNSの使用時間を制限し、現実の人間関係を大切にする",
      "自分の成功や達成を日記に記録する"
    ]
  },
  "自己受容感": {
    title: "自己受容感",
    description: "自分の全てを受け入れる力が不足している可能性があります",
    recommendations: [
      "完璧を求めすぎない",
      "失敗を学びの機会として捉える",
      "自分の感情を否定せず、受け入れる練習をする"
    ]
  },
  "自己需要感": {
    title: "自己需要感",
    description: "自分の存在が必要とされている感覚が低下している可能性があります",
    recommendations: [
      "他者との関わりを積極的に持つ",
      "自分にできる社会貢献を考える",
      "家族や友人との絆を深める活動を行う"
    ]
  },
  "自己効力感": {
    title: "自己効力感",
    description: "自分の能力や可能性への信頼が低下している可能性があります",
    recommendations: [
      "小さな目標から始める",
      "達成可能な計画を立てる",
      "成功体験を意識的に作る"
    ]
  },
  "自己信頼感": {
    title: "自己信頼感",
    description: "自分の判断や決定を信頼する力が不足している可能性があります",
    recommendations: [
      "自分の直感を大切にする",
      "過去の成功体験を思い出す",
      "小さな決定から自分を信じる練習をする"
    ]
  },
  "自己決定感": {
    title: "自己決定感",
    description: "自分で決定を下す力が不足している可能性があります",
    recommendations: [
      "決定の際に時間制限を設ける",
      "直感を大切にする",
      "決定後は前を向いて進む"
    ]
  },
  "自己有用感": {
    title: "自己有用感",
    description: "自分が役立っている感覚が低下している可能性があります",
    recommendations: [
      "できることからボランティア活動を始める",
      "周りの人への感謝を表現する",
      "自分の技能や知識を活かせる場を探す"
    ]
  }
};
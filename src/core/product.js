export const product = {
  "repo": "color-certification-exam-trainer",
  "domain": "EducationLearning",
  "rank": 64,
  "tier": "P3",
  "score": 50,
  "ideaNo": 7,
  "ideaName": "色彩検定問題トレーニング",
  "field": "色彩資格トレーナー",
  "publicTarget": "GitHub Pages / GitHub Release",
  "platformScope": "GitHub Pages training app / GitHub Release教材",
  "overview": "色彩検定向けのサンプル問題、採点、復習、教材更新の注意点をまとめたブラウザ学習アプリ。",
  "problem": "色彩教材は問題品質と用語更新が重要で、単なる選択式UIだけでは学習価値が不足する。",
  "differentiation": "配色、用語、採点、復習理由を検証データに含め、更新履歴を手動確認できる。",
  "audience": "色彩検定の学習者、デザイン初学者、教材作成者",
  "requiredInputs": [
    "questionId",
    "selectedAnswer",
    "category",
    "reviewMode"
  ],
  "modules": [
    "question-bank",
    "exam-engine",
    "review-deck",
    "web-practice",
    "content-validator"
  ],
  "accent": "#2563eb",
  "secondary": "#7e22ce",
  "scenarioNouns": [
    "色彩問題",
    "採点",
    "復習メモ"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === 'mixed-batch') {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + '-' + index, inputs, flags: index === 2 ? ['needsReview'] : [] }));
    const accepted = results.filter((result) => result.status !== 'error').length;
    const warnings = results.filter((result) => result.status !== 'pass').length;
    return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted, warnings, missing: results.flatMap((result) => result.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === '');
  if (missing.length) return { id: scenario.id, status: 'error', accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((value) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown|overflow|rush|storm|fatigue|unstable|crowded|high/i.test(String(value)));
  const warnings = (scenario.flags || []).includes('needsReview') || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, domain: product.domain, releaseTarget: product.publicTarget, platformScope: product.platformScope, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}

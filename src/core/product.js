export const product = {
  "repo": "color-certification-exam-trainer",
  "domain": "EducationLearning",
  "rank": 64,
  "tier": "P3",
  "score": 50,
  "ideaNo": 7,
  "ideaName": "色彩検定問題トレーニング",
  "field": "資格試験・色彩検定",
  "publicTarget": "GitHub Pages / GitHub Release",
  "overview": "色相、明度、彩度、配色、色彩心理、慣用色名、PCCS、デザイン応用を問題演習で学ぶ。",
  "problem": "用語暗記と配色判断が混ざり、図版や色比較を含む復習が紙や別アプリに分かれやすい。",
  "differentiation": "色の見え方、用語、配色判断を同じ学習カードで扱い、実制作にも転用できる。",
  "audience": "色彩検定の用語と配色判断を反復したい学習者",
  "requiredInputs": [
    "questionId",
    "answer",
    "palette",
    "topic"
  ],
  "modules": [
    "exam-engine",
    "review-deck",
    "question-data",
    "web-app"
  ],
  "accent": "#7a4cc2",
  "secondary": "#f26d6d",
  "scenarioNouns": [
    "PCCS",
    "配色",
    "慣用色名"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === "mixed-batch") {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + "-" + index, inputs, flags: index === 2 ? ["needsReview"] : [] }));
    const accepted = results.filter((r) => r.status !== "error").length;
    const warnings = results.filter((r) => r.status !== "pass").length;
    return { id: scenario.id, status: warnings ? "warning" : "pass", accepted, warnings, missing: results.flatMap((r) => r.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === "");
  if (missing.length) return { id: scenario.id, status: "error", accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((v) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown/i.test(String(v)));
  const warnings = (scenario.flags || []).includes("needsReview") || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? "warning" : "pass", accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, releaseTarget: product.publicTarget, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}

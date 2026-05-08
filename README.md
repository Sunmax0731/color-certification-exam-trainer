# 色彩検定問題トレーニング

color-certification-exam-trainer は、NON PICKUP 優先リスト Rank 64 / EducationLearning No.7 から昇格した closed alpha プロダクトです。色相、明度、彩度、配色、色彩心理、慣用色名、PCCS、デザイン応用を問題演習で学ぶ。

## Quick Start

```powershell
cd D:\AI\EducationLearning\color-certification-exam-trainer
npm test
npm run cli
```

## Closed Alpha Scope

- 公開想定: GitHub Pages / GitHub Release
- 対象ユーザー: 色彩検定の用語と配色判断を反復したい学習者
- 手動テスト: Codex側では未実施。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記載

## Architecture

- `src/core`: プロダクト定義と代表シナリオ評価
- `src/validators`: representative suite と期待結果の検証
- `src/report`: validation result、web smoke、QCDS metrics、deterministic docs ZIP の生成
- `src/review-model`: QCDS 評価モデル
- `src/cli`: CLI 検証入口
- `src/web`: 静的Web表示と主要操作
- `src/app` / `data/questions.json`: 採点、復習、教材更新の境界

## Release Artifacts

- `dist/color-certification-exam-trainer-docs.zip`
- `dist/validation-result.json`
- `dist/web-smoke-result.json`
- `docs/release-evidence.json`

# 責務分割

対象: 色彩検定問題トレーニング (Rank 64, EducationLearning No.7)

| 領域 | 責務 |
| src/core | プロダクト定義と代表シナリオ評価 |
| src/validators | suite構造と期待結果の検証 |
| src/report | stable JSON、QCDS、docs ZIP生成 |
| src/review-model | QCDS定義と採点 |
| src/cli | CLI実行入口 |
| src/web | 静的Web表示と主要操作 |
| src/app / data | 問題データ、採点、復習、教材更新方針、GitHub Pages / Release 向け導線を整理します。 |

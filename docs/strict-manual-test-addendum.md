# 厳格手動テスト追補

対象: 色彩検定問題トレーニング (Rank 64, EducationLearning No.7)

Codex側では手動テスト未実施です。

作業ディレクトリ: `D:\AI\EducationLearning\color-certification-exam-trainer`

```powershell
npm test
npm run cli
```


## 手順

1. `index.html` を静的サーバーで開き、タイトルと概要を確認する。
2. 4つの代表シナリオを順に選び、Canvasがblankでなく、Status / Accepted / Warnings / Score が変わることを確認する。
3. missing-required が error、warning と mixed-batch が warning、happy-path が pass になることを確認する。
4. 問題データ、採点、復習、教材更新方針、GitHub Pages / Release 向け導線を整理します。
5. release asset 3件をダウンロードし、docs ZIP内に必要docsが含まれることを確認する。

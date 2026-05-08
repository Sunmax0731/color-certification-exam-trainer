# 要件定義

対象: 色彩検定問題トレーニング (Rank 64, EducationLearning No.7)

## 目的

色相、明度、彩度、配色、色彩心理、慣用色名、PCCS、デザイン応用を問題演習で学ぶ。

## 課題

用語暗記と配色判断が混ざり、図版や色比較を含む復習が紙や別アプリに分かれやすい。

## 要件

- 必須入力 `questionId`、`answer`、`palette`、`topic` を検証する。
- happy-path / missing-required / warning / mixed-batch を代表シナリオとして保持する。
- CLI、静的Web UI、自動テスト、docs ZIP、release evidence を同一repoで完結させる。
- 正式docsはNON PICKUP行、ZIP metadata、ドメインdocsを根拠に正常な日本語で再構成する。

問題データ、採点、復習、教材更新方針、GitHub Pages / Release 向け導線を整理します。

export function buildReviewDeck(results) { return results.filter((result) => !result.correct).map((result) => ({ questionId: result.questionId, topic: result.reviewTag, priority: "next-review" })); }

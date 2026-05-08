export function buildReviewDeck(results) { return results.filter((result) => result.status !== 'pass').map((result) => ({ id: result.id, reason: '復習対象', status: result.status })); }

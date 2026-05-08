import { evaluateScenario } from '../core/product.js';
export function scoreAnswer(attempt) { return evaluateScenario({ id: 'exam-attempt', inputs: attempt }); }

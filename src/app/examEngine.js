export function gradeAnswer(question, answer) { const correct = question.correctAnswer === answer; return { questionId: question.id, correct, reviewTag: correct ? "mastered" : question.topic }; }
export function gradeBatch(questions, answers) { return questions.map((question) => gradeAnswer(question, answers[question.id])); }

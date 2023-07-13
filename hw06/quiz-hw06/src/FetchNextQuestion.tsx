

// const TOTAL_QUESTIONS = 15;

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

const getQuestionUrl = (numOfQuestions: number, difficulty: Difficulty) =>
  `https://opentdb.com/api.php?amount=${numOfQuestions}&type=multiple&difficulty=${difficulty}`;

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const fetchQuestions = async (numOfQuestions: number, difficulty: Difficulty) => {
  const data = await (await fetch(getQuestionUrl(numOfQuestions, difficulty))).json();
  // console.log(data);
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ])
  }))
}

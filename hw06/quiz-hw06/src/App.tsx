import React, { useEffect, useState } from 'react';
import { QuestionCard } from './components/QuestionCard/QuestionCard';
import { Difficulty, QuestionsState, fetchQuestions } from './FetchNextQuestion';
import { GlobalStyle, VerticalWrapper, HorizontalWrapper } from './App.styles';
import { Button } from './components/Buttons/Button.styles';
import { MoneyBar } from './components/MoneyBar/MoneyBar';


const TOTAL_QUESTIONS = 15;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(-1);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [activateHalfJoker, setActivateHalfJoker] = useState(false);
  const [usedHalfJoker, setUsedHalfJoker] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setFirstLoad(true);
  }, [])

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setActivateHalfJoker(false);
    setUsedHalfJoker(false);

    const easyQuestions = await fetchQuestions(
      5, Difficulty.EASY
    );
    const mediumQuestions = await fetchQuestions(
      5, Difficulty.MEDIUM
    );
    const hardQuestions = await fetchQuestions(
      5, Difficulty.HARD
    );

    const newQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];

    setQuestions(newQuestions);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      if(firstLoad) setFirstLoad(false);

      const correct = questions[number].correct_answer === answer;

      if (correct) {
        // setScore(prev => prev + 1);
      } else {
        setGameOver(true);
      }
      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer,
      }

      setUserAnswers(prev => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    if(activateHalfJoker) setActivateHalfJoker(false);
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const highlightedIndexes = [4, 9, 14];

  const joker_half_half = () => {
    console.log('Joker half-half clicked!');
    setActivateHalfJoker(true);
    setUsedHalfJoker(true);
  };

  return (
    <>
      <GlobalStyle />
      <HorizontalWrapper>
        <VerticalWrapper>
          <h1>Who Wants To Be a Millionaire?</h1>
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <Button>
              <button className='start' onClick={startQuiz}>
                Start
              </button>
            </Button>

          ) : null}
          {loading ? <p>Loading Questions ...</p> : null}
          {!loading && !gameOver && (
            <QuestionCard
              questionNum={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
              answersForHiding={[questions[number].incorrect_answers[0], questions[number].incorrect_answers[1]]}
              hide={activateHalfJoker}
            />
          )}

          {!gameOver && !loading && (userAnswers.length === (number + 1)) && (number !== (TOTAL_QUESTIONS - 1)) ? (
            <Button>
              <button className='next' onClick={nextQuestion}>
                Next
              </button>
            </Button>
          ) : null}
          {gameOver && !firstLoad ? (
            <p>Incorrect answer!</p>
          ) : null}
          {!firstLoad && (gameOver || userAnswers.length === TOTAL_QUESTIONS) ? (
            <p>You have won {userAnswers.length < 5 ? "0" : (userAnswers.length > 10) ? "5.000" : (userAnswers.length === 15) ? "150.000" : "150"}€</p>
          ) : null}
        </VerticalWrapper>
        <MoneyBar highlightedIndexes={highlightedIndexes} currentSelection={number}
          currDifficulty={questions[number] ? questions[number].difficulty : "none"}
          jokerFunction={joker_half_half}
          usedHalfJoker={usedHalfJoker} />
      </HorizontalWrapper>
    </>
  );
}

export default App;

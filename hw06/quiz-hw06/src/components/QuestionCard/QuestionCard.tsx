import React, { PropsWithChildren } from "react";
import { AnswerObject } from "../../App";
import { Wrapper } from "./QuestionCard.styles";
import { AnswerButton } from "../Buttons/Button.styles";

interface QuestionCardProps {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
    answersForHiding: string[];
    hide: boolean;
}

export function QuestionCard(props: PropsWithChildren<QuestionCardProps>) {

    return (
        <Wrapper>
            <p className="question" dangerouslySetInnerHTML={{ __html: props.question }}/>
            <div className="answers">
                {props.answers.map((e) => (
                    <AnswerButton key={e} correct={props.userAnswer?.correctAnswer === e} userclicked={props.userAnswer?.answer === e} 
                        canhide={props.answersForHiding.includes(e)} activateHalfJoker={props.hide}>
                        <button disabled={props.userAnswer ? true : false} value={e} onClick={props.callback}>
                            <span dangerouslySetInnerHTML={{ __html: e}}/>
                        </button>
                    </AnswerButton>
                ))}
            </div>
        </Wrapper>
    );
}

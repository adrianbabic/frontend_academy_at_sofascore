import React, { PropsWithChildren } from 'react';
import { MoneyBarContainer, MoneyBarItem } from './MoneyBar.styles';
import { moneyValues } from './prizes';
import { JokerButton } from '../Buttons/Joker';

type MoneyBarProps = {
  highlightedIndexes: number[];
  currentSelection: number;
  currDifficulty : string;
  jokerFunction : () => void;
  usedHalfJoker : boolean;
};


export function MoneyBar(props: PropsWithChildren<MoneyBarProps>) {

    return (
        <MoneyBarContainer>
          <p className='difficulty-bar'>Question difficulty: {props.currDifficulty}</p>
          {moneyValues.map((value, index) => (
            <MoneyBarItem
              key={index}
              highlighted={props.highlightedIndexes.includes(index)}
              currentselection={props.currentSelection === index}
            >
              {value}
            </MoneyBarItem>
          ))}
          <JokerButton onClick={props.jokerFunction} name="50:50" used={props.usedHalfJoker} />
        </MoneyBarContainer>
      );
}

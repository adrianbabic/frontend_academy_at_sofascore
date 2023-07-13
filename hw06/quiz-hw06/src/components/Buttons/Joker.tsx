import React, { PropsWithChildren, useEffect, useState } from 'react';
import { StyledJokerButton, Cross } from './Button.styles';

type JokerButtonProps = {
    onClick: () => void;
    name: string;
    used: boolean;
};

export function JokerButton(props: PropsWithChildren<JokerButtonProps>) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        props.onClick();
    };

    useEffect(() => {
        if (!props.used) setClicked(false);
    }, [props.used])

    return (
        <StyledJokerButton disabled={clicked || props.used} onClick={handleClick} userclicked={clicked || props.used}>
            {clicked && <Cross>&times;</Cross>}
            {props.name}
        </StyledJokerButton>
    );
};




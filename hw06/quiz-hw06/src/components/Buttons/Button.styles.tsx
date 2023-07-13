import styled from "styled-components";

interface ButtonWrapperProps {
  userclicked?: boolean;
}

interface AnswerButtonProps {
  correct: boolean;
  userclicked: boolean;
  canhide: boolean;
  activateHalfJoker: boolean;
}

export const Button = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.4rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: rgb(17, 4, 129);
    border: 2px solid rgb(129, 129, 129);
    border-radius: 10px;
    color: white;
  }

  .start, .next {
    min-width: 150px;
  }
`;


export const AnswerButton = styled(Button) <AnswerButtonProps>`
  
  button {
  ${(props) => {
    if (props.correct) {
      return "background: rgb(19, 204, 34);"
    } else {
      if (!props.correct && props.userclicked) {
        return "background: rgb(197, 10, 10);"
      }
    }
  }
  };

  ${(props) => {
    if (props.activateHalfJoker && props.canhide) {
      return "color: transparent;"
    } else {
      return ""
    }
  }
  };
  }
`;



export const StyledJokerButton = styled.button<ButtonWrapperProps>`
  position: relative;   
  border: 5px solid white;
  padding: 10px;
  border-radius: 30px;
  background-color: rgb(87, 74, 202);
  margin-bottom: 20px;
  cursor: default;

  ${(props) => {
    if (props.userclicked) {
      return "cursor: default;"
    } else {
      return "cursor: pointer;"
    }
  }
  };
`;

export const Cross = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: red;
`;

// export const Cross = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     font-size: 40px;
//     color: red;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
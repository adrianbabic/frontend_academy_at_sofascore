import styled from "styled-components";

export const MoneyBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  background-color: white;
  padding: 10px;
  width: 300px;
  background-color: rgb(17, 4, 129);
  border: 5px solid rgb(129, 129, 129);
  border-radius: 10px;
  box-sizing: border-box;

  > p, button{
    font-size: 1.5rem;
    color: white;
    text-align: center;
    
  }

  .difficulty-bar {
    margin-top: 60px;
    margin-bottom: 0px;
  }

`;

export const MoneyBarItem = styled.div<{ highlighted: boolean, currentselection: boolean }>`
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  padding: 3px;
  box-sizing: content-box;
  width: 100%;
  font-weight: ${({ highlighted, currentselection }) => (highlighted || currentselection ? 'bold' : 'normal')};
  color: ${({ highlighted, currentselection }) => (highlighted && !currentselection ? 'gold' : 'white')};
  background-color: ${({ currentselection }) => (currentselection ? 'orange' : '')};
  border-radius: ${({ currentselection }) => (currentselection ? '10px' : '')};
`;
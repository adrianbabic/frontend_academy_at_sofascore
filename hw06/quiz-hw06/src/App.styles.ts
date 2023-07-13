import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     html {
        height: 100%;
     }

     body {
        background-color: rgb(55, 118, 255);  
        margin: 0;
        padding: 0 20px;
        /* display: flex; */
        /* justify-content: space-between; */
        width: 100%;
     }

     * {
        box-sizing: border-box;
     }


`;

export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  flex: 0 0 80%;

  > p {
    color: white;
    font-size: 1.5rem;
  }
`;

export const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

import styled, { createGlobalStyle } from "styled-components";
import 'typeface-roboto';

export const GlobalMainViewStyle = createGlobalStyle`
     html {
        height: 100%;
        font-family: 'Roboto', sans-serif;
     }

     body {
        margin: 0;
        width: 100%;
        background-color: #eff3f8;
     }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 276px);
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 48px 24px;
  border-radius: 16px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const InnerContainerNoPadding = styled(InnerContainer)`
  padding: unset;
  overflow: hidden;
  width: 120%;
  min-width: 400px;
`;

export const InnerText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #121212;
  width: 100%;
`;

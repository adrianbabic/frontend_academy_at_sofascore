import styled from "styled-components";

export const EventNavBar = styled.div`
  width: 100%;
  height: 7%;
  min-height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;

  a {
    text-decoration: none;
    color: #374df5;
    font-size: 18px;
    font-weight: bold;
  }

  img {
    cursor: pointer;
  }
`;

export const EventHeaderContainer = styled.div`
  width: 100%;
  height: 23%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid rgba(18, 18, 18, 0.1) 1px;
  overflow: hidden;
  padding: 14px;
`;

export const ResultContainer = styled.div<{ inProgress: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ inProgress }) =>
    inProgress ? "#e93030" : "rgba(18, 18, 18, 0.4)"};

  span {
    font-size: 32px;
    font-weight: bold;
  }
`;

export const LogoAndTeamNameContainer = styled.div`
  height: 100%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    height: 70%;
    object-fit: contain;
    margin-bottom: 8px;
  }

  a {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const EventIncidentsContainer = styled.div`
  width: 100%;
  height: 70%;
  padding-top: 8px;

  display: flex;
  flex-direction: column-reverse;

  overflow-y: auto;

  ::-webkit-scrollbar {
    border-radius: 16px;
    width: 10px;
    background-color: #eff3f8;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: #dddddd;
    transition: width 0.3s;
  }
`;

export const CustomMessage = styled.p`
  background-color: rgba(192, 207, 228, 0.2);
  color: rgba(18, 18, 18, 0.4);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 10%;
`;

export const CustomTournamentLink = styled.a`
  color: #374df5;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #374df5 2px;
  text-decoration: none;
  height: 10%;
`;

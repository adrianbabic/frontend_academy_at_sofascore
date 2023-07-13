import styled from "styled-components";
import { InnerContainer } from "../../../styles/main-view.styles";

export const Container = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: auto;
  padding: 16px;

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

export const StandingsTable = styled.table`
  width: 100%;
`;

export const StandingsTableHead = styled.thead``;

export const PositionCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f0eedf;
  text-align: center;
`;

export const StandingsTableHeadCell = styled.th`
  padding: 10px;
  text-align: left;

  & ${PositionCircle} {
    background-color: unset;
  }
`;

export const StandingsTableRow = styled.tr``;

export const StandingsTableData = styled.td`
  padding: 10px;
`;

export const StandingsHeaderContainer = styled(InnerContainer)`
  height: 20%;
  margin: unset;
  padding: 0px 16px;
  box-sizing: border-box;
`;

export const StandingsTableContainer = styled(InnerContainer)`
  height: 80%;
  margin: unset;
  margin-top: 12px;
`;

export const TournamentLogoContainer = styled.div`
  width: 15%;
  min-width: 40px;
  max-width: 90px;
  height: calc(width - 0);
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid rgba(18, 18, 18, 0.2) 1px;
  border-radius: 4px;
  box-sizing: bor;
  margin-top: 12px;

  img {
    width: 100%;
    height: calc(width - 0px);
  }
`;

export const LeagueTitle = styled.h1`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 3.5vh;
  margin-top: 12px;
`;

export const HeaderTitleContainer = styled.div`
  height: 67%;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const HeaderNavBarContainer = styled.div`
  height: 33%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

export const TableOption = styled.div<{ isSelected: boolean }>`
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  margin: 0px 12px;
  padding: 16px 0px;
  cursor: pointer;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "3px solid #374df5" : "none"};
  border-radius: 3px;
  color: ${({ isSelected }) =>
    isSelected ? "#374df5" : "rgba(18, 18, 18, 0.4)"};

  &:hover {
    color: ${({ isSelected }) => (isSelected ? "#374df5" : "#dddddd")};
  }
`;

import styled from "styled-components";

export const EventsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const DetailsBar = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`;

export const EventsListContainer = styled(EventsContainer)`
  height: 80%;

  overflow-y: auto;
  overflow-x: hidden;

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

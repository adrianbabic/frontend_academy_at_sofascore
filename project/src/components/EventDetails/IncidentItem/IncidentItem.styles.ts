import styled from "styled-components";

export const IncidentContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;

export const Period = styled(IncidentContainer)`
  justify-content: center;
  background-color: #f7f6ef;
  border-radius: 16px;
`;

export const HomeIncident = styled(IncidentContainer)`
  justify-content: flex-start;
`;

export const AwayIncident = styled(IncidentContainer)`
  justify-content: flex-end;
`;

export const PlayerInformation = styled.div<{ isAway: boolean }>`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-left: ${({ isAway }) =>
    isAway ? "none" : "solid rgba(18, 18, 18, 0.1) 1px"};
  border-right: ${({ isAway }) =>
    !isAway ? "none" : "solid rgba(18, 18, 18, 0.1) 1px"};
  justify-content: ${({ isAway }) => (isAway ? "flex-end" : "flex-start")};
  
  p {
    margin-left: ${({ isAway }) => (isAway ? "15px" : "0px")};
    margin-right: ${({ isAway }) => (!isAway ? "15px" : "0px")};
    color: #121212;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const TimeAndIconContainer = styled.div`
  color: rgba(18, 18, 18, 0.4);
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    height: 60%;
    object-fit: contain;
  }

  a {
    text-align: center;
    font-size: 10px;
  }
`;

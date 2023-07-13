import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  height: 10%;
  cursor: pointer;

  &:hover {
    background-color: #eff3f8;
  }
`;

export const ItemTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  border-right: solid rgba(18, 18, 18, 0.4) 1px;
  margin-right: 5%;
  padding-right: 5%;
  padding-left: 3%;
  color: rgba(18, 18, 18, 0.4);
`;

export const ItemTeamsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-right: 5%;
`;

export const TeamContainer = styled.div<{ isLoser : boolean }>`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: ${({ isLoser }) => (!isLoser ? '#121212' : 'rgba(18, 18, 18, 0.4)')};
`;

export const NameAndLogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    height: 80%; 
    width: 80%;
    margin-right: 10px;
  }

  a {
    white-space: nowrap;
  }
`;

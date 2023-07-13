import styled from "styled-components";

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

export const Option = styled.div<{ isSelected: boolean }>`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #121212;
  border-radius: 16px;
  background-color: ${({ isSelected }) => (isSelected ? "#e1edfe" : "none")};

  img {
    width: 40px;
    height: 40px;
  }

  p {
    margin-left: 16px;
  }

  &:hover {
    background-color: ${({ isSelected }) => isSelected ? "#e1edfe" : " #eff3f8"};
  }
`;

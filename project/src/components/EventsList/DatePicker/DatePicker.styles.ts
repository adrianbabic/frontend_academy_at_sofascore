import styled from "styled-components";

export const DatesContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1327ba;
  padding: 0px 6px;
  box-sizing: border-box;
`;

export const DateItem = styled.div<{ active: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 14px;
  margin: 0px 4px;

  border-bottom: ${({ active }) => (active ? "4px solid #ffffff" : "none")};
  a {
    margin-bottom: 3px;
  }
`;

export const Button = styled.button`
  width: 10%;
  height: 60%;
  color: #1327ba;
  font-weight: bold;
`;

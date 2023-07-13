import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #374df5;
  width: 100%;
  margin-bottom: 48px;
`;

export const SportsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
`;

export const Option = styled.a<{ isSelected: boolean}>`
  text-align: center;
  box-sizing: border-box;
  line-height: 60px;
  height: 100%;
  margin: 0 30px;
  color: #eff3f8;
  text-decoration: none;
  cursor: pointer;
  border-bottom: ${({ isSelected }) => (isSelected ? '5px solid #ffffff' : 'none')};

  &:hover {
    color: #dddddd;
  }
`;


export const MenuIcon = styled.div`
    margin-left: 20px;
    img {
        width: 30px;
        height: 30px;
    }
`;
import Link from "next/link";
import styled from "styled-components";

export const SideMenuContainer = styled.div<{ open: boolean }>`
  position: absolute;
  color: #ffffff;
  background-color: #374df5;
  top: 60px; /* Uzeti u obzir visinu NavBar-a, pa raditi prema tome */
  left: 0;
  height: calc(100% - 60px);
  width: 20%;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
  transform: translateX(-100%);
  transform: ${({ open }) => (!open ? "translateX(-100%)" : "translateX(0%)")};
`;

export const MenuLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 20px 0px;
  border-bottom: solid #ffffff 1px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #1327ba;
  }
`;

export const FirstMenuLink = styled(MenuLink)`
  border-top: solid #ffffff 1px;
`;

export const MenuIcon = styled.div`
  margin-left: 20px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Background = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${({ open }) => (!open ? "none" : "unset")};
`;

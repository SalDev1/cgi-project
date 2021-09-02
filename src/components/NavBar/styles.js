import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ scroll }) =>
    scroll ? "rgba(0,0,0,0.5)" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-family: "Lato", sans-serif;
  z-index: 999;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const AppName = styled.div`
  width: 10%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.h1`
  font-size: 28px;
  letter-spacing: 1.02;
  font-family: "Kanit", sans-serif;
  font-weight: 700;

  span {
    color: #fc4444;
  }
`;

export const NavLinks = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkS)`
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;

  hr {
    width: 0%;
    opacity: 0;
    transition: all 0.5s;
    border: 1px solid #fc4444;
  }

  &:hover {
    hr {
      width: 100%;
      opacity: 1;
    }
  }
`;

export const SocialLinks = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none !important;
    color: white;
  }

  .MuiSvgIcon-root {
    width: 22px;
    height: 22px;
    cursor: pointer;
    padding: 0px 8px;

    &:hover {
      color: #fc4444;
    }
  }
`;

export const MobileBar = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  transition: 1.5s;
  color: white;
  opacity: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
  top: ${({ isOpen }) => (isOpen ? "-100%" : "0%")};

  /* top: 100%; */
  opacity: 1;
  font-family: "Lato", sans-serif;
`;

export const AppName = styled.div`
  width: 10%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  .MuiSvgIcon-root {
    color: white;
    position: absolute;
    top: 5%;
    left: 10%;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &:hover {
      border-radius: 30px;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
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
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NavLink = styled(LinkS)`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 0px;

  &:hover {
    color: #fc4444;
  }
`;

export const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a:link {
    text-decoration: none !important;
    color: white;
  }

  .MuiSvgIcon-root {
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 8px;
    color: #fc4444;
    background-color: white;
    margin-left: 5px;
  }
`;

import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #474747;
  color: white;
  border: 1px solid #474747;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: initial;
  }
`;

export const NavLinks = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavLink = styled(LinkS)`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  hr {
    width: 0%;
    opacity: 0;
    /* transition: all 0.5s; */
    border: 1px solid white;
    background-color: white;
  }

  &:hover {
    hr {
      width: 100%;
      opacity: 1;
    }
  }
`;

export const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  a:link {
    text-decoration: none !important;
    color: white;
  }

  .MuiSvgIcon-root {
    border: 1px solid white;
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

export const FooterContent = styled.div`
  width: 60%;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;

  @media (max-width: 768px) {
    width: initial;
  }
`;

export const FooterP = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  text-align: center;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  span {
    color: #fc4444;
  }
`;

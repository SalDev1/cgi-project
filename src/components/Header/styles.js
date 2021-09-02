import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ scroll }) => (scroll ? "black" : "transparent")};
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: 0.5s;
  font-family: "Lato", sans-serif;
`;

export const Div1 = styled.div`
  width: 60%;
  height: 500px;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GlobalVideo = styled.video`
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  filter: brightness(45%);
  opacity: 0.8;
`;

export const Content = styled.div`
  position: absolute;
  width: 60%;
  height: fit-content;
  top: 25%;
  left: 8%;
  right: 0;
  bottom: 0;

  span {
    color: #eb3434;
  }

  @media (max-width: 768px) {
    top: 15%;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bolder;
  padding: 4px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  color: white;
  background-color: red;
  border: none;
  border-radius: 30px;
  margin-top: 40px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root {
    padding-left: 6px;
    width: 15px;
    height: 15px;
  }

  &:hover {
    background-color: #cf0000;
  }
`;

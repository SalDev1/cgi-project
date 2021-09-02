import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  flex-direction: column;
`;

export const Head = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  font-weight: 600;

  hr {
    border-radius: 30px;
    width: 35%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #fc4444;
    background-color: #fc4444;
  }
`;

export const Section = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0px;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Div1 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeadTitle = styled.h2`
  font-size: 24px;
  color: rgba(0, 0, 0, 1);
  position: relative;

  div {
    z-index: -99;
    top: 70%;
    position: absolute;
    width: 35px;
    height: 10px;
    background-color: red;
    border-radius: 50px;
  }
`;

export const Content = styled.p`
  font-size: 18px;
  margin: 15px 0px;

  span {
    color: #fc4444;
    font-weight: 700;
  }
`;

export const Div2 = styled.div`
  width: 100%;
  height: fit-content;
  background-position: center;
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 50%;
    border-radius: 4px;
  }
`;

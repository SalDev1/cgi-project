import styled from "styled-components";

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
    padding: 0px;
  }
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
    border-radius: 70px;
    width: 35%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #fc4444;
    background-color: #fc4444;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  height: 440px;
`;

export const ImageCarousel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: center;
`;

export const Div1 = styled.div`
  width: 100%;
  height: 550px;

  .slider-single-content {
    box-shadow: none !important;
    object-fit: contain;
  }

  .slider-right div {
    border: none !important;
  }

  .slider-left div {
    border: none !important;
  }

  @media (max-width: 768px) {
    height: fit-content;
  }
`;

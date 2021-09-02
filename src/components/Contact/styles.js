import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  margin-left: auto;
  margin-right: auto;
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

export const Div1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: none;
  }
`;

export const Form = styled.form`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media (max-width: 768px) {
    width: 85%;
    padding: none;
  }
`;

export const Input = styled.input`
  padding: 10px 10px;
  border-radius: 8px;
  margin: 5px;
  width: ${({ changeWidth }) => (changeWidth ? "100" : "50%")};
  outline-width: 0px;
  border: none;
  border: 2px solid #c4c4c4;
  background-color: white;
  color: #a29c9c;

  ::placeholder {
    color: #c4c4c4;
  }

  .email {
    width: 500px;
  }
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
`;

export const TextArea = styled.textarea`
  padding: 10px 10px;
  border-radius: 8px;
  margin: 5px;
  border: none;
  border: 2px solid #c4c4c4;
  outline-width: 0px;

  ::placeholder {
    color: #c4c4c4;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #fc4444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  text-transform: uppercase;
`;

export const ImageDiv = styled.div`
  width: 60%;
  height: fit-content;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;

export const AddressContent = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: start; */
  flex-direction: column;

  h1 {
    font-size: 24px;
    padding-top: 5px;
    text-align: left;
    font-weight: lighter;
    color: rgba(252, 68, 68, 0.8);
  }

  p {
    padding-top: 10px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.8);

    span {
      font-weight: 600;
      color: #fc4444;
    }
  }

  a {
    display: flex;
    align-items: center;
    padding-top: 5px;
    color: #fc4444;
  }
`;

import React, { useState } from "react";
import {
  Container,
  Head,
  Title,
  Div1,
  Form,
  Input,
  Div2,
  TextArea,
  Button,
  ImageDiv,
  Image,
  AddressContent,
} from "./styles";

import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  const [changeWidth, setChangeWidth] = useState(false);

  return (
    <Container name="Contact">
      <Head>
        <Title>
          Contact
          <hr />
        </Title>
      </Head>
      <Div1>
        <Form>
          <Div2>
            <Input
              type="input"
              name="First Name"
              placeholder="Your First Name"
              changeWidth={changeWidth}
              required
            />
            <Input
              type="input"
              name="Last Name"
              placeholder="Your Last Name"
              required
              changeWidth={changeWidth}
            />
          </Div2>
          <Input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            changeWidth={!changeWidth}
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            rows={4}
            col={50}
          ></TextArea>
          <Button type="submit">Contact Us</Button>
          <AddressContent>
            <h1>Address:</h1>
            <p>CU TBI, Gharuan, Punjab</p>
            <a href="#">
              <CallIcon />
              8800996010 - Confederation of Global Innovators
            </a>
            <a href="#">
              <MailIcon />
              infocgi@gmail.com
            </a>
          </AddressContent>
        </Form>
        <ImageDiv>
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
            alt="/"
          />
        </ImageDiv>
      </Div1>
    </Container>
  );
};

export default Contact;

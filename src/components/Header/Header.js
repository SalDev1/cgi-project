import React from "react";
import { Container, Div1, GlobalVideo, Content, Title, Button } from "./styles";
import Video from "../../videos/World-1992.mp4";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Header = () => {
  return (
    <Container name="Home">
      <Div1>
        <GlobalVideo autoPlay loop="true">
          <source src={Video} type="video/mp4"></source>
        </GlobalVideo>
      </Div1>
      <Content>
        <Title>
          Connecting for <span>Contributing</span>,
        </Title>
        <Title>
          Interacting for <span>Innovating</span>
        </Title>
        <Button>
          Join Us <ArrowForwardIosIcon />
        </Button>
      </Content>
    </Container>
  );
};

export default Header;

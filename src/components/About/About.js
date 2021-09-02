import React from "react";
import {
  Container,
  Head,
  Title,
  Section,
  HeadTitle,
  Content,
  Div1,
  Div2,
  Image,
} from "./styles";

import WorkImage from "../../images/Work_time.svg";

const About = () => {
  return (
    <Container name="About">
      <Head>
        <Title>
          About Us <hr />
        </Title>
      </Head>
      <Section>
        <Div1>
          <HeadTitle>
            Who are We ?<div />
          </HeadTitle>
          <Content>
            The Confederation of Global Innovators(also known as{" "}
            <span>CGI</span>) is a platform created for the demographic dividend
            of our nation. We strongly believe that today our country's youth,
            which comprises more than 65% of the total population, is the
            biggest asset for our country. From the point of inception, the CGI,
            as a community, has worked tirelessly in the field of bridging the
            gap between the stakeholders of development (like students,
            professional aspirants etc) and the opportunities like the corporate
            housesThe CGI is created to serve as a platform to connect
            innovators, stakeholders of development and the student community.
          </Content>
          <HeadTitle>
            Why CGI?
            <div />
          </HeadTitle>
          <Content>
            <span>CGI</span> is a structured network of startups that
            facilitates Founders to network with other Entrepreneurs, Mentors,
            Investors, Job Seekers and Professionals. The key to the success of
            all startups under us are the offerings we bring. Being the biggest
            innovation accelerator we provide all our members with multiple
            premium services.
          </Content>
        </Div1>
        <Div2>
          <Image src={WorkImage} alt="/" />
        </Div2>
      </Section>
    </Container>
  );
};

export default About;

import React from "react";
// import { Carousel } from "react-responsive-carousel";
import { Container, Head, Title, Div1, Image } from "./styles";
import { Carousel } from "3d-react-carousal";
import Image1 from "../../images/image-1.jpg";
import Image2 from "../../images/image-2.jpg";
import Image3 from "../../images/image-3.jpg";
import Image4 from "../../images/image-4.jpg";
import Image5 from "../../images/image-5.jpg";

const Gallery = () => {
  const slides = [
    <Image src={Image1} alt="1" />,
    <Image src={Image2} alt="2" />,
    <Image src={Image3} alt="3" />,
    <Image src={Image4} alt="4" />,
    <Image src={Image5} alt="5" />,
  ];

  return (
    <Container name="Gallery">
      <Head>
        <Title>
          Gallery
          <hr />
        </Title>
      </Head>
      <Div1>
        <Carousel slides={slides} />
      </Div1>
    </Container>
  );
};

export default Gallery;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, SocialLinks, FooterContent, FooterP , NavLinks ,NavLink} from "./styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import CallIcon from "@material-ui/icons/Call";
import ShareIcon from "@material-ui/icons/Share";

const Footer = () => {
  const navlinks = ["Home", "About", "Gallery", "Contact"];
  const icons = [
    <InstagramIcon />,
    <FacebookIcon />,
    <MailIcon />,
    <TwitterIcon />,
    <CallIcon />,
    <ShareIcon />,
  ];

  return (
    <Container>
      <SocialLinks>
        {icons.map((icon) => (
          <a href="#">{icon}</a>
        ))}
      </SocialLinks>
        <NavLinks>
        {navlinks.map((link) => (
          <NavLink to={link} smooth="smooth" duration={1500}>
            {link}
            <hr />
          </NavLink>
        ))}
      </NavLinks>
      <FooterContent>
        <FooterP>
          Copyright © <span>2021</span> . All rights reserved , Powered By
          Confederation of Global Innovators
          <br />® Terms and Conditions Reserved.
        </FooterP>
      </FooterContent>
    </Container>
  );
};

export default Footer;

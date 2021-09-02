/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {
  Container,
  AppName,
  Logo,
  NavLinks,
  NavLink,
  SocialLinks,
} from "./styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import ClearIcon from "@material-ui/icons/Clear";

const MobileNav = ({ toggle, isOpen }) => {
  const navlinks = ["Home", "About", "Gallery", "Contact"];

  return (
    <Container isOpen={!isOpen}>
      <AppName>
        <ClearIcon onClick={toggle} />
        <Logo>
          C<span>GI</span>
        </Logo>
      </AppName>
      <NavLinks>
        {navlinks.map((link) => (
          <NavLink to={link} smooth="smooth" duration={1800}>
            {link}
          </NavLink>
        ))}
      </NavLinks>
      <SocialLinks>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <MailIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
      </SocialLinks>
    </Container>
  );
};

export default MobileNav;

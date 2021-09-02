/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import {
  Container,
  AppName,
  Logo,
  NavLinks,
  NavLink,
  SocialLinks,
  MobileBar,
} from "./styles";

import ShareIcon from "@material-ui/icons/Share";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = ({ toggle }) => {
  const navlinks = ["Home", "About", "Gallery", "Contact"];
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(!scroll);
      } else {
        setScroll(scroll);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Container scroll={scroll}>
      <MobileBar onClick={toggle}>
        <MenuIcon />
      </MobileBar>
      <AppName>
        <Logo>
          C<span>GI</span>
        </Logo>
      </AppName>
      <NavLinks>
        {navlinks.map((link) => (
          <NavLink to={link} smooth="smooth" duration={1500}>
            {link}
            <hr />
          </NavLink>
        ))}
      </NavLinks>
      <SocialLinks>
        <a href="https://www.google.com">
          <ShareIcon />
        </a>
        <a href="#">
          <MailIcon />
        </a>
        <a href="#">
          <CallIcon />
        </a>
      </SocialLinks>
    </Container>
  );
};

export default NavBar;

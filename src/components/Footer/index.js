import React from "react";
import {
  FooterContainer,
  FooterLinksSection,
  LinksContainer,
  LinkHeading,
  FooterLink,
  SocialMediaLinksContainer,
} from "./styled";
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksSection>
        <LinksContainer>
          <LinkHeading>INFO</LinkHeading>
          <FooterLink to={`/`}>About Us</FooterLink>
          <FooterLink to={`/`}>Careers</FooterLink>
          <FooterLink to={`/`}>Press</FooterLink>
        </LinksContainer>
        <LinksContainer>
          <LinkHeading>LEGAL</LinkHeading>
          <FooterLink to={`/`}>Terms & Conditions</FooterLink>
          <FooterLink to={`/`}>Privacy Policy</FooterLink>
          <FooterLink to={`/`}>Cookie Policy</FooterLink>
        </LinksContainer>
        <LinksContainer>
          <LinkHeading>SUPPORT</LinkHeading>
          <FooterLink to={`/`}>Contact Us</FooterLink>
          <FooterLink to={`/`}>Help</FooterLink>
        </LinksContainer>
        <LinksContainer>
          <LinkHeading>SOCIAL MEDIA</LinkHeading>
          <SocialMediaLinksContainer>
            <FooterLink to={`/`}>
              <FaFacebookSquare />
            </FooterLink>
            <FooterLink to={`/`}>
              <FaInstagramSquare />
            </FooterLink>
            <FooterLink to={`/`}>
              <FaTwitterSquare />
            </FooterLink>
            <FooterLink to={`/`}>
              <FaPinterestSquare />
            </FooterLink>
            <FooterLink to={`/`}>
              <FaYoutubeSquare />
            </FooterLink>
          </SocialMediaLinksContainer>
        </LinksContainer>
      </FooterLinksSection>
    </FooterContainer>
  );
};

export default Footer;

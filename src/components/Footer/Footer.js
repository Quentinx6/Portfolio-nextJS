import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="mailto:quentinlecompte@outlook.fr">Mail</LinkItem>
        </LinkColumn>   
        <LinkColumn>
          <LinkTitle>Linkedin</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/quentin-lecompte/">Linkedin</LinkItem>
        </LinkColumn>      
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Tout droit réservé - LECOMPTE Quentin - 2022</Slogan>
        </CompanyContainer>
        <SocialContainer>
      <SocialIcons href="https://github.com/Quentinx6">
        <AiFillGithub size="6rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/quentin-lecompte/">
        <AiFillLinkedin size="6rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

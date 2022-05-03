import React from 'react';
import { DiApple, DiChrome, DiCodepen, DiCss3, DiDatabase, DiFirebase, DiHtml53DEffects, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
      <SectionTitle main>Technologies</SectionTitle>
      <SectionText>

      </SectionText>
      <List>
        <ListItem>
          <DiCss3 size="5rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Expérience sur<br/>
              Js - Next.JS <br/>
              HTML -
              SCSS<br/>
              Twig - CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDatabase size="5rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Expérience sur<br/>
              PHP, Symfony
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiCodepen size="5rem"/>
          <ListContainer>
            <ListTitle>Maquettage</ListTitle>
            <ListParagraph>
              Expérience sur<br/>
              Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider />
  </Section>
);

export default Technologies;

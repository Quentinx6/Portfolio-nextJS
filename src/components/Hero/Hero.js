import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Lecompte <br/>Quentin<br/>
        Portfolio !
      </SectionTitle>
      <SectionText>
        Sur ce site web vous allez pourvoir en apprendre plus sur moi et les projets que j'ai pu réaliser.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
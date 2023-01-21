import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to
        <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a passionate Software Developer. I love designing scalable systems, solving complex problems, and writing elegant and efficient code.
      I am a lifelong learner and I always try to improve my skills.
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>

  </Section>
);
export default Hero;
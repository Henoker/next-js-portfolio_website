import React from 'react';
import { motion } from "framer-motion";
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding as={motion.div} initial={{ y: 25, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    delay: 0.2,
    duration: 0.75,
  }}>
    <LeftSection as={motion.div} initial={{ y: 25, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    delay: 0.2,
    duration: 0.75,
  }}>
      <SectionTitle main center>
        Welcome to
        <br/>
        Henock's Portfolio
      </SectionTitle>
      <SectionText>
      I am a passionate Software Developer. I love designing scalable systems, solving complex problems, and writing elegant and efficient code.
      I am a lifelong learner.
      </SectionText>
      <a href="HenockResume.pdf" download="HenockResume.PDF"><Button>Download Resume</Button></a>
      
    </LeftSection>
   


  </Section>
);
export default Hero;
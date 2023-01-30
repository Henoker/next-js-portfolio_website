import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { About, AboutHeading, Box, Boxes, BoxNum, BoxText, FontWeightLight, TitleLetter, TitleWord } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  // <Section>
  //   <SectionTitle>Personal Acomplishments</SectionTitle>
  //   <Boxes>
  //     {data.map((card, index) =>(
  //       <Box key={index}>
  //         <BoxNum>{card.number}+</BoxNum>
  //         <BoxText>{card.text}</BoxText>
  //       </Box>

  //     ))}
  //   </Boxes>
  // </Section>
  <About>
    <AboutHeading>
      <TitleLetter>a</TitleLetter>
      <TitleWord>
        <FontWeightLight>about</FontWeightLight>
        &nbsp;<span>Me</span>
      </TitleWord>
    </AboutHeading>
  </About>

);

export default Acomplishments;

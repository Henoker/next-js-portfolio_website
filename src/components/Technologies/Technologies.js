import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { motion } from "framer-motion";

const Technologies = () =>  (
  <Section id='tech'>
    <div>
    <SectionDivider/>
    <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
      I have worked with a range of technologies from backend to frontend.
    </SectionText>
    <List as={motion.div} initial={{x:-100}} whileInView={{ x:0, rotate: [0, 0, 0] }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
           JavaScript <br/>
           React.js <br/>
            Next.js <br/>
            HTML5 <br/>
            CSS3 <br/>
            BOOTSTRAP <br/>
            Tailwind
          </ListParagraph>
        </ListContainer>          
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
           Python <br/>
           Django <br/>
           Node Express.Js <br/>
           MySQL <br/>
           PostgreSQL <br/>
           Mongo DB
          </ListParagraph>
        </ListContainer>          
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>Other Stacks</ListTitle>
          <ListParagraph>
            Expierence with <br/>
            Software localization<br/>
            Git/Github <br/>
            CA and CD workflow <br/>
            API tesing <br/>
            Docker<br/>
          </ListParagraph>
        </ListContainer>          
      </ListItem>
    </List>

    </div>

  </Section>
);

export default Technologies;

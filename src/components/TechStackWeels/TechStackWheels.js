import React from 'react'
import { TechStacks } from '../../constants/constants';
import { motion } from "framer-motion";
import { GridContainer, FerrisWheelTechs, ImageParent } from './TechStackWheelsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Image from 'next/image';

const TechStackWheels = () => {
    return (
      <Section>
        <SectionTitle>Techstack Ferris Wheel</SectionTitle>
        <div>
          {TechStacks.map(({ image, index }) => {
            return (
              <GridContainer as={motion.div}
              key={index + 1}
              initial="initial"
              animate={["animate", "initialHide"]}
              variants={{
                initial: {
                  opacity: 0,
                },
                initialHide: {
                  opacity: 1,
                  transition: {
                    delay: index + 1,
                    
                  },
                },
                animate: {
                  rotate: -360,
                  transition: {
                    duration: TechStacks.length,
                    repeat: Infinity,
                    delay: index + 1,
                    ease: "linear",
                  },
                },
              }}

                
              >
                <FerrisWheelTechs >
                  <ImageParent>
                    <Image src={image} width="100%" height="100%" />
                  </ImageParent>
                </FerrisWheelTechs>
              </GridContainer>
            );
          })}
        </div>
      </Section>
    );
  };
  
  export default TechStackWheels;
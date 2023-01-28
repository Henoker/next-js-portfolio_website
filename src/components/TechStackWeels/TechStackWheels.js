import React from 'react'
import { TechStacks } from '../../constants/constants';
import { motion } from "framer-motion";
import { FerrisWheelTechs, ImageParent } from './TechStackWheelsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { GridContainer } from '../Projects/ProjectsStyles';
import Image from 'next/image';

const TechStackWheels = () => {
  return (
    <Section>
    <SectionTitle>Techstack FerrisWhell</SectionTitle>
      <div>{TechStacks.map(({image, id}) => {
        return(
            <GridContainer  as={motion.div} initial="initial"
            animate={["animate", "initialHide"]}
            variants={{
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: id + 1,
                },
              },
              animate: {
                rotate: -360,
                transition: {
                  duration: TechStacks.length,
                  repeat: Infinity,
                  delay: id + 1,
                  ease: "linear",
                },
              },
            }}
            >
            <FerrisWheelTechs>
            <ImageParent>

            <Image
                src={image} width="100%" height="100%" 
                
              />
            </ImageParent>
            </FerrisWheelTechs>

            </GridContainer>
            
        );
    })}
    </div>
</Section>
  );
}

export default TechStackWheels
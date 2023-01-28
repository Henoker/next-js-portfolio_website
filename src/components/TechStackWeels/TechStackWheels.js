import React from 'react'
import { TechStacks } from '../../constants/constants';
import { motion } from "framer-motion";
import { GridContainer, FerrisWheelTechs, ImageParent } from './TechStackWheelsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Image from 'next/image';

const TechStackWheels = () => {
    return (
      <Section>
        <SectionTitle>Main Techstack Ferris Wheel</SectionTitle>
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
                    delay: index + 2,
                    
                  },
                },
                animate: {
                  rotate: -360,
                  transition: {
                    duration: TechStacks.length,
                    repeat: Infinity,
                    delay: index + 2,
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

// import dynamic from 'next/dynamic';
// import { motion } from "framer-motion";
// import "../../styles/globals";


// const TechStackWheels = () => {
//   const ferrisOfTechs = [
//     "create-react-app.svg",
//     "django-icon.svg",
//     "python.svg",
//     "nextjs-icon.svg",
//     "postgresql.svg",
//     "javascript.svg",
//     // "node-js.svg",
//     // "firebase.svg",
//     // "mongodb.svg",
//     // "tailwindcss.svg",
//     // "html.svg",
//     // "scss.svg",
//   ];
//   return (
//     <div className="App">
//       {ferrisOfTechs.map((tech, index) => {
//         return (
//           <motion.div
//             className="ferris-wheel-techs"
//             key={index + 1}
//             initial="initial"
//             animate={["animate", "initialHide"]}
//             variants={{
//               initial: {
//                 opacity: 0,
//               },
//               initialHide: {
//                 opacity: 1,
//                 transition: {
//                   delay: index + 1,
//                 },
//               },
//               animate: {
//                 rotate: -360,
//                 transition: {
//                   duration: ferrisOfTechs.length,
//                   repeat: Infinity,
//                   delay: index + 1,
//                   ease: "linear",
//                 },
//               },
//             }}
//           >
//             <div className="image-parent">
//               <img
//                 className="tech-icon"
//                 src={require(`../../../public/images/${tech}`)}
            
//                 alt={tech}
//               />
//             </div>
//           </motion.div>
//         );
//       }, [])}
//     </div>
//   );
// }

// export default dynamic(() => import('../../styles/globals').then(mod => mod.default), { ssr: false });

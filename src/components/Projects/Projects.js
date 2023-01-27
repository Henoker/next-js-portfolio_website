import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionTwo } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { motion } from "framer-motion";



const Projects = () => (
  <SectionTwo nopadding id='projects'>
    <div>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer as={motion.div} initial={{x:-100}} whileInView={{ x:0, rotate: [0, 0, 0] }}
      transition={{ ease: "easeOut", duration: 2 }} whileHover={{
        scale: 1.05,
        transition: { duration: 1 },
      }}
    >
      {projects.map(({id, image, title, description, tags, source, visit}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
           
          </TitleContent>
          <CardInfo>
          <TitleContent>Problem and My Solution</TitleContent>
          <Hr/>
            {description}
          </CardInfo>
          <div>
            <br/>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) =>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>Code</ExternalLinks>
            <ExternalLinks href={visit}>Live Demo</ExternalLinks>
          </UtilityList>

        </BlogCard>
      ))}
    </GridContainer>

    </div>

  </SectionTwo>
);

export default Projects;
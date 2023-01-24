import styled from 'styled-components';
import { motion } from "framer-motion";
import img from './../../../public/images/coding.gif';


export const HomeContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  margin-top: 200px;
  margin-left: 500px;
 
  
`

export const ExploreBtn = styled.a`
  display: block;
  padding: 16px 24px;
  color: white;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
`
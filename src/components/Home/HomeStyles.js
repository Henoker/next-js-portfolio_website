import styled from 'styled-components';
import { motion } from "framer-motion";


export const HomeContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #004158;
  
`

export const ExploreBtn = styled.a`
  display: block;
  padding: 16px 24px;
  color: white;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
`
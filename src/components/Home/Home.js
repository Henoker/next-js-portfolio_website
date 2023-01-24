import React from 'react'
import { HomeContainer, ExploreBtn} from './HomeStyles'
import Link from 'next/dist/client/link'
import Button from '../../styles/GlobalComponents/Button';
import VerticalBackgrounds from './VerticalBackground';
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <HomeContainer as={motion.div} animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        
      }}
    style={{ width: '25%', height: '50vh', }}
    >
        <Link href="/explore">
        <ExploreBtn><Button>Explore</Button></ExploreBtn>
      </Link>
    </HomeContainer>
  )
}

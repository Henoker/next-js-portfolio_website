import React from 'react'
import { HomeContainer, ExploreBtn} from './HomeStyles'
import Link from 'next/dist/client/link'
import Button from '../../styles/GlobalComponents/Button';

export const Home = () => {
  return (
    <HomeContainer>
        <Link href="/explore">
        <ExploreBtn><Button>Explore</Button></ExploreBtn>
      </Link>
    </HomeContainer>
  )
}

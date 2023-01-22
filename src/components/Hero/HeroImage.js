import React from 'react'
import { Img} from './HeroStyles';
import image from '../../../public/images/Henockremovedbg.png';

function HeroImage() {
  return (
    <div>
        <Img src={image}/>
    </div>
  )
}

export default HeroImage
import React, { useEffect, useState } from 'react'
import {BiUpArrow} from 'react-icons/bi';

const BackToTopButton = () => {
    const [BackToTopButton, setBackToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            }else {
                setBackToTopButton(false)
            }

        })
    }, [])

    const scrollUp = ()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
        {BackToTopButton && (
            <button style={{
                position: "fixed",
                bottom:"50px",
                right: "50px",
                cursor: 'pointer',
            }} onClick={scrollUp}>
                <BiUpArrow size={30}/>
            </button>
        )}
    </div>
  )
}

export default BackToTopButton
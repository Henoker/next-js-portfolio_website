import styled from 'styled-components'

export const GridContainer = styled.section`
display: flex;
top: auto;
height: 3vh;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  height: 10vh;
  padding: 2rem;
  padding-bottom: 0;
  right: 80%;
}

/* height: 50vh; */
`

export const FerrisWheelTechs = styled.div`
/* height: 100%; */
/* right: 80%;  */
/* top: 25%;   */
position: fixed;
/* overflow: hidden; */
`

export const ImageParent = styled.div`
/* right: 80%; */
/* top: 50%; */
position: fixed;
@media ${(props) => props.theme.breakpoints.sm} {
  height: 50%;
  width: 50%;
}
/* overflow: hidden; */
`
export const TechIcon = styled.div`
height: 40px;
pointer-events: none;
  /* rotate: -90deg; */

`
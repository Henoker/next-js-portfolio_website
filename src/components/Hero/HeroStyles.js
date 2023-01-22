import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  
 
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width:80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const Img = styled.img`
  display: flex;
  width:70%;
  height:70%;
  margin-left: 18rem;
  margin-top: none;
  padding: 0 auto;
  object-fit: fill;
  border-style: solid;
  border-color: #F46737 #945DD6 blue yellow;
  border-width: 15px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width:80%;
    display: none;
    

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: none;
    
  }
  
`
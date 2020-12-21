
import styled from 'styled-components'



export const DesktopWrap = styled.div`
  display: grid;
  grid-column: 1/-1;
  
  @media only screen and (min-width: 992px){
    grid-gap: 10px;
    grid-column: 1/9;
  }
`

export const StyledH1 = styled.h1`
text-align:center;
font-size:50px;
color:#707070;

`
import styled from 'styled-components'

export const FooterStyles = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  flex-direction:row;
  color:white;
  background: rgb(39, 51, 89, 0.3);
  border-top:2px solid silver;
  bottom: 0;
  left:0;
  right:0;
  @media (max-width:460px) {
    flex-direction:column;
    align-items:center;
  }
  
  
`
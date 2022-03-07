import styled from "styled-components"

export const HomeStyles = styled.div`
  display: flex;
  justify-content:center;
  flex-direction:column;
  color:white;
  .container{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    
  }
  @media (max-width:1100px){
    .container{
      display: flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
    }
  }
  
`
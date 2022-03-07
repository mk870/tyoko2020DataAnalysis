import styled from 'styled-components'

export const CeremonyStyles = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  .video{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    iframe{
      width:90vw;
      max-width:1500px;
      height:95vh;
      border:1px solid white;
      margin-top:10px;
    }
    p{
      font-weight:bold;
      margin:10px;
    }
  }
  
`
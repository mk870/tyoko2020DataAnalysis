import styled from 'styled-components'

export const WatchVideoStyles = styled.div`
  display: flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  .video{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    iframe{
      width: 90vw;
      max-width:1500px;
      height: 95vh;
      border:1px solid white;
      margin-top:1px;
      
    }
    p{
      font-weight:bold;
      margin:10px;
    }
  }
  .close{
    display:flex;
    justify-content:flex-end;
    width: 90vw;
    max-width:1500px;
  }
  @media (max-width:500px){
    .video{
      iframe{
        height: 60vh;
      }
    }
  }
`
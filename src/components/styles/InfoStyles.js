import styled from "styled-components";
export const InfoStyles = styled.div`
  display: flex;
  align-items:center;
  flex-direction:column;
  margin-top:5px;
  margin-bottom:10px;
  margin-right:5px;
  padding:5px;
  span{
    font-weight:bold;
    text-align:center;
  }
  .head{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
   img{
     height:380px;
     width:550px;
     border:2px solid red;
   }
  }
  .wrapper{
    display: flex;
    justify-content:center;
    flex-direction:column;
    background: rgb(39, 51, 89, 0.6);
    padding: 10px;
    margin-top:10px;
    border-radius:10px;
  }
  @media (max-width:620px){
    .head{
      img{
        height:50vh;
        width: 80vw;
      }
    }
  }
`
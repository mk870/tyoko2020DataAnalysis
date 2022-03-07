import styled from "styled-components";
export const CardStyles = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin-top:5px;
  margin-bottom:10px;
  padding: 5px;
  .top{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    img{
      height:380px;
      width:550px;
      border:2px solid red;
    }
  }
  .middle{
    display: flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:row;
    margin:5px;
    .ceremony{
      display: flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      padding: 5px;
      margin: 7px;
      background: rgb(39, 51, 89, 0.6);
      transition: all 300ms ease-in-out;
      img{
        height: 200px;
        width: 250px;
        margin:0px 5px 5px 5px;
      }
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  .bottom{
    display: grid;
    grid-gap:10px;
    margin:5px;
    grid-template-columns: 1fr 1fr 1fr;
    .image{
      display: flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background: rgb(39, 51, 89, 0.6);
      padding:5px;
      transition: all 300ms ease-in-out;
      img{
        height:100px;
        width: 150px;
        margin-bottom:5px;
      }
      span{
        font-weight:500;
      }
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  @media (max-width:620px){
    .top{
      img{
        height:50vh;
        width: 80vw;
      }
    }
    .middle{
      display: flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      .ceremony{
       margin-bottom:15px;
       img{
         height:50vh;
         width: 80vw;
         
       }
     }
    }
  }
  @media (max-width:620px){@media (max-width:620px){
   .bottom{
     grid-template-columns: 1fr 1fr;
   }
  }
  @media (max-width:360px){
   .bottom{
     .image{
       img{
         height:90px;
         width: 130px;
       }
     }
   }
  }
`
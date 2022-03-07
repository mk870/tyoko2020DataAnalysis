import styled from "styled-components";

export const NavbarStyles = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  background: rgb(39, 51, 89, 0.3);
  color:white;
  border-bottom: 1px solid silver;
  width:100%;
  .logo{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin:10px;
    img{
      height:90px;
      width:120px;
      border-radius:15px;
      border: 2px red solid;
      margin-right:10px;
    }
    span{
      color:red;
      font-weight:bold;
      font-style:italic;
      font-size:25px;
      margin-left:10px;
    }
  }
  .links{
    display: flex;
    span{
      display: flex;
      align-items:center;
      justify-content:center;
      margin:0px 10px;
      cursor:pointer;
      padding:8px;
      border-radius:10px;
      &:hover{
        background:rgb(39, 51, 89, 0.8);
      }
    }
  }
  @media (max-width:720px) {
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    .logo{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      img{
        height:90px;
        width:120px;
        margin-right:5em;
      }
    }
    .links{
      margin-bottom:10px;
    }
  }
  @media (max-width:380px) {
    .logo{
      img{
        margin-right:3em;
      }
    }
    .links{
      span{
        margin:0px 5px;
        padding:4px;
        font-size:14px;
      }
    }
    }
`
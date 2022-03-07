import styled from "styled-components";

export const SliderStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: rgb(39, 51, 89, 0.6);
  padding:10px;
  .preview{
    color:white;
  }
  .slidercontent{
    display: flex;
    justify-content:center;
    align-items:center;
  }
  img{
    height:400px;
    width: 600px;
    border:2px solid silver;
  }
  .arrow{
    border:2px solid white;
    border-radius:50%;
    background:transparent;
    color:white;
    width: 2rem;
    height: 2rem;
    top:255%;
    margin:20px;
    cursor:pointer;
    z-index:10;
    &:hover{
      background:rgb(255,255,255,0.5);
    }
  }
  .next{    
    right:1.5rem;
  }
  .prev{
    left:1.5rem;
  }
  .current{
    opacity:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transform:translateX(-50%);
    transition:all 0.5s ease;
    transform: translateX(0)
  }
  .slide{
    opacity:0;
    transform:translateX(-50%);
    transition:all 0.5s ease;
  }
  @media (max-width:1100px){
    img{
      height:20em;
      width: 30em;
    }
  }
  @media (max-width:600px){
    img{
      height: 50vh;
      width: 80vw;
    }
    .arrow{
      width: 1.5rem;
      height:1.5rem;
      margin: 5px;
    }
  }
  @media (max-width:400px){
    .slidercontent{
      margin:1px;
    }
    .arrow{
      width:1.1rem;
      height: 1.1rem;

    }
  }
`
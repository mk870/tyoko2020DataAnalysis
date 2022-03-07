import styled from 'styled-components'

export const DisciplineStyles = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin-top:10px;
  .grid{
    display:grid;
    grid-gap:10px;
    width:80%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content:center;
    align-items:center;
    margin:0px 10px 10px 10px;

    .video{
      text-align:center;
      background: rgb(39, 51, 89, 0.6);
      padding: 10px;
      transition: all 300ms ease-in-out;
      width:300px;
      height:300px;
      img{
        width: 300px;
        height:200px;
      }
      &:hover{
        transform: scale(1.05);
      }
    }
  }
  @media (max-width:1300px){
    .grid{
      grid-template-columns: 1fr 1fr 1fr;
      .video{
        height:300px ;
      }
    }
  }
  @media (max-width:990px){
    .grid{
      .video{
        width: 200px;
        height:220px;
        img{
          width:200px;
          height:120px;
        }
      }
    }
  }
  @media (max-width:720px){
    .grid{
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width:490px){
    .grid{
      .video{
        width: 150px;
        height:255px;
        img{
          width:150px;
          height:100px;
        }
      }
    }
  }
  @media (max-width:340px){
    .grid{
      .video{
        width: 120px;
        height:250px;
        img{
          width:120px;
          height:80px;
        }
      }
    }
  }
`
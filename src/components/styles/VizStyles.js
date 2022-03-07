import styled from "styled-components";

export const VizStyles = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  overflow-x: hidden;
  animation: fadeInAnimation ease 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes fadeInAnimation {
      0%{
        transform:translateY(15%);
        }
      100%{
        transform:translateY(0%);
        }
    }
  .info{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background: rgb(39, 51, 89, 0.6);
    border-radius: 10px;
    margin-bottom:10px;
    width: 90vw;
    padding: 15px;
    text-align:center;
  }
  .viz{
    width: 97.8vw;
  }
`
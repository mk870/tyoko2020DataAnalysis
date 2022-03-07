import styled from 'styled-components'

export const HighlightsStyles = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  select{
    width: 25%;
    min-width:200px;
    height:30px;
    border-radius:5px;
    outline: none;
    text-align:center;
    font-size:1.2em;
  }
  label{
    margin-top:15px;
    margin-bottom:10px;
    font-weight:bold;
    
  }
`
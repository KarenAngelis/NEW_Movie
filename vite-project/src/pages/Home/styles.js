import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 0%;
  grid-template-rows: 115px auto ;
  grid-template-areas: 
  "brand header"
  "newnote content";
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
  
`
export const NewNote = styled(Link)`
 
  
 
`


export const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 50px;
`;


export const StyleButton = styled.div`
background-color: blue,
`;

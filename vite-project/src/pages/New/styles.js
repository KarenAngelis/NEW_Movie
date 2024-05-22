import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    background-color: black;
    border-radius: 10px;

  }
`

export const Form = styled.form`
  max-width: 89%;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK_GENERAL};
    margin-bottom: 40px;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK_GENERAL};
      margin-left: 3px;
    }
  }
`

export const StyledHeading = styled.div`
  font-size: 36px; 
  margin-bottom: 40px;
`

export const StyledInput = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;

`


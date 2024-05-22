import styled from 'styled-components'
import backgroundImg from '../../assets/backgraund.png'


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_GENERAL};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT_WHITE};
  }
`

export const ButtonReturn  = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK_GENERAL};
  margin-top: 100px;

  >a {
    color: ${({ theme }) => theme.COLORS.PINK_GENERAL};
    margin-left: 3px;
  }
`


export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`
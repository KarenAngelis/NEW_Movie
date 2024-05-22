import styled from 'styled-components'

export const StyledNoteContainer = styled.div`
 width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`

export const StyledButton = styled.div`
  color:${({ theme }) => theme.COLORS.PINK_GENERAL};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px
  
`

export const StyledText = styled.p`
  /* Adicione estilos para o texto aqui */
  overflow: hidden;
  max-height: ${({ showFullText }) => (showFullText ? 'none' : '100px')};
  margin-top: 35px;
  
  color:${({ theme }) => theme.COLORS.BACKGROUND_400};
`;

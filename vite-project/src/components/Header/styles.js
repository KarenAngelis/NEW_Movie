import styled from 'styled-components';

export const Container = styled.div`
    grid-area: header;
    width: 100%;
    height: 116px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_INPUT};
    padding: 0 90px;
    display: flex;
    justify-content: space-between; /* Adiciona espaçamento entre os elementos */

`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const UserInfoText = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    align-items: flex-end;
`;

export const Strong = styled.strong`
    margin-bottom: 5px;
`;

export const Span = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;

    &:hover {
        opacity: 1;
        animation-timeline: 1s;
    }
`;

export const Img = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
`;

export const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    h1 {
    color: ${({ theme }) => theme.COLORS.PINK_GENERAL};

    }


    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-right: 10px;
    }
`;

export const Search = styled.div`
    /* Estilos para a área de pesquisa */
`;

export const SearchInput = styled.input`
  /* Estilos específicos para o Input de pesquisa */
  width: 300px; /* Defina o tamanho desejado */
  margin-left: 20px; /* Ajuste conforme necessário */
  gap: 40px;

  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT} ;
  color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
  
  margin-bottom: 8px;
  border-radius: 10px;

    height: 56px;
    width: 50%;
    margin: 60px;

   
   
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.BACKGROUND_INPUT};
    border: 0;

`;

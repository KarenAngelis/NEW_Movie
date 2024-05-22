import styled from 'styled-components';
import { IoMdTime } from "react-icons/io";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh; /* Alterado para min-height para evitar problemas com a altura da página */
    display: grid;
    grid-template-rows: auto 1fr; /* Alterado para uma proporção flexível entre o cabeçalho e o conteúdo */
    grid-template-areas: 
    "header"
    "content";
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};

    >main{
        width: 100%;
        padding: 40px 90px; /* Reduzido o preenchimento para telas menores */
        overflow-y: auto; /* Adicionado overflow-y para permitir rolagem vertical quando necessário */
        -webkit-overflow-scrolling: touch; /* Adicionado para suavizar a rolagem no iOS */
    }
`;

export const MainContainer = styled.main`
    /* Estilos da barra de rolagem */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK_GENERAL};
        border-radius: 8px;
    }
`;

export const MovieDetailsWrapper = styled.div`
    font-size: 24px; /* Reduzido o tamanho da fonte para telas menores */
    margin-bottom: 24px;
    width: 100%;
`;

export const Img = styled.img`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 8px;
`;

export const MovieInfo = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;

    > p {
        margin-right: 15px;
        opacity: 0.8;
    }
`;

export const Time = styled(IoMdTime)`
    margin-right: 3px;
    color: ${({ theme }) => theme.COLORS.PINK_GENERAL};
`;

export const Moviesummary = styled.div`
    text-align: justify;
    font-size: 16px; /* Reduzido o tamanho da fonte para telas menores */
`;
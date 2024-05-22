import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Title = styled.h2`
  margin-right: 16px;
  width: 20%; 
`;

export const StarContainer = styled.div`
  /* Estilos para o container de estrelas */
  display: flex;
  align-items: center;
  flex: 1 1 auto; /* Faz com que o container de estrelas ocupe todo o espaço disponível */
  width: 100%; /* Garante que o container de estrelas ocupe toda a largura */
  margin-top: 8px; /* Adiciona um espaçamento superior */
`;

export const FaStarDetails = styled(FaStar)`
  margin-right: 8px; /* Ajuste o espaçamento conforme necessário */
`;
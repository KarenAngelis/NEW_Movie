// MovieDetails.jsx
import React from 'react';
import { Container, Title, StarContainer, FaStarDetails } from './styles';

export function MovieDetails ({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <StarContainer>
        {[...Array(5)].map((_, index) => (
          <FaStarDetails key={index} color={index < 4 ? 'pink' : 'gray'} />
        ))}
      </StarContainer>
    </Container>
  );
};
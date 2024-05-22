import { useState } from 'react';
import {  StyledNoteContainer, StyledButton, StyledText  } from './styles';
import { Tag } from '../Tag';
import { MovieDetails } from '../../components/MovieDetails';

export function Note({ data }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const textLength = data.text ? data.text.length : 0;

  return (
    <StyledNoteContainer>
      <MovieDetails title="Interestellar" />

      {typeof data.text === 'string' && (
        <StyledText showFullText={showFullText}>
          {data.text}
        </StyledText>
      )}

      {textLength > 100 && (
        <StyledButton onClick={toggleText}>
          {showFullText ? 'Ver menos' : 'Ver mais'}
        </StyledButton>
      )}

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </StyledNoteContainer>
  );
}
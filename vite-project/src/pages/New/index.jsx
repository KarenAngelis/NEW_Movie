import { Link } from 'react-router-dom'

import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Form, StyledHeading, StyledInput, StyledButtonContainer } from './styles'
import { GoArrowLeft } from "react-icons/go";


export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <GoArrowLeft/>
            <Link to="/">Voltar</Link>
          </header>
          
          <StyledHeading>Novo Filme</StyledHeading>
          
          <StyledInput>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" /></StyledInput>


          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo Marcador" />
            </div>
          </Section>

        <StyledButtonContainer>
          <Button title="Excluir Filme" />
          <Button title="Salvar" /></StyledButtonContainer>

        </Form>
      </main>
    </Container>
  )
}
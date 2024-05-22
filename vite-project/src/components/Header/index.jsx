import { Container, Profile, UserInfo, Strong, UserInfoText, Span, Img, SearchInput } from './styles';



export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <h1 className="title">RocketMovies</h1>
        <SearchInput type="text" placeholder="Pesquisar pelo título" />
        
        <UserInfo>
         <UserInfoText>
             <Strong>Karen Rosa</Strong>
             <Span href="#" >Sair</Span>
         </UserInfoText>

            <Img src="https://github.com/karenAngelis.png" alt="Foto do usuário" />
        </UserInfo>

      </Profile>
    </Container>
  );
}
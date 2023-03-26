import { Container, TitleFooter, EmailForm } from "./styles";


export default function Footer() {
 
  return (
   <Container>
      <TitleFooter>
        <h1>Never miss a post. Subscribe now!</h1>
        <p>Write your e-mail bellow and sing up.</p>
      </TitleFooter>

      <EmailForm>
        <input type="text" />
        <button>Assine já!</button>
      </EmailForm>
   </Container>
  );
}
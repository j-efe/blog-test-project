import { Container, TitleFooter, EmailForm } from "./styles";


export default function Footer() {
 
  return (
   <Container>
      <TitleFooter>
        <h1>Nunca perca um post. Se inscreva agora!</h1>
        <p>Escreva seu e-mail abaixo e confirme.</p>
      </TitleFooter>

      <EmailForm>
        <input type="text" />
        <button>Assine já!</button>
      </EmailForm>
   </Container>
  );
}
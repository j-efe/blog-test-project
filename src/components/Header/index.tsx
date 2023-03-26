import { useRouter } from "next/router";
import { Container, TitleHeader } from "./styles";

export default function Header() {
 const router = useRouter();

  return (
   <Container>
      <TitleHeader>
        <h1>• Thoughts Blog •</h1>
        <p>Um pequeno blog com pensamentos em latin</p>
    {router.asPath.includes('post') ? <h4 onClick={() => {router.back()}}>Início</h4> : ''}
      </TitleHeader>
   </Container>
  );
}
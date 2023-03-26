import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  padding: 4.5rem ;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  background: #FFF;
  border-top: 1px solid #000;
  `;

export const TitleFooter = styled.div`
display: flex;
flex-direction: column;
text-align: center;
gap: 1rem;

h1 {
  width: 30rem;

  font-size: 2.4rem;
  font-weight: 600;
}

p {
  width: 30rem;

  font-size: 1.6rem;
  font-weight: 400;
}
`
export const EmailForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

padding: 2.5rem;
background: #E2E9FA;

input {
  all: unset;

  width: 100%;
  padding: 1rem;
  background: #FFF;
  border-radius: 0.2rem;
}

button {
  all: unset;

  width: 100%;
  padding: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;

  color: #FFF;
  font-weight: 600;
  background: #6389E1;
}
`
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0 ;
  margin: 0;
}

html {
  font-family: 'Nunito', sans-serif;
  font-size: 62.5%;
}

body {
  background: #FFF;
  font-size: 1.6rem;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const ContainerGeneral = styled.div`
  width: 100%;
  height: auto;
  padding: 6.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  `;
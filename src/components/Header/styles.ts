import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: auto;
  padding: 4.5rem;
  font-weight: 700;
  
  display: flex;
  flex-direction: column;
  background: #6389E1;
`

export const TitleHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

h1 {
  font-size: 3.2rem;
  font-weight: 700;
}

p {
  font-size: 1.6rem;
  font-weight: 400;
}

h4 {
  color: #EEE;
  text-decoration: underline;

  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    color: #FFF;
  }
}
`
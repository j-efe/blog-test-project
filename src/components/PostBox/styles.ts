import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 30rem;
padding: 1.5rem;
margin-bottom: 2rem;
background: #F9FAFA;
border-radius: 1rem;
border: 0.1rem solid rgba(0,0,0,0.2);

&:hover {
  cursor: pointer;
  background: #EEE;
}
`

export const PostAutor = styled.div`
background: #E2E9FA;
padding: 1rem;

h1{
font-weight: 700;
font-size: 1.6rem;
}

p {
  font-weight: 400;
font-size: 1.2rem;
}
`

export const PostContent = styled.div`
margin-top: 2rem;

h1{
font-weight: 500;
font-size: 2rem;
}

p {
  height: 10rem;
  overflow: auto;
  margin-top: 1.5rem;
  font-size: 1.4rem;
}
`
export const FooterPost = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;

.iconsContainer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.iconStyle {
  width: 2.5rem;
  height: auto;
}

`

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const Section = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  width: 80%;
  height: 40%;
  padding: 0;
`;
export const Title = styled.h2`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  padding: 0 2rem;
  margin: 0;
`;
export const RegisteredStyle = styled.div`
  width: 80%;

  border-radius: 5px;
  background-color: gray;
  color: #fff;

  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.3rem;
  margin: 1rem 0;
  padding: 1rem;

  a {
    color: #0056b3; /* Cor mais escura */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #003d80; /* Ainda mais escuro ao passar o mouse */
    text-decoration: underline;
  }
`;
// Novo estilo para o vídeo
export const VideoContainer = styled.div`
  width: 80%;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
export const LogoStyled = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: "center";
  width: "100%";
  height: "100%";
  h1 {
    color: #60efff;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  h3 {
    text-align: center;
    color: rgb(67, 169, 180);
  }
`;

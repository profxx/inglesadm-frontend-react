import styled from "styled-components";

export const CardStyled = styled.div`
  background-color: ${({ $bgColor }) => $bgColor || 'white'};  // Usando $bgColor
  width: 80%;
  height: fit-content;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer; /* Para que o card tenha aparência de clicável */
  box-shadow: 0px 2px 96px -39px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 96px -39px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 96px -39px rgba(0, 0, 0, 0.75);
`;
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 0.5rem;
  @media screen and (max-width: 450px){
    font-size: 12px;
    button{
      font-size: 12px;
    }
  }
`;
export const SubHeader = styled.nav`
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;
export const ButtonOrganizer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
`;


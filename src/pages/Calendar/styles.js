import styled from "styled-components";

export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;

    // Responsividade para um tablet
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr 1fr
    }

    // Responsividade para um celular
    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`
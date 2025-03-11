import styled from "styled-components";

export const WeekdayCardStyled = styled.div`
    width: 100%;
    min-height: 6rem;
    border: 1px solid #000;
`
export const Title = styled.h2`
    text-align: center;
    padding: 0;
    margin: 0;
    color: rgb(52, 130, 139);
`
export const StyledTableRow = styled.tr`
    background-color: transparent !important; /* Evita que Bootstrap sobrescreva */
    
    &:nth-child(odd) td {
        background-color: rgba(67, 169, 180, 0.2) !important;
    }
    &:nth-child(even) td {
        background-color: rgba(67, 169, 180, 0.1) !important;
    }
`;

export const SyledTableHeader = styled.tr`
    th{
        color:rgb(33,76,84);
    }
`

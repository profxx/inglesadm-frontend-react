import styled from "styled-components";

export const StyledTableHead = styled.tr`
  th{background-color: rgba(67, 169, 180) !important; /* Evita que Bootstrap sobrescreva */
    color: #fff;
    font-weight: 400;
    }
`;

export const StyledTableRow = styled.tr`
  background-color: transparent !important; /* Evita que Bootstrap sobrescreva */

  &:nth-child(odd) td {
    background-color: rgba(67, 169, 180, 0.2) !important;
  }
  &:nth-child(even) td {
    background-color: rgba(67, 169, 180, 0.1) !important;
  }
`;

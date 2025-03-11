import styled from "styled-components";

export const Section = styled.section`
  height: 89vh;
  width: 100vw;
  margin: 0;
  padding: 2rem;
  display: flex;
  gap: 1rem;
`;

export const DataContainer = styled.div`
  height: 100%;
  width: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BillingContainer = styled.div`
  border: 1px solid #000;
  width: 66rem;
  overflow: hidden;
  overflow-y: scroll;

  /* Estilização do scrollbar */
  &::-webkit-scrollbar {
    width: 8px; /* Largura do scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor de fundo do track */
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(67, 169, 180, 0.8); /* Cor do thumb */
    border-radius: 4px; /* Bordas arredondadas */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(67, 169, 180, 1); /* Cor ao passar o mouse */
  }
`;
export const CurrentData = styled.div`
  height: 36%;
  width: 100%;
  border: 1px solid #000;
  padding: 0.5rem;
  p{
    margin: 0;
    padding: 0;
  }
`;
export const LastMonthData = styled.div`
  height: 60%;
  width:100%;
  border: 1px solid #000;
  padding: 0.5rem;
  p{
    margin: 0;
    padding: 0;
  }
`;
export const Title = styled.h2`
    padding: 0;
    margin: 0;
    color: rgb(52, 130, 139);
    font-size: 16px;
`
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
import styled from "styled-components";

export const ActionOrganizer = styled.td`
  display: flex;
  gap: 0.5rem;
`;

export const EditButtonStyled = styled.button`
  background-color: rgb(43, 100, 110);
  color: #fff;
  font-size: 0.8rem;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(43, 100, 110, 0.8);
  }

  &:active {
    background-color: rgb(43, 100, 110, 0.6);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const InactivateButtonStyled = styled.button`
  background-color: rgb(110, 64, 43);
  color: #fff;
  font-size: 0.8rem;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(110, 64, 43, 0.8);
  }

  &:active {
    background-color: rgb(110, 64, 43, 0.6);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
export const PayButtonStyled = styled.button`
  background-color: rgb(24, 87, 29);
  color: #fff;
  font-size: 0.8rem;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(24, 87, 29, 0.8);
  }

  &:active {
    background-color: rgb(24, 87, 29, 0.6);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


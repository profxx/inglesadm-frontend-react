import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: #284B63;
  color: #FFFFFF;
  font-size: 0.8rem;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color:rgb(48, 91, 119);
  }

  &:active {
    background-color:rgb(29, 56, 73);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

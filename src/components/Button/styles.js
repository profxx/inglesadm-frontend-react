import styled from 'styled-components';

export const ButtonStyledLight = styled.button`
  background-color:rgb(33, 76, 84);
  color: #fff;
  font-size: 0.8rem;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color:rgb(33, 76, 84, 0.8);
  }

  &:active {
    background-color:rgb(33, 76, 84, 0.6);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


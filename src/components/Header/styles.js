import styled from "styled-components";

// Container do Header
export const HeaderContainer = styled.nav`
  background-color: rgb(67, 169, 180);
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Container dos itens de navegação
export const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

// Item de navegação
export const NavItem = styled.li`
  position: relative;
  display: inline-block;
  padding-bottom: 5px; /* Garante espaço para a barra */

  &.active {
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 4px;
      background: white; /* Barra branca abaixo do item ativo */
      border-radius: 2px;
    }
  }
`;
// Link de navegação
export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  &:hover {
    color: #d1e7ff;
  }

  &:active {
    color: #b0c8e0;
  }
`;

import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer, Nav, NavItem, NavLink } from './styles';

function Header() {
  const location = useLocation(); // Obtém a URL atual

  return (
    <HeaderContainer>
      <Nav>
        <NavItem className={location.pathname === "/calendar" ? "active" : ""}>
          <NavLink as={Link} to="/calendar">Calendar</NavLink>
        </NavItem>
        <NavItem className={location.pathname === "/students" ? "active" : ""}>
          <NavLink as={Link} to="/students">Students</NavLink>
        </NavItem>
        <NavItem className={location.pathname === "/finance" ? "active" : ""}>
          <NavLink as={Link} to="/finance">Finance</NavLink>
        </NavItem>
        <NavItem className={location.pathname === "/classroom" ? "active" : ""}>
          <NavLink as={Link} to="/classroom">Classroom</NavLink>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

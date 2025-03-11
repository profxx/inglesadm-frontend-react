import PropTypes from 'prop-types'; // Importando o PropTypes
import { ButtonStyledLight } from './styles'; // Importando os estilos

function Button({ children, onClick }) {
  return (
    <ButtonStyledLight onClick={onClick}>
      {children}
    </ButtonStyledLight>
  );
}

// Validando as propriedades
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button; // Garantir que estamos exportando o componente corretamente

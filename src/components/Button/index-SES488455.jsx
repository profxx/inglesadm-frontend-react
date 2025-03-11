import PropTypes from 'prop-types'; // Importando o PropTypes
// import { ButtonStyled } from './styles'; // Importando os estilos

function Button({ children, onClick }) {
  return (
    <button className='btn btn-primary btn-sm' onClick={onClick}>
      {children}
    </button>
  );
}

// Validando as propriedades
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button; // Garantir que estamos exportando o componente corretamente

import PropTypes from "prop-types"; // Para validar as props
import { InputStyled } from "./styles"; // Importando o styled component

const Input = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputStyled
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired, // Espera uma string como label
  type: PropTypes.string.isRequired, // Espera uma string como tipo de input (text, password, etc)
  name: PropTypes.string.isRequired, // Espera uma string como nome
  value: PropTypes.string, // Espera uma string como valor
  onChange: PropTypes.func.isRequired, // Espera uma função como onChange
  placeholder: PropTypes.string, // Espera uma string como placeholder
};

export default Input;

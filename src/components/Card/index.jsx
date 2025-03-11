import { Component } from "react";
import PropTypes from "prop-types"; // Importando PropTypes
import { CardStyled } from "./styles";

export default class Card extends Component {
  render() {
    const { children, $bgColor, onClick } = this.props;

    return (
      <CardStyled $bgColor={$bgColor} onClick={onClick}>
        {children} {/* Exibe o conteúdo passado dentro das tags de Card */}
      </CardStyled>
    );
  }
}

// Validando as propriedades
Card.propTypes = {
  children: PropTypes.node, // children pode ser qualquer tipo de conteúdo renderizável (texto, número, array, etc.)
  $bgColor: PropTypes.string, // Espera uma string (cor)
  onClick: PropTypes.func, // Validando que onClick é uma função
};


import PropTypes from "prop-types";
import { inactivateStudent } from "../../services/students";
import { ActionOrganizer, EditButtonStyled, InactivateButtonStyled, PayButtonStyled } from "./styles"

export const ActionButtonsFinance = () => {
    return (
        <ActionOrganizer>
            <PayButtonStyled>Pay</PayButtonStyled>
            <EditButtonStyled>Edit</EditButtonStyled>
            <InactivateButtonStyled>Delete</InactivateButtonStyled>
        </ActionOrganizer>
    )
}
export const ActionButtonsStudent = ({ studentId }) => {
    const handleInactivate = async () => {
        try {
            const result = await inactivateStudent(studentId);
            console.log('Aluno inativado:', result);
        } catch (error) {
            console.error('Erro ao inativar aluno:', error);
        }
    };

    return (
        <ActionOrganizer>
            <EditButtonStyled>Editar</EditButtonStyled>
            <InactivateButtonStyled onClick={handleInactivate}>Inativar</InactivateButtonStyled>
            <PayButtonStyled>Inserir Pagto</PayButtonStyled>
        </ActionOrganizer>
    );
}
ActionButtonsStudent.propTypes = {
    studentId: PropTypes.number.isRequired
}
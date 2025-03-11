import { Component } from "react";
import { Table } from "react-bootstrap";
import { getActiveStudents } from "../../services/students";
import { ActionButtonsStudent } from "../ActionButtons";
import { StyledTableHead, StyledTableRow } from "./styles";

export default class StudentListTable extends Component {

    state = {
        students: [],
        isLoading: true,  // Estado para controlar o carregamento
        error: null,      // Estado para armazenar erros
    };

    async componentDidMount() {
        try {
            console.log("Iniciando a busca dos alunos...");

            const students = await getActiveStudents();
            console.log("Resposta da API:", students); // Log para depuração

            if (Array.isArray(students) && students.length > 0) {
                console.log("Alunos ativos recebidos:", students);
                this.setState({ students, isLoading: false });
            } else {
                throw new Error("Nenhum aluno encontrado ou dados inválidos.");
            }
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
            this.setState({ error: error.message, isLoading: false });
        }
    }


    render() {
        const { students, isLoading, error } = this.state;

        if (isLoading) {
            return <p>Carregando...</p>;
        }

        if (error) {
            return <p>Erro: {error}</p>;
        }

        return (
            <Table striped variant='primary'>
                <thead>
                    <StyledTableHead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Book/Level</th>
                        <th>Actions</th>
                    </StyledTableHead>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student) => (
                            <StyledTableRow key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.nome}</td>
                                <td>{student.livro}</td>
                                <td>
                                    <ActionButtonsStudent studentId={student.id} />
                                </td>
                            </StyledTableRow>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No student found.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
}

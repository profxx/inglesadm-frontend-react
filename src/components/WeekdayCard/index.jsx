import PropTypes from "prop-types";
import { StyledTableRow, SyledTableHeader, Title, WeekdayCardStyled } from "./styles";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function WeekdayCard({ day }) {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://inglesadm-backend-java-springboot.onrender.com/alunos/${day.toLowerCase()}`)
            .then(response => {
                setStudents(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, [day]);

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <WeekdayCardStyled>
            <Title>{day.charAt(0).toUpperCase() + day.slice(1)}</Title>
            <Table striped bordered hover>
                <thead>
                    <SyledTableHeader>
                        <th>Nome</th>
                        <th>Horário</th>
                    </SyledTableHeader>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map(student => (
                            <StyledTableRow key={student.id}>
                                <td>{student.nome}</td>
                                <td>{student.hora}</td>
                            </StyledTableRow>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">Nenhum aluno</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </WeekdayCardStyled>
    );
}

WeekdayCard.propTypes = {
    day: PropTypes.string.isRequired,
};

export default WeekdayCard;

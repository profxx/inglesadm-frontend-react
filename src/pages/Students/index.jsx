import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from '../../components/Button';
import Header from '../../components/Header';
import StudentListTable from '../../components/StudentListTable';
import { ButtonOrganizer, Section, SubHeader } from './styles';
import { getActiveStudents } from '../../services/students';  // Importe a função ajustada
import { useNavigate } from 'react-router-dom';

function Students() {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

    useEffect(() => {
        const fetchStudents = async () => {
            const studentsData = await getActiveStudents(setIsLoading); // Passando a função de setar o carregamento
            setStudents(studentsData);
        };

        fetchStudents();
    }, []); // O useEffect roda uma vez ao carregar o componente

    // Pega o endereço atual
    const navigate = useNavigate();

    // Função Comando de redirecionamento de página
    const handleClick = (redirectTo) => {
        if (redirectTo.startsWith("http")) {
            window.location.href = redirectTo; // Para links externos
        } else {
            navigate(redirectTo); // Para rotas internas do React Router
        }
    };

    return (
        <div>
            <Header />
            <Container>
                <Section>
                    <SubHeader>
                        <ButtonOrganizer>
                            <Button onClick={() => handleClick("/student")}>New Student</Button>
                            <Button onClick={handleClick}>Show inactives</Button>
                        </ButtonOrganizer>
                    </SubHeader>
                    {isLoading ? (  // Exibe "Carregando..." enquanto os dados estão sendo carregados
                        <p>Carregando...</p>
                    ) : (
                        <StudentListTable students={students} />  // Passa os alunos para a tabela
                    )}
                </Section>
            </Container>
        </div>
    );
}

export default Students;

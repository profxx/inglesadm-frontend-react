import { Container, Form } from "react-bootstrap";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import { FormStyled } from "./styles";
import { insertNewStudent } from "../../services/students";
import { getCursos } from "../../services/cursos"; // A função que você criará para buscar cursos.

function StudentProfile() {
    const navigate = useNavigate();

    // Estado para armazenar os dados do formulário
    const [studentData, setStudentData] = useState({
        nome: "",
        email: "",
        telefone: "",
        valor: "",
        curso: "",
        dia: "",
        hora: "",
        livro: "",
    });
    
    const [cursos, setCursos] = useState([]);

    // Efeito para carregar os cursos assim que o componente for montado
    useEffect(() => {
        async function fetchCursos() {
            try {
                const cursosData = await getCursos(); // Buscando os cursos
                setCursos(cursosData); // Atualizando o estado com os cursos recebidos
            } catch (error) {
                console.error("Erro ao carregar cursos:", error);
            }
        }

        fetchCursos(); // Chama a função para buscar os cursos
    }, []);

    // Atualiza o estado ao digitar nos campos
    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };

    // Envio do formulário com chamada para a API
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Certifica que course.id é um número válido
        const courseId = Number(studentData.curso);

        if (isNaN(courseId)) {
            alert("Curso inválido. Selecione um curso antes de enviar.");
            return;
        }

        const formattedData = {
            ...studentData,
            curso: { id: courseId }, // Garantindo que o curso seja enviado como um objeto com o id
            valor: Number(studentData.valor), // Garante que o valor seja um número float
        };

        console.log("Dados formatados:", formattedData);

        try {
            const result = await insertNewStudent(formattedData);
            if (result) {
                alert("Aluno cadastrado com sucesso!");
                navigate("/calendar");
            } else {
                alert("Erro ao cadastrar aluno.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar aluno:", error);
            alert("Erro inesperado.");
        }
    };

    return (
        <div>
            <Header />
            <Container>
                <h2>Add New Student</h2>
                <FormStyled onSubmit={handleSubmit}>
                    <Input
                        label="Nome"
                        type="text"
                        name="nome"
                        value={studentData.nome}
                        onChange={handleChange}
                    />
                    <Input
                        label="E-mail"
                        type="email"
                        name="email"
                        value={studentData.email}
                        onChange={handleChange}
                    />
                    <Input
                        label="Telefone"
                        type="text"
                        name="telefone"
                        value={studentData.telefone}
                        onChange={handleChange}
                    />
                    <Input
                        label="Valor"
                        type="text"
                        name="valor"
                        value={studentData.valor}
                        onChange={handleChange}
                    />
                    <Form.Group className="mb-3">
                        <Form.Label>Curso</Form.Label>
                        <Form.Select name="curso" value={studentData.curso} onChange={handleChange}>
                            <option value="" disabled>Selecione um curso</option>
                            {cursos.map((curso) => (
                                <option key={curso.id} value={curso.id}>
                                    {curso.nomeCurso}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Selecionar o Dia</Form.Label>
                        <Form.Select name="dia" value={studentData.dia} onChange={handleChange}>
                            <option value="" disabled>-</option>
                            <option value="Segunda-feira">Segunda-feira</option>
                            <option value="Terça-feira">Terça-feira</option>
                            <option value="Quarta-feira">Quarta-feira</option>
                            <option value="Quinta-feira">Quinta-feira</option>
                            <option value="Sexta-feira">Sexta-feira</option>
                            <option value="Inativo">Inativo</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Selecionar a Hora</Form.Label>
                        <Form.Select name="hora" value={studentData.hora} onChange={handleChange}>
                            <option value="" disabled>-</option>
                            <option value="5:20pm">5:20pm</option>
                            <option value="5:30pm">5:30pm</option>
                            <option value="6:20pm">6:20pm</option>
                            <option value="6:30pm">6:30pm</option>
                            <option value="7:20pm">7:20pm</option>
                            <option value="7:30pm">7:30pm</option>
                            <option value="8:20pm">8:20pm</option>
                            <option value="8:30pm">8:30pm</option>
                            <option value="9:20pm">9:20pm</option>
                            <option value="9:30pm">9:30pm</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Selecionar o Livro</Form.Label>
                        <Form.Select name="livro" value={studentData.livro} onChange={handleChange}>
                            <option value="" disabled>-</option>
                            <option value="NAT GEO World Link Intro">NAT GEO World Link Intro</option>
                            <option value="NAT GEO World Link 1">NAT GEO World Link 1</option>
                            <option value="NAT GEO World Link 2">NAT GEO World Link 2</option>
                            <option value="NAT GEO World Link 3">NAT GEO World Link 3</option>
                            <option value="Top Notch Fundamentals">Top Notch Fundamentals</option>
                            <option value="Top Notch 1">Top Notch 1</option>
                            <option value="Top Notch 2">Top Notch 2</option>
                            <option value="Top Notch 3">Top Notch 3</option>
                        </Form.Select>
                    </Form.Group>

                    <Button type="submit">Register</Button>
                </FormStyled>
            </Container>
        </div>
    );
}

export default StudentProfile;

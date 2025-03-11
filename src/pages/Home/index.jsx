import { Title, Section, Container } from './styles';
import Card from '../../components/Card';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClick = (redirectTo) => {
        if (redirectTo.startsWith("http")) {
            window.location.href = redirectTo; // Para links externos
        } else {
            navigate(redirectTo); // Para rotas internas do React Router
        }
    };

    return (
        <Container>
            <Section>
                <Card $bgColor="orange" onClick={() => handleClick("/login")}>
                    <Title>Teacher</Title>
                </Card>
            </Section>
            
            <Section>
                <Card $bgColor="blue" onClick={() => handleClick("https://inglesadm.com.br/moodle/login/index.php")}>
                    <Title>Student</Title>
                </Card>
            </Section>
        </Container>
    );
}

export default Home;

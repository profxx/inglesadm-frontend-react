import { Container, LogoStyled, RegisteredStyle, Section, Title } from "./styles";
import Card from "../../components/Card";
import Input from "../../components/Input"; // Importando o componente Input
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg"; // Importando o arquivo SVG diretamente



function Login() {
    return (
        <Container>
            <Section>
                <Card>
                    <Title>Login</Title>
                    <form>
                        <Input
                            label="Username"
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                        />

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        />

                        <Button type="submit">Login</Button>
                    </form>
                    <RegisteredStyle>
                        First time? <Link to="/register">Register here.</Link>
                    </RegisteredStyle>
                </Card>
            </Section>

            <Section>
                <LogoStyled>
                    <img src={icon} alt="Icon" width="560" height="315" /> {/* Usando o SVG como imagem */}
                    <h1>Inglês ADM</h1>
                    <h3>Class Management</h3>
                </LogoStyled>
            </Section>
        </Container>
    );
}

export default Login;

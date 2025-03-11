import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title } from "./styles";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
// Importando o ícone como uma imagem
import icon from "../../assets/icon.svg";

function Register() {
  const navigate = useNavigate();

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Atualiza o estado ao digitar nos campos
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulação de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);

    // Aqui você pode chamar uma API para registrar o usuário
    // fetch("/api/register", { method: "POST", body: JSON.stringify(formData) })

    navigate("/login"); // Redireciona para login após o registro
  };

  return (
    <Container>

      <Card>
        {/* Exibindo o ícone como uma imagem ao lado do título */}
        <Title>
          <img src={icon} alt="Icon" width="40" height="40" />
          <h2>Register</h2>
        </Title>
        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit">Register</Button>
        </form>
      </Card>

    </Container>
  );
}

export default Register;

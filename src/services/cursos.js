// src/services/cursos.js

// Função para buscar os cursos da API
export async function getCursos() {
    try {
        const response = await fetch("https://inglesadm-backend-java-springboot.onrender.com/cursos"); // Ajuste a URL de acordo com a sua API

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const cursos = await response.json(); // Converte a resposta para JSON
        return cursos; // Retorna os cursos
    } catch (error) {
        console.error("Erro ao buscar cursos:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}

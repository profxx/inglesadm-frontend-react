export async function getActiveStudents() {
    try {
        const response = await fetch("https://inglesadm-backend-java-springboot.onrender.com/alunos/ativos");

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const students = await response.json();
        return students;

    } catch (error) {
        console.error("Erro ao buscar alunos:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}

export async function getInactiveStudents() {
    try {
        const response = await fetch("https://inglesadm-backend-java-springboot.onrender.com/alunos/inativos");

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const students = await response.json();
        return students;

    } catch (error) {
        console.error("Erro ao buscar alunos:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}

export async function insertNewStudent(studentData) {
    try {
        const response = await fetch("https://inglesadm-backend-java-springboot.onrender.com/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData),
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
        
    } catch (error) {
        console.error("Erro ao inserir aluno:", error);
        return null; // Retorna `null` em caso de erro
    }
}

export async function inactivateStudent(id){
    try {
        const response = await fetch(`https://inglesadm-backend-java-springboot.onrender.com/inativar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        });

    if (!response.ok){
        throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
    } catch (error) {
        console.error("Erro ao inativar aluno: ", error);
        return null; // Retorna null em caso de erro
    }
}
// Faz a requisição para obter os lançamentos do mês atual
export async function getBillsOfTheMonth() {
    try {
        // Faz a requisição para obter os lançamentos do mês atual
        const response = await fetch("https://inglesadm-backend-java-springboot.onrender.com//bills/currentmonth");

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const bills = await response.json();

        // Formata a data diretamente no retorno
        const formattedBills = bills.map(bill => ({
            ...bill,
            dataPagamento: new Date(bill.dataPagamento).toLocaleDateString('pt-BR') // Formata a data no padrão brasileiro
        }));

        return formattedBills;
        
    } catch (error) {
        console.error("Erro ao buscar lançamentos:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}

// Pega o cálculo do faturamento
export async function calculateRevenue(){
    return fetch("http://localhost:8080/bills/revenue")
        .then((response) => response.text())
        .then((revenue) => {
            return parseFloat(revenue); 
        })
        .catch((error) => {
            console.error("calculateRevenue: " + error);
            return null;
        })
}

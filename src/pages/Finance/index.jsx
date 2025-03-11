import { Component } from "react";
import { Table } from "react-bootstrap";
import Header from "../../components/Header";
import { BillingContainer, CurrentData, DataContainer, LastMonthData, Section, StyledTableHead, StyledTableRow, Title } from "./styles";
import { ActionButtonsFinance } from "../../components/ActionButtons";
import { calculateRevenue, getBillsOfTheMonth } from "../../services/billings";
import { formatToReal } from "../../util/formatToReal";
import { formatToBrazilianDate } from "../../util/formatToBrazilianDate";

class Finance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bills: [],
            revenue: 0,
            isLoading: true, // Adiciona estado de carregamento
        };
    }

    async componentDidMount() {
        try {
            const bills = await getBillsOfTheMonth();
            const revenue = await calculateRevenue();
            this.setState({ bills, revenue, isLoading: false }); // Atualiza os dados e finaliza carregamento
        } catch (error) {
            console.error("Erro ao buscar lançamentos:", error);
            this.setState({ isLoading: false }); // Finaliza carregamento mesmo em erro
        }
    }

    render() {
        const { bills, revenue, isLoading } = this.state;

        return (
            <div>
                <Header />

                <Section>
                    <DataContainer>
                        <CurrentData>
                            <Title>Current Data</Title>
                            <br />
                            <p>Current Revenue: {formatToReal((revenue || 0).toFixed(2))}</p>
                            <p>Number of students: 21</p>
                            <p>Average revenue by student: R$ 220,00</p>
                        </CurrentData>
                        <LastMonthData>
                            <Title>Last Month Data</Title>
                            <br />
                            <p>Paid on Time: R$ 2850,00</p>
                            <p>Paid Late: R$ 1100,00</p>
                            <p>Pending Payments: R$ 1000,00</p>
                            <Table striped size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr>
                                        <td>João da Silva</td>
                                        <td>05/02/2025</td>
                                        <td>230,00</td>
                                    </tr>
                                    <tr>
                                        <td>Robson da Silva</td>
                                        <td>05/02/2025</td>
                                        <td>230,00</td>
                                    </tr>
                                </thead>
                            </Table>
                        </LastMonthData>
                    </DataContainer>
                    <BillingContainer>
                        {isLoading ? (
                            <p>Carregando...</p> // Exibe mensagem enquanto os dados são carregados
                        ) : (
                            <Table striped variant="primary">
                                <thead>
                                    <StyledTableHead>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                        <th>Actions</th>
                                    </StyledTableHead>
                                </thead>
                                <tbody>
                                    {bills.length > 0 ? (
                                        bills.map((bill) => (
                                            <StyledTableRow key={bill.id}>
                                                <td>{bill.nomeAluno}</td>
                                                <td>{formatToBrazilianDate(bill.dataPagamento)}</td>
                                                <td>{bill.status}</td>
                                                <td>{formatToReal(bill.valor)}</td>
                                                <ActionButtonsFinance />
                                            </StyledTableRow>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5}>No bills found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        )}
                    </BillingContainer>
                </Section>
            </div>
        );
    }
}

export default Finance;

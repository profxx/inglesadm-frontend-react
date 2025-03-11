import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import WeekdayCard from "../../components/WeekdayCard";
import { Section } from "./styles";

function Calendar() {
    const [studentsByDay, setStudentsByDay] = useState({});
    const days = ["segunda", "terca", "quarta", "quinta", "sexta"];

    useEffect(() => {
        const fetchStudents = async () => {
            const data = {};
            for (let day of days) {
                try {
                    const response = await axios.get(`http://localhost:8080/alunos/${day}`);
                    data[day] = response.data;
                } catch (error) {
                    console.error(`Erro ao buscar alunos de ${day}:`, error);
                    data[day] = [];
                }
            }
            setStudentsByDay(data);
        };
        fetchStudents();
    }, []);

    return (
        <div>
            <Header />
            <Container>
                <Section>
                    {days.map((day) => (
                        <WeekdayCard key={day} day={day} students={studentsByDay[day] || []} />
                    ))}
                </Section>
            </Container>
        </div>
    );
}

export default Calendar;
import { Container } from "react-bootstrap"
import Header from "../../components/Header"
import WeekdayCard from "../../components/WeekdayCard"
import { Section } from "./styles"

function Calendar() {
    return (
        <div>
            <Header />
            <Container>
                <Section>
                    <WeekdayCard>Monday</WeekdayCard>
                    <WeekdayCard>Tuesday</WeekdayCard>
                    <WeekdayCard>Wednesday</WeekdayCard>
                    <WeekdayCard>Thursday</WeekdayCard>
                    <WeekdayCard>Friday</WeekdayCard>
                </Section>
            </Container>
        </div>
    )
}
export default Calendar
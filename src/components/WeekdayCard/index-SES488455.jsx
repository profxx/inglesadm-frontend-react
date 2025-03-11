import PropTypes from 'prop-types'; // Importando o PropTypes
import { Title, WeekdayCardStyled } from "./styles"


function WeekdayCard({ children, table }) {
    return (
        <WeekdayCardStyled>
            <Title>{children}</Title>
            {table}
        </WeekdayCardStyled>
    )
}

WeekdayCard.propTypes = {
    children: PropTypes.node.isRequired,
    table: PropTypes.func,
}


export default WeekdayCard
import React from 'react'
import { Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react'

function DisplayBalance(props) {

    const {size, label, value, color = 'black' } = props;

    return (
        <Statistic size={size} color={color}>
            <StatisticLabel>
                {label}
            </StatisticLabel>
            <StatisticValue>
                {value}
            </StatisticValue>
      </Statistic>
    )
}

export default DisplayBalance

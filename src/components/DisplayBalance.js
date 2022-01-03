import React from 'react'

import { Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react'

function DisplayBalance(props) {

    const {size, label, value, color = 'black' , textAlignOption } = props;

    return (
        <Statistic size={size} color={color}>
            <StatisticLabel textAlign={textAlignOption}>
                {label}
            </StatisticLabel>
            <StatisticValue>
                {value}
            </StatisticValue>
      </Statistic>
    )
}

export default DisplayBalance

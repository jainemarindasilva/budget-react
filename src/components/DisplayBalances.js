import React from 'react'
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react'

import DisplayBalance from './DisplayBalance'

function DisplayBalances( { incomeTotal, expenseTotal } ) {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
            <GridRow>
                <GridColumn>
                <DisplayBalance size='tiny' label='Income:' value={ `$ ${incomeTotal}` } color='green' textAlignOption='center'/>
                </GridColumn>
                <GridColumn>
                <DisplayBalance size='tiny' label='Expenses:' value={ `$ ${expenseTotal}` } color='red' textAlignOption='center'/>
                </GridColumn>
            </GridRow>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances

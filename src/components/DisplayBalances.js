import React from 'react'
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
            <GridRow>
                <GridColumn>
                <DisplayBalance size='tiny' label='Income:' value='693.14' color='green' textAlignOption='center'/>
                </GridColumn>
                <GridColumn>
                <DisplayBalance size='tiny' label='Expenses:' value='254.41' color='red' textAlignOption='center'/>
                </GridColumn>
            </GridRow>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances

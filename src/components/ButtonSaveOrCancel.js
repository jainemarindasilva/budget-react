import React from 'react'
import { Button, ButtonGroup, ButtonOr } from 'semantic-ui-react'

function ButtonSaveOrCancel() {
    return (
        <ButtonGroup style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <ButtonOr/>
          <Button primary>Ok</Button>
        </ButtonGroup>
    )
}

export default ButtonSaveOrCancel

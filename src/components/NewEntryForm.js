import React from 'react'
import { Form, FormGroup, FormInput } from 'semantic-ui-react'

import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm() {
    return (
        <Form>
            <FormGroup>
            <FormInput 
                placeholder='New shinny thing'
                icon='tags'
                width={12}
                label='Description'>
            </FormInput>
            <FormInput 
                placeholder='100.00'
                icon='dollar'
                iconPosition='left'
                width={4}
                label='Value'>
            </FormInput>
            </FormGroup>
            <ButtonSaveOrCancel/>
      </Form>
    )
}

export default NewEntryForm

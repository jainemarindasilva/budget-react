import React from 'react'
import { Checkbox, Form, FormGroup, FormInput, Segment } from 'semantic-ui-react'

function EntryForm( {description, setDescription, value, setValue, isExpense, setIsExpense}) {

    return (
        <Form>
            <FormGroup width={3}>
                <FormInput 
                    placeholder='New shinny thing'
                    icon='tags'
                    width={12}
                    label='Description'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <FormInput 
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                    width={4}
                    label='Value'
                    value={value}
                    onChange={(event) => setValue(parseFloat(event.target.value))}
                />
            </FormGroup>
            <Segment compact>
                <Checkbox toggle 
                    label='Is expense' 
                    checked={isExpense} 
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </Form>
    )
}

export default EntryForm

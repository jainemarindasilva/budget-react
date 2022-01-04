import React from 'react'
import { Container } from 'semantic-ui-react'

import EntryForm from './EntryForm';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm( { addEntry, description, setDescription, value, setValue, isExpense, setIsExpense } ) {

    return (
        <Container>
            <EntryForm 
                description={description} 
                setDescription={setDescription}
                value={value} 
                setValue={setValue}
                isExpense={isExpense}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel addEntry={addEntry}/>
        </Container>
    )
}

export default NewEntryForm

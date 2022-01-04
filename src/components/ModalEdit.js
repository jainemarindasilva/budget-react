import React from 'react'
import { Button, Modal, ModalActions, ModalContent, ModalHeader } from 'semantic-ui-react'

import EntryForm from './EntryForm'

function ModalEdit( {
    isOpen, 
    setIsOpen, 
    description, setDescription, 
    value, setValue, 
    isExpense, setIsExpense} ) {
    return (
        <Modal open={isOpen}>
            <ModalHeader>Edit entry</ModalHeader>
            <ModalContent>
                <EntryForm
                    description={description}
                    setDescription={setDescription}
                    value={value}
                    setValue={setValue}
                    isExpense={isExpense}
                    setIsExpense={setIsExpense}
                />
            </ModalContent>
            <ModalActions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalEdit

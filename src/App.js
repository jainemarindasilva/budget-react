import './App.css';
import { Container } from 'semantic-ui-react';
import { useEffect, useState } from 'react';

import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';

function App() {

    const [entries, setEntries] = useState(initialEntries);
    const [entryId, setEntryId] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(!isOpen && entryId) {
            const index = entries.findIndex( (entry) => entry.id === entryId );
            const newEntries = [...entries];
            newEntries[index].description = description;
            newEntries[index].value = value;
            newEntries[index].isExpense = isExpense;
            setEntries(newEntries);
            resetEntry();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        let totalIncome = 0;
        let totalExpenses = 0;
        entries.map(entry => {
            if(entry.isExpense) {
                return totalExpenses += entry.value;
            }
            return totalIncome += entry.value;
        })
        setTotal(totalIncome - totalExpenses);
        setExpenseTotal(totalExpenses);
        setIncomeTotal(totalIncome);
    }, [entries])
    
    function deleteEntry(id) {
        const result = entries.filter( (entry) => entry.id !== id );
        setEntries(result);
    }

    function editEntry(id) {
        if(id) {
            const index = entries.findIndex( (entry) => entry.id === id );
            const entry = entries[index];
            setEntryId(id)
            setDescription(entry.description)
            setValue(entry.value)
            setIsExpense(entry.isExpense)
            setIsOpen(true);
        }
    }

    function addEntry() {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value, 
            isExpense
        })
        setEntries(result);
        resetEntry();
    }

    function resetEntry() {
        setDescription('');
        setValue('');
        setIsExpense(true);
    }

    return (
        <Container> 

            <MainHeader title='Budget'/>
            
            <DisplayBalance size='small' label='Your Balance:' value={`$ ${total}`}/>
            <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>

            <MainHeader type='h3' title='History'/>
            <EntryLines 
                entries={entries} 
                deleteEntry={deleteEntry}
                editEntry={editEntry}
            />

            <MainHeader type='h3' title='Add new transaction'/>
            <NewEntryForm 
                addEntry={addEntry}
                description={description} 
                setDescription={setDescription}
                value={value} 
                setValue={setValue}
                isExpense={isExpense}
                setIsExpense={setIsExpense}
            />
            
            <ModalEdit 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
                description={description} 
                setDescription={setDescription}
                value={value} 
                setValue={setValue}
                isExpense={isExpense}
                setIsExpense={setIsExpense}
            />
        </Container>
    );
}

export default App;

var initialEntries = [
    {
        id: 1,
        description: 'Work Income',
        value: 1000.00,
        isExpense: false
    },
    {
        id: 2,
        description: 'Water Bill',
        value: 200.00,
        isExpense: true
    },
    {
        id: 3,
        description: 'Rent',
        value: 800.00,
        isExpense: true
    },
    {
        id: 4,
        description: 'Power bill',
        value: 80.00,
        isExpense: true
    }
];
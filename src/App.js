import { Container } from 'semantic-ui-react';
import './App.css';

import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container> 

      <MainHeader title='Budget'/>
      
      <DisplayBalance size='small' label='Your Balance:' value='956.36'/>
      <DisplayBalances/>

      <MainHeader type='h3' title='History'/>
      <EntryLine title='Something' value='$10' isExpense={true}/>
      <EntryLine title='SomethingB' value='$20' isExpense={false}/>
      <EntryLine title='SomethingC' value='$30' isExpense={true}/>
    
      <MainHeader type='h3' title='Add new transaction'/>
      <NewEntryForm/>
      
    </Container>
  );
}

export default App;

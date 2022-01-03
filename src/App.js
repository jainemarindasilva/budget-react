import { Button, ButtonGroup, ButtonOr, Container, Form, FormGroup, FormInput, Grid, GridColumn, GridRow, Header, Icon, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container> 

      <Header as='h1'>Budget</Header>
      
      <Statistic size='small'>
        <StatisticLabel>Your Balance:</StatisticLabel>
        <StatisticValue>2,550.53</StatisticValue>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn>
              <Statistic size='tiny' color='green'>
                <StatisticLabel textAlign='center'>Income:</StatisticLabel>
                <StatisticValue>2,550.53</StatisticValue>
              </Statistic>
            </GridColumn>
            <GridColumn>
              <Statistic size='tiny' color='red'>
                <StatisticLabel textAlign='center'>Expenses:</StatisticLabel>
                <StatisticValue>2,550.53</StatisticValue>
              </Statistic>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment textAlign='right' color='red'>
        <Grid columns={3}>
          <GridRow>
            <GridColumn width={10} textAlign='left'>A</GridColumn>
            <GridColumn width={3} textAlign='right'>$10</GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment textAlign='right' color='green'>
        <Grid columns={3}>
          <GridRow>
            <GridColumn width={10} textAlign='left'>B</GridColumn>
            <GridColumn width={3} textAlign='right'>$20</GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment textAlign='right' color='red'>
        <Grid columns={3}>
          <GridRow>
            <GridColumn width={10} textAlign='left'>C</GridColumn>
            <GridColumn width={3} textAlign='right'>$30</GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
    
      <Header as='h3'>Add new transaction</Header>
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
        <ButtonGroup style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <ButtonOr/>
          <Button primary>Ok</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;

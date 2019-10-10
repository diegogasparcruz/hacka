import React, { Component } from 'react';
import { Table, Button, Icon, Form, Grid, Image, Divider } from 'semantic-ui-react';
import { InputFile } from 'semantic-ui-react-input-file';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './style.css';

export default class Box extends Component {

  state = {
    audio: true, 
    title: '', 
    file: null
  }

  onChangeHandler=event=>{

    this.setState({
      file: event.target.files[0]
    });
  
  }

  handleInputText = event =>{

    this.setState({ title: event.target.value });
  
  }

  onClickHandler = async () => {
    const title = this.state.title;
    const data = new FormData();
    data.append('file', this.state.file);
    data.append('title', title)
    await api.post('/audio/upload', data).then(res => { // then print response status
      console.log(res.statusText);
   });
   
   this.resetInput();

  }

  resetInput = () => {

    this.setState({ file: null, title: '' });

     

  }

  render() {

    return (
    <div>
      <div id="box-container">

        <header>
          <img src={logo} alt="logo" />
          <h1> Listen 2 me </h1>
        </header>

        <div id="form-audio" className="form-audio">

        <Form>
          <Form.Group>

             <Form.Input
              placeholder='Title'
              name='title'
              value={ this.state.title }
              onChange={ this.handleInputText }
            /> 
            
            <input type="file" id="file-input" name="file" onChange={this.onChangeHandler}/>

            <Form.Button content='Submit' onClick={this.onClickHandler} />
          </Form.Group>
        </Form>

        </div>


        { this.state.audio && 
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell><Icon color="orange" size="large" name="file audio" /> audio.mp3</Table.Cell>
                <Table.Cell
                  title={[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    'et dolore magna aliqua.',
                  ].join(' ')}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell textAlign="center"> <Button color="blue" content="Detalhes" /> </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table> }

          <Grid style={{ marginTop: '50px', marginBottom: '30px' }} columns={3}>

            <Grid.Row>
              <Grid.Column>
                <Image  src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
              </Grid.Column>
            </Grid.Row>        

            
          </Grid>

          <Divider />
          
      </div>
      
    </div>
    );
  }
}

import React, { Component } from 'react';
import { Form, Grid, Image, Divider, Segment, Menu } from 'semantic-ui-react';
import ReactMediaRecorder from "react-media-recorder";

import api from '../../services/api';

import logo from '../../assets/logo2.png';
import './style.css';
import TableBox from './components/TableBox';

export default class Box extends Component {

  state = {
    arquivo: true, 
    title: '', 
    file: null, 
    audios: [],
    activeItem: 'mandar', 
    audio: null
  }

  componentDidMount(){

    this.fetchAudio();

  }

  fetchAudio = async () => {
    const response = await api.get('/audios/all');
    this.setState({ audios: response.data.Items });
    console.log(this.state.audios);
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
    await api.post('/audios/upload', data).then(res => { // then print response status
      console.log(res.statusText);
   });
   
   this.fetchAudio();

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  detalhes = (id) =>{
    
    this.props.history.push(`/audios/${id}`);

  }

  upload = () =>{
    
    console.log("upload was called with blob " + this.state.audio);

    const title = this.state.title;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", this.state.audio);
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob

    xhr.onload =  async function(){
      let blob = xhr.response;

      const data = new FormData();
      data.append('file', blob);
      data.append('title', title)

      await api.post('/audios/upload', data).then(res => { console.log(res.statusText) });

      

    }
    
    xhr.send(); 

    this.fetchAudio();

  }

  render() {

    return (
    <div>
      <div id="box-container">

        <header>
          <img  src={logo} width="50%" alt="logo" />
        </header>

        <div>
          <Menu attached='top' tabular>
            <Menu.Item
              name='mandar'
              active={this.state.activeItem === 'mandar'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='falar'
              active={this.state.activeItem === 'falar'}
              onClick={this.handleItemClick}
            />
          </Menu>

          <Segment attached='bottom'>
            
            { this.state.activeItem === 'mandar' && 
            
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

                </div> }


                { this.state.activeItem === 'falar'  && 

                    (<Form>

                      <Form.Group>

                      <Form.Input
                        placeholder='Title'
                        name='title'
                        value={ this.state.title }
                        onChange={ this.handleInputText }
                      />

                      <ReactMediaRecorder 
                        audio
                        whenStopped={blobUrl=>this.setState({audio: blobUrl })}
                        render={({startRecording, stopRecording, mediaBlob }) => (
                            <div>
                                <button id="recorder" className="button" onClick={startRecording}>Start Recording</button>
                                <button className="button" onClick={stopRecording}>Stop Recording</button>
                                <button className="button" onClick={this.upload}>Send Audio</button>
                                <audio id="player" src={mediaBlob} controls />
                            </div>
                        )}
                      /> 

                      </Form.Group>

                    </Form>)

                }

          </Segment>
        </div>

        { this.state.arquivo && <TableBox audios={ this.state.audios } detalhes={ this.detalhes } />}

        <h4>Estados:</h4>
          <ol className="descricao"> 
            <li>Transcrevendo: Seu arquivo de áudio está sendo convertido em textos.</li> 
            <li>Esperando Resumo: Seu arquivo está na fila para ser resumido.</li> 
            <li>Resumo: Nosso algoritmo está selecionando as partes mais iportantes do seu texto.</li> 
            <li>Concluído: Seu arquivo já foi transcrito, você pode baixa-lo agora.</li> 
          </ol>

         

          <Divider />
          
      </div>
      
    </div>
    );
  }
}

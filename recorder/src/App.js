import React, { Component } from 'react';
import ReactMediaRecorder from "react-media-recorder";

import api from './services/api';

export default class App extends Component {

  state = {
    audio: null
  }

  upload = async () =>{
    
    //console.log("upload was called with blob " + this.state.audio);

    const file = {};
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.state.audio, true);
    xhr.responseType = 'blob';
    xhr.onload = e => {
        if (this.status === 200) {
          const blob = xhr.response;
            file.file = this.response;
            file.name = "whatever_filename.mp3";
            file.type = "audio/mpeg";
            console.log(blob);
        }
        
    }

    xhr.send();

    

    // const file = new FormData();
    // file.append('file', blob);

    // await api.post('/audio/upload', file).then(res => { // then print response status
    //   console.log(res.statusText);
    // });

  }

  render(){

  return (
    <div className="App">
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
    </div>
  );

  }
}


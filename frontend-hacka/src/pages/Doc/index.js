import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
 //import { Container } from './styles';

import api from '../../services/api';

import './style.css';

export default class Doc extends Component {

  state = {
    doc: [],
    docResumido: []
  }

  componentDidMount(){
    this.fetchDoc();
  }

  fetchDoc = async () =>{
    const id = this.props.match.params.id;
    const response = await api.get(`/audios/${id}`);

    this.setState({ doc: response.data.fullText });

    this.setState({ docResumido: response.data.smallText });
    console.log(this.state.doc);
  }

  render() {
    return (
      
      <Container>

         <div id="conatiner-doc"> 

            <h1> Sumário </h1>
            <p> { this.state.docResumido  } </p>

            <h1> Aúdio Transcrito </h1>
            <p> { this.state.doc  } </p>

            
         </div>

      </Container>

    )

  }
}

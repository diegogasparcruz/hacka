import React, { Component } from 'react';
import { Grid, Image, Divider, Segment, Container, Header, List } from 'semantic-ui-react';

// import { Container } from './styles';

export default class FooterPage extends Component {
  render() {
    return (
    
      <div>

      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign='center'>
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Endereço' />
                <List link inverted>
                  <List.Item as='a'>Av. José de Freitas Queiroz, 5003</List.Item>
                  <List.Item as='a'>Cedro – Quixadá – Ceará</List.Item>
                  
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header inverted as='h4' content='Fale Conosco' />
                <List link inverted>
                  <List.Item as='a'>diegogaprs2@gmail.com</List.Item>
                  <List.Item as='a'>henriquesales@alu.ufc.br</List.Item>
                  <List.Item as='a'>hernanytec22@gmail.com</List.Item>
                  <List.Item as='a'>ls440552@gmail.com</List.Item>
                </List>
              </Grid.Column>
              
              <Grid.Column width={7}>
                <Header inverted as='h4' content='Propósito' />
                <p>
                  Esse projeto foi realizado com o objetivo de participar da 1ª Hackaton Inove em conjunto com o Grupo Atlântica.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                © Copyright 2019. Listen2Me.
              </List.Item>
              
            </List>
          </Container>
        </Segment>

      </div>

    );
  }
}
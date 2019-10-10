import React, { Component } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

// import { Container } from './styles';

export default function TableBox({ audios, detalhes })  {

    function showStatus(status){

      if(status === 1)
        return ( <p> Sendo transcrito </p> );

      if(status === 2)
        return ( <p> Esperando o resumo </p> );

      if(status === 3)
        return ( <p> Resumindo </p> );

      if(status === 4)
        return ( <p> Feito </p> );

    }

    return (

      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          { audios.map((audio) => (
            <Table.Row key={ audio.fileId }>
              <Table.Cell><Icon color="orange" size="large" name="file audio" />  { audio.title } </Table.Cell>
              <Table.Cell>{ showStatus(audio.fileStatus) }</Table.Cell>
              <Table.Cell textAlign="center"> <Button onClick={ () => detalhes(audio.fileId) } > Detalhes </Button> </Table.Cell>
            </Table.Row>))
          }
          </Table.Body>
        </Table>

    );
}

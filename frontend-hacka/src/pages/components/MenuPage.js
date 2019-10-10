import React, { Component } from 'react';
import { Container, Menu, Image, Dropdown } from 'semantic-ui-react';


export default class MenuPage extends Component {

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {

    return (

      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
              Project Name
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Sobre</Menu.Item>

              
          </Container>
        </Menu>
      </div>

    );
  }
}
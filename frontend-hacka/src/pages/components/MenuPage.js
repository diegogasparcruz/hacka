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
              
              Listen 2 me
            </Menu.Item>
            <Menu.Item as='a' href="/">Home</Menu.Item>

              
          </Container>
        </Menu>
      </div>

    );
  }
}
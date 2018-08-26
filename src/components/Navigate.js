import React, { Component } from "react";
import Navbar from "react-bulma-components/lib/components/navbar";

class Navigate extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      opened: true
    };
  }
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <strong>Home</strong>
          </Navbar.Item>
          <Navbar.Burger
            active={this.state.opened}
            onClick={() =>
              this.setState(state => {
                return { opened: !this.state.opened };
              })
            }
          />
        </Navbar.Brand>
        <Navbar.Menu active={this.state.opened}>
          <Navbar.Container>
            <Navbar.Item href="#">About</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Navigate;

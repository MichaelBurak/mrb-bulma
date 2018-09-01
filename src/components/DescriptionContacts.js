import React, { Component } from "react";
import Container from "react-bulma-components/lib/components/container";
import Level from "react-bulma-components/lib/components/level";
import Button from "react-bulma-components/lib/components/button";
import Message from "react-bulma-components/lib/components/message";

class DescriptionContacts extends Component {
  render() {
    return (
      <Container>
        <Level>
          <Level.Side align="left">
            <Level.Item>
              <Message>
                <Message.Header>
                  MICHAEL BURAK DATA DRIVEN TECHNOLOGIST
                  <Button remove />
                </Message.Header>
                <Message.Body>
                  DESCRIPTION OF MICHAEL BURAK, DATA DRIVEN TECHNOLOGIST
                </Message.Body>
              </Message>
            </Level.Item>
          </Level.Side>
        </Level>
      </Container>
    );
  }
}

export default DescriptionContacts;

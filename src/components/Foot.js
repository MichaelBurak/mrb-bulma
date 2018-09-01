import React, { Component } from "react";
import Footer from "react-bulma-components/lib/components/footer";
import Container from "react-bulma-components/lib/components/container";
import Content from "react-bulma-components/lib/components/content";

class Foot extends Component {
  render() {
    return (
      <Footer>
        <Container>
          <Content style={{ textAlign: "center" }}>
            <p>
              <strong>Logos: LIn, Github, Twitter, Misc</strong>
            </p>
          </Content>
        </Container>
      </Footer>
    );
  }
}

export default Foot;

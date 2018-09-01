import React, { Component } from "react";

import Tabs from "react-bulma-components/lib/components/tabs";
import Hero from "react-bulma-components/lib/components/hero";
import Section from "react-bulma-components/lib/components/section";
import Container from "react-bulma-components/lib/components/container";

class Navigate extends Component {
  render() {
    return (
      <Hero color="white" gradient>
        <Hero.Body>
          <Container>
            <Tabs>
              <Tabs.Tab active>HOME</Tabs.Tab>
              <Tabs.Tab>About</Tabs.Tab>
            </Tabs>
          </Container>
        </Hero.Body>
      </Hero>
    );
  }
}

export default Navigate;

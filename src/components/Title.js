import React, { Component } from "react";
import Heading from "react-bulma-components/lib/components/heading";
import Box from "react-bulma-components/lib/components/box";
import Section from "react-bulma-components/lib/components/section";

import Container from "react-bulma-components/lib/components/container";

class Title extends Component {
  render() {
    return (
      <Container>
        <Box has-background-primary gradient>
          <Heading
            has-background-primary
            gradient
            className="is-italic"
            size={2}
          >
            Michael Burak's Professional Page
          </Heading>
          <Heading subtitle size={3}>
            Slogan
          </Heading>
        </Box>
      </Container>
    );
  }
}

export default Title;

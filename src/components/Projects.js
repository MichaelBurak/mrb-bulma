import React, { Component } from "react";
import Card from "react-bulma-components/lib/components/card";
import Media from "react-bulma-components/lib/components/media";
import Hero from "react-bulma-components/lib/components/hero";
import Content from "react-bulma-components/lib/components/content";
import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";

class Projects extends Component {
  render() {
    return (
      <Hero color="white" gradient>
        <Hero.Body>
          <Container>
            <Card>
              {/* <Card.Image Screenshot */}
              <Card.Content>
                <Media>
                  <Media.Item renderAs="figure" position="left">
                    {/* <Image logo /> */}
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>Deep Thoughts Quotes</Heading>
                    <Heading subtitle size={6}>
                      link
                    </Heading>
                  </Media.Item>
                </Media>
                <Content>Description</Content>
              </Card.Content>
            </Card>
            <Card>
              {/* <Card.Image Screenshot */}
              <Card.Content>
                <Media>
                  <Media.Item renderAs="figure" position="left">
                    {/* <Image logo /> */}
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>Notes</Heading>
                    <Heading subtitle size={6}>
                      link
                    </Heading>
                  </Media.Item>
                </Media>
                <Content>Description</Content>
              </Card.Content>
            </Card>
            <Card>
              {/* <Card.Image Screenshot */}
              <Card.Content>
                <Media>
                  <Media.Item renderAs="figure" position="left">
                    {/* <Image logo /> */}
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>RPG Planner</Heading>
                    <Heading subtitle size={6}>
                      link
                    </Heading>
                  </Media.Item>
                </Media>
                <Content>Description</Content>
              </Card.Content>
            </Card>
          </Container>
        </Hero.Body>
      </Hero>
    );
  }
}

export default Projects;

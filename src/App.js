import React, { Component } from "react";
import Navigate from "./components/Navigate";
import Title from "./components/Title";
import Foot from "./components/Foot";
import Section from "react-bulma-components/lib/components/section";
import DescriptionContacts from "./components/DescriptionContacts";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section>
          <Navigate />
        </Section>
        <Section is-large>
          <Title />
        </Section>
        <Section>
          <DescriptionContacts />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Foot />
        </Section>
      </div>
    );
  }
}

export default App;

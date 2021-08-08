import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import pkg from 'semantic-ui-react/package.json'
import Example from "./example";

const Comments = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">Comment box.... {pkg.version} 😊</Header>
   

    {children}
  </Container>
);


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <Comments>
    <Example />
  </Comments>,
  document.getElementById("root")
);

export default Comments
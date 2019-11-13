import React from "react";
import Sub from "./Sub";
import Child from "./Child";
class Main extends React.Component {
  render() {
    return (
      <Sub data={{ name: "hello" }} child={<Child />}>
        <p>1212</p>
        <p>1212</p>
        <p>1212</p>
        <p>1212</p>
      </Sub>
    );
  }
}
export default Main;

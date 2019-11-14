import React from "react";
import Sub from "./Sub";
import Child from "./Child";
class Main extends React.Component {
  render() {
    return (
      <Sub data={{ name: "hello" }} child={<Child />}>
        <p>this is Sub Comp's  children </p>
        <p>this is Sub Comp's  children </p>
      </Sub>
    );
  }
}
export default Main;

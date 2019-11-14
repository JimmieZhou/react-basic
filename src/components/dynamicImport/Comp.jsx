import React from "react";
class Comp extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
export default Comp;

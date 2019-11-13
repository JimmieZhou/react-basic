import React from "react";
class Sub extends React.Component {
  render() {
    return (
      <div>
        {this.props.child}

        {JSON.stringify(this.props.data)}
        {this.props.children}
      </div>
    );
  }
}
export default Sub;

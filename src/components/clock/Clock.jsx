import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.state.timmerId = setInterval(() => this.run(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timmerId);
  }

  run() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
export default Clock;

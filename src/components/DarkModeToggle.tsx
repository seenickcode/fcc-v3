import { Component } from "react";

interface State {
  title: string;
}

export default class DarkModeToggle extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { title: "on" };
  }

  toggle = (e) => {
    debugger;
    e.preventDefault();
    console.log("toggle");

    // const newTitle = this.state == "on" ? "off" : "on";
    // this.setState({
    //   title: newTitle,
    // });
  };

  render() {
    return (
      <p>
        <a href="/" onClick={this.toggle}>
          {this.state.title}
        </a>
      </p>
    );
  }
}

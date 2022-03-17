import { Component } from "preact";

interface State {
  on: boolean;
}

export default class DarkModeToggle extends Component<{}, State> {
  constructor(props) {
    super(props);

    const val = localStorage.getItem("dark-mode");

    this.state = {
      on:
        val == "1" || window.matchMedia("(prefers-color-scheme: dark)").matches,
    };
  }

  applyState = (on: boolean) => {
    if (on) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("dark-mode", on ? "1" : "");
  };

  toggle = (e) => {
    e.preventDefault();

    const newOn = !this.state.on;

    this.applyState(newOn);

    this.setState({
      on: newOn,
    });
  };

  render() {
    return (
      <a href="#" onClick={this.toggle}>
        Dark Mode {this.state.on ? "On" : "Off"}
      </a>
    );
  }
}

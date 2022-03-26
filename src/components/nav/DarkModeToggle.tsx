import { Component } from "preact";

interface State {
  on: boolean;
}

export default class DarkModeToggle extends Component<{}, State> {
  constructor(props) {
    super(props);

    let val = localStorage.getItem("dark-mode");

    if (!val && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      val = "1";
    }

    this.state = {
      on: val == "1",
    };
  }

  applyState = (on: boolean) => {
    if (on) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("dark-mode", on ? "1" : "0");
    console.log("val is now", localStorage.getItem("dark-mode"));
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

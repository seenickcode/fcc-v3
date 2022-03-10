import { Component } from "preact";

interface State {
  on: boolean;
}

export default class DarkModeToggle extends Component<{}, State> {
  constructor(props) {
    super(props);

    // determine if dark mode should be on
    let isOn = false;
    if (localStorage) {
      // get local storage value
      const val = localStorage.getItem("dark-mode");

      if (val) {
        // set it
        isOn = val === "1";
      } else {
        // if not set, see if the user prefers dark mode
        isOn = window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    }

    // set document class to dark if needed
    this.applyState(isOn);

    // set state accordingly
    this.state = { on: isOn };
  }

  applyState = (on: boolean) => {
    if (on) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage) {
      localStorage.setItem("dark-mode", on ? "1" : "");
    }
  };

  toggle = (e) => {
    e.preventDefault();

    const newOn = !this.state.on;

    this.applyState(newOn);

    // update local state
    this.setState({
      on: newOn,
    });
  };

  render() {
    return (
      <p>
        <a href="#" onClick={this.toggle}>
          Dark Mode {this.state.on ? "On" : "Off"}
        </a>
      </p>
    );
  }
}

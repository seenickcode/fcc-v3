import { Component } from "react";
import { PortableText } from "@portabletext/react";

export class BlockText extends Component {
  render() {
    return <PortableText value={this.props.value} />;
  }
}

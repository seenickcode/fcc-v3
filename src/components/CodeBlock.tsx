import React from "react";
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function CodeBlock(props) {
  return <pre>{props.code}</pre>;
}

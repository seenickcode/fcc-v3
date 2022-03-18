import React from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../utils/formatters";

export default function BlockText(props) {
  const components = {
    types: {
      image: ({ value }) => <img src={urlFor(value)} />,
    },
  };

  return <PortableText value={props.value} components={components} />;
}

import React, { Fragment } from "react";
import { urlFor } from "../utils/formatters";
import { PortableText } from "@portabletext/react";
import Highlight from "react-highlight";
import { Helmet } from "react-helmet";

export default function BlockContent(props) {
  const components = {
    block: {
      // h1: ({ children }) => <h1 className="my-16 font-serif">{children}</h1>,
      // h2: ({ children }) => (
      //   <h2 className="mt-16 mb-8 font-serif">{children}</h2>
      // ),
      // h3: ({ children }) => (
      //   <h3 className="mt-16 mb-8 font-serif">{children}</h3>
      // ),
      // h4: ({ children }) => (
      //   <h4 className="mt-16 mb-8 font-serif">{children}</h4>
      // ),
      // normal: ({ children }) => (
      //   <p className="mt-8 mb-4 font-serif">{children}</p>
      // ),
    },
    types: {
      code: ({ value }) => (
        <Highlight className={value.language}>{value.code}</Highlight>
      ),
      image: ({ value }) => (
        <div className="border-solid border-primary border-8 mt-12 mb-12">
          <img src={urlFor(value)} />
        </div>
      ),
    },
  };

  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/styles/dracula.min.css"
        />
      </Helmet>
      <PortableText value={props.content} components={components} />
    </Fragment>
  );
}

import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { PortableText } from "@portabletext/react";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
import { urlFor } from "../utils/formatters";

export default function BlockContent(props) {
  useEffect(() => {
    if (hljs) {
      hljs.highlightAll();
    }
  }, []);

  const components = {
    block: {
      h1: ({ children }) => <h1 className="">{children}</h1>,
      h2: ({ children }) => <h2 className="">{children}</h2>,
      h3: ({ children }) => <h3 className="">{children}</h3>,
      h4: ({ children }) => <h4 className="">{children}</h4>,
      normal: ({ children }) => <p className="">{children}</p>,
    },
    types: {
      image: ({ value }) => (
        <div className="border-solid border-primary border-8 my-8">
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
      <PortableText value={props.portableText} components={components} />
      <ReactMarkdown children={props.markdown} />
    </Fragment>
  );
}

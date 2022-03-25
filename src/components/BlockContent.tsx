import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";

import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";

export default function BlockContent(props) {
  useEffect(() => {
    if (hljs) {
      hljs.highlightAll();
    }
  }, []);

  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/styles/dracula.min.css"
        />
      </Helmet>
      <ReactMarkdown children={props.content} />
    </Fragment>
  );
}

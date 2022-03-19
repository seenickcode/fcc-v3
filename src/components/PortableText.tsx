import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { PortableText as _PortableText } from "@portabletext/react";
import { urlFor } from "../utils/formatters";

export default function PortableText(props) {
  const components = {
    block: {
      h1: ({ children }) => <h1 className="my-16">{children}</h1>,
      h2: ({ children }) => <h2 className="mt-16 mb-8">{children}</h2>,
    },
    types: {
      code: ({ value }) => (
        <Highlight
          {...defaultProps}
          code={value.code}
          language={value.language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ),
      image: ({ value }) => (
        <div className="border-solid border-primary border-8 mt-12 mb-12">
          <img src={urlFor(value)} />
        </div>
      ),
    },
  };

  return <_PortableText value={props.value} components={components} />;
}

// source: https://codesandbox.io/s/hidden-frost-mpdjj?file=/src/App.tsx:156-292

// import { useEffect, useRef } from "preact/hooks";
import { useEffect, useRef } from "react";

import "plyr-react/dist/plyr.css";
import Hls from "hls.js";
import Plyr, { APITypes, PlyrProps, PlyrInstance } from "plyr-react";

const MyComponent = (src) => {
  console.log(src.src.src);
  const ref = useRef<APITypes>(null);
  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;
      var hls = new Hls();
      hls.loadSource(src.src.src); // FIXME wtf
      hls.attachMedia(video);
      // @ts-ignore
      ref.current!.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        (ref.current!.plyr as PlyrInstance).play();
      });
    };
    loadVideo();
  });

  return (
    <Plyr
      id="plyr"
      options={{ volume: 0.1 }}
      source={{} as PlyrProps["source"]}
      ref={ref}
    />
  );
};

export default function Player(src) {
  const supported = Hls.isSupported();

  return (
    <div>
      {supported ? (
        <MyComponent src={src} />
      ) : (
        "HLS is not supported in your browser"
      )}
    </div>
  );
}

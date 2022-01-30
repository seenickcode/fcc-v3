import { useEffect, useRef } from "react";
// import "./styles.css";

import "plyr-react/dist/plyr.css";
import Hls from "hls.js";
import Plyr, { APITypes, PlyrProps, PlyrInstance } from "plyr-react";

const videoSrc: Plyr.SourceInfo = {
  type: "video",
  sources: [
    {
      src: "yWtFb9LJs3o",
      provider: "youtube",
    },
  ],
};

export default function Player() {
  const ref = useRef<APITypes>(null);

  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;

      var hls = new Hls();
      hls.loadSource(
        "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
      ); // "https://cdn.plyr.io/static/blank.mp4");
      hls.attachMedia(video);
      // @ts-ignore
      ref.current!.plyr.media = video;

      // hls.on(Hls.Events.MANIFEST_PARSED, function () {
      //   (ref.current!.plyr as PlyrInstance).play();
      // });
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
}

// export default function App() {
//   const supported = Hls.isSupported();

//   return (
//     <div>
//       {supported ? <MyComponent /> : "HLS is not supported in your browser"}
//     </div>
//   );
// }

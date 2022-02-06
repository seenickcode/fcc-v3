import { useEffect, useState } from "preact/hooks";
import Hls, { Level } from "hls.js";

export default function Player(props) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (Hls.isSupported()) {
      var video = document.getElementById("video") as HTMLMediaElement;
      var hls = new Hls({ autoStartLoad: false, capLevelToPlayerSize: true });

      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(props.src);
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {});
      });

      video.onload = () => {};
      video.onplay = () => {
        setPlaying(true);
        hls.startLoad(-1);
        // TODO add an overlay on load with the following to remove the controls by default
        // video::-webkit-media-controls-panel { visibility: hidden; }
        // then remove it here on play
        // TODO consider a proper video player instead vs custom styling this
      };
      video.onpause = () => {
        setPlaying(false);
        hls.stopLoad();
      };
    }
  }, []);

  return (
    <div>
      <video
        id="video"
        controls
        width={props.width}
        poster="https://cdn.sanity.io/images/o8uzmguj/production/26c3619b787a371328384782217ad13b9f5c11d9-1265x712.jpg"
      ></video>
    </div>
  );
}

import { useEffect } from "preact/hooks";
import Hls from "hls.js";

export default function Player2() {
  useEffect(() => {
    if (Hls.isSupported()) {
      console.log("loading video");
      var video = document.getElementById("video") as HTMLMediaElement;
      var hls = new Hls();
      // bind them together
      hls.attachMedia(video);
      // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log("video and hls.js are now bound together !");
        hls.loadSource(
          "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
        );
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log(
            "manifest loaded, found " + data.levels.length + " quality levels"
          );
        });
      });
    }
  }, []);

  return <video id="video"></video>;
}

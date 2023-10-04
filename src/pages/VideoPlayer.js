import './styles/video.css';

export default function VideoPlayer() {
  return (
    <>

              <div id="instructions">
                <video
                  id="my_video_1"
                  class="video-js vjs-default-skin"
                  width="640px"
                  height="267px"
                  controls
                  preload="none"
                  poster="http://video-js.zencoder.com/oceans-clip.jpg"
                  data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/wedfirebase.appspot.com/o/243101415-2acd32d1-8854-4e2c-a5f5-5ced0e38f727.mp4?alt=media&token=23d2dd87-0662-40ab-ae13-3a02eb05e6d0"
                    type="video/mp4"
                  />
                </video>

              </div>
    </>
  );
}

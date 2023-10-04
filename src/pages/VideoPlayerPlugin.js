import { useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";

export default function VideoPlayerPlugin() {
  const videroPlayerRef = useRef(null);
  const [isplaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState("");

  ////زيااااااد
  // غيرالروابط دي بفيديوهات من الباك اند وجرب
  const [arr, setArr] = useState([
    "https://firebasestorage.googleapis.com/v0/b/wedfirebase.appspot.com/o/243101415-2acd32d1-8854-4e2c-a5f5-5ced0e38f727.mp4?alt=media&token=23d2dd87-0662-40ab-ae13-3a02eb05e6d0",
    "https://firebasestorage.googleapis.com/v0/b/wedfirebase.appspot.com/o/2023-08-06%2022-46-49.mkv?alt=media&token=05b57ccd-69f7-4da5-bb3b-bde2774eb89f",
    "https://firebasestorage.googleapis.com/v0/b/wedfirebase.appspot.com/o/ocean-62249.mp4?alt=media&token=27a8ec3c-da83-463f-8367-895a6f814b42",
  ]);

  const handelClick = () => {
    setIsPlaying(!isplaying);
  };

  const handleChange = (index) => {
    setUrl(arr[index]);
  };
  useEffect(() => {
    handleChange(1);
  }, []);
  return (
    <>
      <section
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container">
          <Row>
            <Col className="col-lg-8">
              <ReactPlayer
                playing={isplaying}
                ref={videroPlayerRef}
                className="m-auto"
                url={url}
                controls
              />
            </Col>
            <Col className="col-4 d-flex flex-column ">
              {arr.map((item, index) => (
                <Button
                  key={index}
                  className="my-2"
                  onClick={() => handleChange(index)}
                  variant="primary"
                >
                  change url
                </Button>
              ))}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

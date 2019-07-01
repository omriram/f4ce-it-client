import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box, input }) => {
  const displayContent =
    imageUrl === "" ? (
      <div>
        <p> Picture will be shown here </p>
        <p>
          {" "}
          <u>Example</u>: https://i.mdel.net/i/db/2018/8/951629/951629-800w.jpg{" "}
        </p>
      </div>
    ) : (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputImage"
            alt="Unrecognized image link"
            src={imageUrl}
            width="500px"
            height="auto"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          />
        </div>
      </div>
    );

  return displayContent;
};

export default FaceRecognition;

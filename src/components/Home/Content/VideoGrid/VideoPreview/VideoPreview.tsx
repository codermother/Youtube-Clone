import React from "react";
import PreviewImage from "../../../../../assets/image/photo1.webp";
import "./VideoPreview.css";
import { Image } from "semantic-ui-react";

export const VideoPreview = () => {
  return (
    <div className="video-preview">
      <div className="video-image">
        <Image src={PreviewImage} />
        <div className="video-timestamp">
          <span>11.38</span>
        </div>
        <div className="video-info">
          <div className="">Test videoo</div>
          <div className="video-basic-info">
            <div className="video-channel">test video</div>
            <div className="video-view-time">14k views . 33 minutes ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

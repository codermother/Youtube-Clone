import React from "react";
import "./VideoGridHeader.css";

interface VideoGridHeader1 {
  Title: string;
}

function VideoGridHeader(props: VideoGridHeader1) {
  return (
    <div className="video-grid-header">
      <span className="video-title">{props.Title}</span>
    </div>
  );
}

export default VideoGridHeader;

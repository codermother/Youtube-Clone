import React from "react";
import { VideoPreview } from "./VideoPreview/VideoPreview";
import "./VideoGrid.css";
import VideoGridHeader from "./VideoGridHeader/VideoGridHeader";
import { Divider } from "semantic-ui-react";

export const VideoGrid = () => {
  let preview = Array.apply(null, new Array(15)).map((val, index) => (
    <VideoPreview key={index} />
  ));

  return (
    <>
      <VideoGridHeader Title="Test Title" />
      <div className="video-grid">{preview}</div>
      <Divider />
    </>
  );
};

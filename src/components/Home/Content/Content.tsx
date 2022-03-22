import React from "react";
import { VideoGrid } from "./VideoGrid/VideoGrid";
import "./Content.css";

export default function Content() {
  return (
    <div className="video-content">
      <div className="video-content-container">
        <VideoGrid />
        <VideoGrid />
      </div>
    </div>
  );
}

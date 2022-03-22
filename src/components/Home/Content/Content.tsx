import React, { useState } from "react";
import { VideoGrid } from "./VideoGrid/VideoGrid";
import "./Content.css";
import InfiniteScroll from "../../InfiniteScroll/InfiniteScroll";

export default function Content() {
  const [noOfGrids, setGrids] = useState(2);

  const grids = Array.apply(null, new Array(noOfGrids)).map((val, index) => (
    <VideoGrid key={index} />
  ));
  const onCallback = () => {
    if (noOfGrids >= 10) {
      return;
    } /* if we remove this if state it will be infinite */
    setGrids((currentState) => currentState + 1);
  };

  return (
    <InfiniteScroll callback={onCallback}>
      <div className="video-content">
        <div className="video-content-container">{grids}</div>
      </div>
    </InfiniteScroll>
  );
}

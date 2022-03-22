import React from "react";
import { Waypoint } from "react-waypoint";

interface IInfiniteScroll {
  children: React.ReactElement;
  callback(args: Waypoint.CallbackArgs): void;
}

function InfiniteScroll(props: IInfiniteScroll) {
  return (
    <div>
      {props.children}
      <Waypoint onEnter={props.callback} bottomOffset="-15px"></Waypoint>
    </div>
  );
}

export default InfiniteScroll;

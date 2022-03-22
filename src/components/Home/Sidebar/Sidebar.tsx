import React from "react";
import "./Sidebar.css";
import { Divider, Menu } from "semantic-ui-react";
import SidebarItem from "./SidebarItem/SidebarItem";

function Sidebar() {
  return (
    <Menu borderless vertical fixed="left">
      <SidebarItem label="Home" icon="home" selected />
      <SidebarItem label="Trending" icon="fire" selected={false} />
      <Divider />
      <SidebarItem label="Subscription" icon="youtube" selected={false} />
      <SidebarItem label="History" icon="history" selected={false} />
      <SidebarItem label="Library" icon="play" selected={false} />
    </Menu>
  );
}

export default Sidebar;

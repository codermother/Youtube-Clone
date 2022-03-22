import React from "react";
import { Icon, Item } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";
import "./SidebarItem.css";

interface ISidebarItem {
  icon: SemanticICONS;
  label: string;
  selected: boolean;
}

function SidebarItem(props: ISidebarItem) {
  const highlightClass = props.selected ? "highlight-menu" : null;

  return (
    <Item className={["sidebar-item", highlightClass].join(" ")}>
      <span>
        <Icon size="large" name={props.icon} />
      </span>
      <span>{props.label}</span>
    </Item>
  );
}

export default SidebarItem;

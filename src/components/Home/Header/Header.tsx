import React, { useState } from "react";
import { Form, Icon, Input, Item, Menu } from "semantic-ui-react";
import "./Header.css";

function Header() {
  const [searchState, setSearchState] = useState("");

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = event.currentTarget.value;
    setSearchState(() => value);
  };

  return (
    <Menu borderless fixed="top" className="header">
      <Item>
        <span>
          <Icon name="youtube" size="large" />
        </span>
        <span>Youtube</span>
      </Item>
      <Menu.Menu className="header-container">
        <Item className="search-input">
          <Form className="search-form">
            <Form.Field>
              <Input
                placeholder="Search"
                value={searchState}
                action={{ icon: "search" }}
                onChange={onSearchChange}
              />
            </Form.Field>
          </Form>
        </Item>
      </Menu.Menu>
      <Menu.Menu>
        <Item>
          <Icon className="menu-icon" name="video camera" size="large" />
        </Item>
        <Item>
          <Icon className="menu-icon" name="grid layout" size="large" />
        </Item>
        <Item>
          <Icon className="menu-icon" name="ellipsis vertical" size="large" />
        </Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;

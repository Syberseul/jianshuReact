import React from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from "./style";

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          <NavItem className="right">Log In</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;

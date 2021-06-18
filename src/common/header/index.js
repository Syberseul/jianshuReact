import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
} from "./style";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">Home</NavItem>
        <NavItem className="left">Download App</NavItem>
        <NavItem className="right">Log In</NavItem>
        <NavItem className="right">Aa</NavItem>
        <CSSTransition in={props.focused} timeout={200} classNames="slide">
          <NavSearch
            className={props.focused ? "focused" : ""}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          ></NavSearch>
        </CSSTransition>
      </Nav>
      <Addition>
        <Button className="write">Write</Button>
        <Button className="reg">Sign Up</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    focused: state.focused,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus",
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blur",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

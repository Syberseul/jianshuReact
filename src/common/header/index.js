import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { actionCreator } from "./store";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from "./style";

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          Top search
          <SearchInfoSwitch>Change</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    );
  } else {
    return null;
  }
};

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
        {getListArea(props.focused)}
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
    // header comes from the overall reducer - which imported the combineReducers with header reducer's key is header.
    focused: state.getIn(["header", "focused"]),
    // focused: state.get("header").get("focused"), - 等价
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.handleInputFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.handleInputBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

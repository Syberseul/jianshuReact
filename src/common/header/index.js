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

class Header extends React.Component {
  getListArea = () => {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Top search
            <SearchInfoSwitch>Change</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          <NavItem className="right">Log In</NavItem>
          <NavItem className="right">Aa</NavItem>
          <CSSTransition
            in={this.props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={this.props.focused ? "focused" : ""}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          {this.getListArea()}
        </Nav>
        <Addition>
          <Button className="write">Write</Button>
          <Button className="reg">Sign Up</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // header comes from the overall reducer - which imported the combineReducers with header reducer's key is header.
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    // focused: state.get("header").get("focused"), - 等价
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.getList());
      dispatch(actionCreator.handleInputFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.handleInputBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

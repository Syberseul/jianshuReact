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
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Top search
            <SearchInfoSwitch>Change</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {list.map((item) => {
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
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
              className={focused ? "focused" : ""}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
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
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
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

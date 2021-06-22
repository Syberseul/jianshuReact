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
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
      mouseEnterChange,
      mouseLeaveChange,
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];

    if (jsList.length) {
      for (let i = (page - 1) * 5; i < page * 5; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Top search
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(page, totalPage);
              }}
              onMouseEnter={() => {
                mouseEnterChange(this.change);
              }}
              onMouseLeave={() => {
                mouseLeaveChange(this.change);
              }}
            >
              <p
                ref={(changeText) => {
                  this.change = changeText;
                }}
              >
                Change
              </p>
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
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
              onFocus={() => {
                handleInputFocus(list);
              }}
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
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreator.getList());
      }
      dispatch(actionCreator.handleInputFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.handleInputBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreator.handleMouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreator.handleMouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreator.handleChangePage(page + 1));
      } else {
        dispatch(actionCreator.handleChangePage(1));
      }
    },
    mouseEnterChange(changeText) {
      changeText.style.transform = "scale(1.2)";
    },
    mouseLeaveChange(changeText) {
      changeText.style.transform = "scale(1)";
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

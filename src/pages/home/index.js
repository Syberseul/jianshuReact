import React from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writter from "./components/Writter";
import { actionCreator } from "./store";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";

class Home extends React.PureComponent {
  handleBackToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1255&q=80"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writter />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleBackToTop}>Top</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreator.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreator.toggleTopShow(true));
    } else {
      dispatch(actionCreator.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);

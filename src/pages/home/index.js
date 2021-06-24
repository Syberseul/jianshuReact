import React from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writter from "./components/Writter";
import { actionCreator } from "./store";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

class Home extends React.Component {
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
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreator.getHomeInfo();
    dispatch(action);
  },
});

export default connect(null, mapDispatch)(Home);

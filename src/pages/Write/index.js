import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Post extends React.PureComponent {
  render() {
    const { login } = this.props;
    if (login) return <div>Hello</div>;
    else return <Redirect to="/login" />;
  }
}

const mapState = (state) => ({
  login: state.getIn(["login", "login"]),
});

export default connect(mapState, null)(Post);

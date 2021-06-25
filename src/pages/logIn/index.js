import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreator } from "./Store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends React.PureComponent {
  render() {
    const { login, loginFunc } = this.props;

    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="user name"
              ref={(input) => {
                this.account = input;
              }}
            />
            <Input
              placeholder="password"
              type="password"
              ref={(input) => {
                this.password = input;
              }}
            />
            <Button onClick={() => loginFunc(this.account, this.password)}>
              Log In
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(["login", "login"]),
});

const mapDispatch = (dispatch) => ({
  loginFunc(accountElem, passwordElem) {
    dispatch(actionCreator.login(accountElem.value, passwordElem.value));
  },
});

export default connect(mapState, mapDispatch)(Login);

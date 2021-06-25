import React from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends React.PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="user name" />
          <Input placeholder="password" />
          <Button>Log In</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapState = (state) => ({
  // ...
});

const mapDispatch = (dispatch) => ({
  // ...
});

export default connect(mapState, mapDispatch)(Login);

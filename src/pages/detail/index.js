import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "./Store";
import { DetailWrapper, Header, Content } from "./style";

class Detail extends React.PureComponent {
  render() {
    const { title, desc, imgURL } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content>
          <img src={imgURL} alt="" />
          <p>{desc}</p>
        </Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  desc: state.getIn(["detail", "desc"]),
  imgURL: state.getIn(["detail", "imgURL"]),
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreator.getDetail(id));
  },
});

export default connect(mapState, mapDispatch)(withRouter(Detail));

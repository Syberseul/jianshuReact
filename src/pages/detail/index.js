import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "./Store";
import { DetailWrapper, Header, Content } from "./style";

class Detail extends React.Component {
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
    this.props.getDetail();
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  desc: state.getIn(["detail", "desc"]),
  imgURL: state.getIn(["detail", "imgURL"]),
});

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreator.getDetail());
  },
});

export default connect(mapState, mapDispatch)(Detail);

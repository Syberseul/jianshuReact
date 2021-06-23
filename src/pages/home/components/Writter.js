import React from "react";
import { connect } from "react-redux";
import {
  WritterWrapper,
  SingleWritterWrapper,
  SingleWritter,
  WritterDetail,
} from "../style";

class Writter extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <WritterWrapper>
        <div className="title">
          <span>Writter</span>
          <span className="changeBtn">Change</span>
        </div>
        {list.map((item) => {
          return (
            <SingleWritter key={item.get("id")}>
              <img src={item.get("imgURL")} alt="" className="writterImg" />
              <SingleWritterWrapper>
                <WritterDetail>
                  <span>{item.get("name")}</span>
                  <span className="subscribe">+Subscribe</span>
                </WritterDetail>
                <p className="contribution">
                  {item.get("contribution")} * {item.get("like")}
                </p>
              </SingleWritterWrapper>
            </SingleWritter>
          );
        })}
      </WritterWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "writterList"]),
});

export default connect(mapState, null)(Writter);

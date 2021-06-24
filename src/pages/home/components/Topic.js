import React from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map((item) => {
          return (
            <TopicItem key={item.get("id")}>
              <img className="topicPic" src={item.get("imgURL")} alt="" />
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "topicList"]),
});

export default connect(mapState, null)(Topic);

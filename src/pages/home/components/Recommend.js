import React from "react";
import { connect } from "react-redux";
import { List } from "../style";

class Recommend extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <List>
        {list.map((item) => {
          return (
            <img
              className="recommend"
              src={item.get("imgURL")}
              key={item.get("id")}
              alt=""
            />
          );
        })}
      </List>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});

export default connect(mapState, null)(Recommend);

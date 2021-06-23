import React from "react";
import { ListContainer, ListItem, ListInfo } from "../style";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <ListContainer>
        {list.map((item) => {
          return (
            <ListItem key={item.get("id")}>
              <img className="pic" src={item.get("imgURL")} />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
      </ListContainer>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
});

export default connect(mapState, null)(List);

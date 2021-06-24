import React from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreator } from "../store";

class List extends React.Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <img className="pic" src={item.get("imgURL")} alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>More content</LoadMore>
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"]),
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreator.getMoreList(page));
  },
});

export default connect(mapState, mapDispatch)(List);

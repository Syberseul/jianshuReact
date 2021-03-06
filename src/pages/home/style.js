import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 15px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20xp 0 10px 0;
  margin-left: -20px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin: 20px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topicPic {
    display: block;
    float: left;
    width: 32px;
    height: auto;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
    margin-right: 20px;
  }
`;

export const ListInfo = styled.div`
  width: 400px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const List = styled.div`
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dcdcdc;
  .recommend {
    width: 220px;
    height: 40px;
    margin: auto;
  }
`;

export const WritterWrapper = styled.div`
  display: block;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #969696;
  }
  .changeBtn {
    cursor: pointer;
  }
`;

export const SingleWritterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  width: 100%;
  .contribution {
    font-size: 12px;
    color: #969696;
  }
`;

export const SingleWritter = styled.div`
  display: flex;
  margin: 20px auto;
  .writterImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const WritterDetail = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 10px;
  .subscribe {
    color: #42c02e;
    cursor: pointer;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
`;

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
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 35px;
  margin-bottom: 20px;
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

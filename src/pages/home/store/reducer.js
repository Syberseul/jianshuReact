// import * as constants from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "Social",
      imgURL: "https://image.flaticon.com/icons/png/512/76/76304.png",
    },
    {
      id: 2,
      title: "School",
      imgURL: "https://image.flaticon.com/icons/png/128/981/981456.png",
    },
  ],
  articleList: [
    {
      id: 1,
      title: "10年前，55岁的我做试管生下了女儿；10年后，她的一句话让我泪目",
      desc: "上周，我去参加了女儿家长会，又被人当成了她奶奶。女儿竟然勇敢站出来维护我：“我妈虽然年龄很大，但她很漂亮！”听她说完，我的眼泪流了出来。10年前...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/8981154-31dae1f7d4b050c2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
    {
      id: 2,
      title: "发现美句——村上春树",
      desc: "1.哪里会有人喜欢孤独，不过是不喜欢失望罢了。——《挪威的森林》 2.白昼之光，岂知夜色之深。——《且听风吟》 3.孤独一人也没关系，只要能发自...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/7006741-3ea633b33b42232d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
    {
      id: 3,
      title: "《人生若只如初见》——林徽因",
      desc: "婚前，梁思成问林徽因：“有一句话，我只问这一次，以后都不会再问，为什么是我？”林徽因答：“答案很长，我得用一生去回答你，准备好听我了吗？”婚...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/5467099-87bbdf549b1fd41d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
    {
      id: 4,
      title: "朋友圈中，层次越低的人，越喜欢用这3种“头像”来显摆自己",
      desc: "社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。 但是，社交平台在提高人们的沟通效率的同时，它也成为了更多人的情绪宣泄场。...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/20760323-da2764a07b3f92c6.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
    {
      id: 5,
      title: "怎样提高自己的情商？",
      desc: "1.不要在别人说话的时候玩手机。 2.请客吃饭相当于分享，被请的人吃完就会忘记了，也不会领情，除非你请的是他从没有吃过的豪华大餐，怎么才能在交往...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/16572117-7815d39c756001f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
    {
      id: 6,
      title: "年龄真的不是问题吗？",
      desc: "都说“女大三抱金砖”，那女人超过男人“三岁”，比如17岁甚至37岁呢？ 他们的婚姻会幸福吗？ 韩国一位42岁的女性，与25岁的健身教练结婚，并且...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/9175450-242ec64cfe0f8589.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
    {
      id: 7,
      title: "一个女人毁了我的婚礼，让我摔倒流产，我却要感谢她",
      desc: "昨天，怀着3个月身孕的我终于要嫁人了！仪式进行到一半时，一个女人突然冲上台，狠狠给了新郎一巴掌，还对着我破口大骂，气得我摔下婚庆台流了产。我人生...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/8981154-1f474cfef099ccc9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
    {
      id: 8,
      title: "男人为什么那么在乎女人的“第一次”？两位男士道出真相，很现实",
      desc: "01 在一段感情中，每个人都喜欢“单纯”且“完整”的关系，而不喜欢尔虞我诈的相互算计。 如今的爱情，与其说是真情居多，不如说是套路居多。 因为有...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/20760323-27eec5d791a847df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    },
    {
      id: 9,
      title: "真正抑郁的人是什么样的？",
      desc: "抑郁症发作的时候，根本不是人们以为的那种、肯定会去癫狂地摔东西、撕扯头发、抽搐地笑；也不会歇斯底里地疯狂哭泣喊叫“我要死了”这种话。 很多跳楼、...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/16572117-087f3e1ee6a786d4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    },
    {
      id: 10,
      title: "写故事的恶魔",
      desc: "那个人好奇怪，写故事写到入了魔，可别人问他，他又说不出这样写是为了什么。 “可是我觉得他写得挺好的啊！”一个小孩看了他的故事之后忍不住说道。 “...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/22783713-a6e7c00d60d5ab58.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    },
  ],
  recommendList: [
    {
      id: 1,
      imgURL:
        "https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png",
    },
    {
      id: 2,
      imgURL:
        "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    },
    {
      id: 3,
      imgURL:
        "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    },
    {
      id: 4,
      imgURL:
        "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    },
  ],
  writterList: [
    {
      id: 1,
      name: "闫泽华",
      imgURL:
        "https://upload.jianshu.io/users/upload_avatars/52841/251f5481-67b6-4bf0-86f4-faac9768beb3.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      contribution: "写了255.6k字",
      like: "4.7k喜欢",
    },
    {
      id: 2,
      name: "梅拾璎",
      imgURL:
        "https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      contribution: "写了259k字",
      like: "31.3k喜欢",
    },
    {
      id: 3,
      name: "茶点故事",
      imgURL:
        "https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      contribution: "写了744.8k字",
      like: "15.9k喜欢",
    },
    {
      id: 4,
      name: "木清琳",
      imgURL:
        "https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      contribution: "写了293.9k字 ",
      like: "3.4k喜欢",
    },
    {
      id: 5,
      name: "阿特otter",
      imgURL:
        "https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      contribution: "写了147.3k字",
      like: "603喜欢",
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

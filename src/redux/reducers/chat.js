const inetialstate = {
  user: {
    ID: 1,
    dp: `https://placeimg.com/50/50/people?${new Date().getTime()}`,
    name: "himalaya",
    status: "last seen 5 minutes ago",
  },
  chats: [
    {
      ID: 1,
      uid: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      media: {
        type: "image",
        src: `https://placeimg.com/640/480/animals`,
      },
    },
    {
      ID: 2,
      uid: 1,
      text: null,
      media: {
        type: "audio",
        src: "https://placeimg.com/audio.mp3",
      },
    },
    {
      ID: 3,
      uid: 1,
      text: null,
      media: {
        type: "video",
        poster: `https://placeimg.com/640/480/tech`,
        src: "https://placeimg.com/video.mp4",
      },
    },
    {
      ID: 4,
      uid: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting",
      media: null,
    },
    {
      ID: 5,
      uid: 1,
      text: "Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and ",
      media: {
        type: "video",
        poster: `https://placeimg.com/640/480/tech`,
        src: "https://placeimg.com/video.mp4",
      },
    },
  ],
};
const reducer = (state = inetialstate, action) => {
  switch (action.type) {
    case "send": {
      return {
        ...state,
        chats: [
          ...state.chats,
          { ID: 7, uid: 1, text: action.msg, media: null },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;

const inetialstate = {
  chats: [
    {
      sender: "8888888888",
      receiver: "8009594610",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      media: {
        type: "image",
        src: `https://placeimg.com/640/480/animals`,
      },
    },
    {
      sender: "8888888888",
      receiver: "8009594610",
      text: null,
      media: {
        type: "audio",
        src: "https://placeimg.com/audio.mp3",
      },
    },
    {
      sender: "8888888888",
      receiver: "8009594610",
      text: null,
      media: {
        type: "video",
        poster: `https://placeimg.com/640/480/tech`,
        src: "https://placeimg.com/video.mp4",
      },
    },
    {
      sender: "8888888888",
      receiver: "8009594610",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting",
      media: null,
    },
    {
      sender: "8888888888",
      receiver: "8009594610",
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
    case "syncdata": {
      return action.data;
    }
    case "send": {
      return {
        ...state,
        chats: [
          ...state.chats,
          {
            sender: action.sender,
            receiver: action.receiver,
            text: action.msg,
            media: null,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;

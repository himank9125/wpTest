import React from "react";

export default function ChatBubble(props) {
  const media = props.elm.media;

  let GetMedia = () => {
    if (media) {
      return (
        <div className={`media rel ${media.type}`}>
          {/************ Image ****************/}
          {media.type === "image" && (
            <div className={`rel poster`}>
              <div
                style={{ backgroundImage: `url(${media.src})` }}
                className={`photo`}
              ></div>
            </div>
          )}
          {/************ Video ****************/}
          {media.type === "video" && (
            <div className={"rel poster"}>
              <div
                style={{ backgroundImage: `url(${media.poster})` }}
                className={`photo`}
              ></div>
              <button className={`pp icon-play_arrow s24 abs abc`} />
            </div>
          )}
          {/************ Audio ****************/}
          {media.type === "audio" && (
            <div className={"rel audioplayer flex aic"}>
              <button className={`pp icon-play_arrow s24`} />
              <div className={`ctrls flex col`}>
                <div className={`slider rel`}>
                  <div className={`knob abs aby`}></div>
                </div>
                <div className={`abs extra flex aic`}>
                  <h2 className={`s11 c777 dur`}>00:15</h2>
                  <h2 className={`s11 c777 stmp`}>11:15 AM</h2>
                </div>
              </div>
              <div className={`udp`}>
                <img src="https://placeimg.com/50/50/people" alt="wp" />
              </div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };
  return (
    <div
      key={props.idx}
      className={`bubble flex rel ${props.dir === 0 ? "mine" : ""}`}
    >
      <div className={`ballon rel`}>
        {media?.type != "audio" && (
          <h2 className={`user s13 b`}>{props.elm.sender}</h2>
        )}
        {GetMedia()}
        {props.elm.text && <p className={`text s13`}>{props.elm.text}</p>}
        {media?.type != "audio" && (
          <h2 className={`stamp s12 abs c${props.elm.text ? 777 : "fff"}`}>
            03:22 AM
          </h2>
        )}
      </div>
    </div>
  );
}

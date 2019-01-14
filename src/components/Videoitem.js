import React from "react";
import "./style.css";
function Videoitem({ video, onVideoSelect }) {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
export default Videoitem;

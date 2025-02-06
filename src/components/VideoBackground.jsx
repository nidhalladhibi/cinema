import React from "react";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <iframe
        src="https://player.vimeo.com/video/315781345?background=1&autoplay=1&loop=1&muted=1"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Cinema Background"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
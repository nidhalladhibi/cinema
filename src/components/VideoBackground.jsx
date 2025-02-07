// import React from "react";

// const VideoBackground = () => {
//     return (
//         // <div className="video-background">
//         //   <iframe
//         //     src="https://player.vimeo.com/video/315781345?background=1&autoplay=1&loop=1&muted=1"
//         //     // src="https://www.youtube.com/embed/6Jg_rkKtJgo?si=Tv3BNdU1iSD99THj"
//         //     frameBorder="0"
//         //     allow="autoplay; fullscreen "
//         //     allowFullScreen
//         //     title="Cinema Background"
//         //   ></iframe>
//         // </div>
//         // <div >
//         <video src='netflix-intro.mp4' autoPlay muted loop style={{width: "100%", height: "100%", objectFit: "cover", opacity: '0.7'}} />
//         // </div>
//     );
// };

// export default VideoBackground;
import React from "react";

const VideoBackground = () => {
    return (
        <video 
            src='netflix-intro.mp4' 
            autoPlay 
            muted 
            loop 
            style={{width: "100%", height: "100%", objectFit: "cover", opacity: '0.7'}} 
        />
    );
};

export default VideoBackground;
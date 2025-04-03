"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

function VideoPlayer() {
  const playlist = [
    "https://www.youtube.com/watch?v=GmCuoujtDnk&ab_channel=SanidhyaTiwari",
    "https://www.youtube.com/watch?v=2n8qxhiMGRU&ab_channel=SanidhyaTiwari",
    "https://www.youtube.com/watch?v=_1lMEH2AbIs&ab_channel=SanidhyaTiwari",
    "https://www.youtube.com/watch?v=HyX0DFJAA9I&ab_channel=SanidhyaTiwari",
    "https://www.youtube.com/watch?v=UkAk8BueeDc&ab_channel=SanidhyaTiwari",
    "https://www.youtube.com/watch?v=ITFQH2Tafv4&ab_channel=SanidhyaTiwari",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEnded = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  return (
    <div className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700">
      {/* Aspect Ratio Wrapper */}
      <div className="relative pb-[56.25%]">
        {" "}
        {/* 16:9 Aspect Ratio */}
        <ReactPlayer
          url={playlist[currentIndex]}
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          volume={1}
          playbackRate={1.0}
          loop={false}
          muted={false}
          pip={false}
          light={false}
          onEnded={handleEnded}
        />
      </div>

      {/* Playlist Controls */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex justify-between items-center shadow-md">
        <button
          className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
            )
          }
        >
          Previous
        </button>
        <span className="text-gray-300 text-sm font-medium tracking-wide">
          Playing {currentIndex + 1} of {playlist.length}
        </span>
        <button
          className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;

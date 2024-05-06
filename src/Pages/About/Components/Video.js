import React from 'react'

import video from "../../../assets/video.mp4"

const Video = () => {
  return (
    <div>
        <video src={video} autoPlay loop muted></video>
    </div>
  )
}

export default Video
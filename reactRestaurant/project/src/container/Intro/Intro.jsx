import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video"
    onClick={() => {
      setPlayVideo(!playVideo);
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }}>
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted

      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center" >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} opacity = {0.2}/>
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} opacity = {0.8}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
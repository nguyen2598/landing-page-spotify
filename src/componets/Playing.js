import React, { useContext, useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Playing() {
    const {DataSongs,song,handleSetSong,handleSetIsplayAudio}=useContext(Songs)
    const handleClickNext=()=>{
      handleSetSong(song.id<DataSongs.length-1?song.id+1:0)
    }
    const audioRef = useRef(null);
    const [isplayAudio,setIsplayAudio]=useState(false)
    const handleClickPrev=()=>{
      handleSetSong(song.id>0?song.id-1:DataSongs.length-1)
    }

    // useEffect(()=>{
    //   handleSetIsplayAudio()
    // },[isplayAudio])
  return (
    <div>
      <AudioPlayer
        className="player-music"
        ref={audioRef}
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        onEnded={handleClickNext}
        onPlay={() => handleSetIsplayAudio(true)} 
        onPause={() => handleSetIsplayAudio(false)}
      />
    </div>
  );
}

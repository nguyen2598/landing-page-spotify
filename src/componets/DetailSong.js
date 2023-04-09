import React, { useContext, useEffect, useRef } from 'react';
import { Songs } from '../Context';

export default function DetailSong() {
    const { song, isplayAudio } = useContext(Songs);
    const cdThumb = useRef(null);
    const cdThumbAnimation = useRef(null);
    useEffect(() => {
        if (!cdThumbAnimation.current) {
            console.log(isplayAudio);

            cdThumbAnimation.current = cdThumb.current.animate(
                [
                    {
                        transform: 'rotate(360deg)',
                    },
                ],
                {
                    duration: 10000,
                    iterations: Infinity,
                },
            );
          }
          console.log(cdThumbAnimation);
          isplayAudio === true ? cdThumbAnimation.current.play() : cdThumbAnimation.current.pause();
    }, [isplayAudio]);
    return (
        <div className="col-span-1 p-3">
          {console.log('content')}
            <h2 className="text-cyan-500 font-bold center-text">Now playing</h2>
            <h2 className="text-neutral-400 text-2lx center-text">{song.name}</h2>
            <div className="w-[240px] m-auto mt-10  rounded-full overflow-hidden" ref={cdThumb}>
                <img className="w-full" src={song.links.images[0].url} />
            </div>
            <div className=" flex justify-evenly items-center ">
                {/* <img className="w-[70px] rounded-full overflow-hidden " src={song.links.images[1].url}  /> */}
                <span className="text-xl">{song.author}</span>
            </div>
        </div>
    );
}

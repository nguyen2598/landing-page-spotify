import React, { useContext, useEffect, useState } from 'react';
import { Songs } from '../Context';

export default function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    };
    useEffect(() => {
        setIdSong(song.id);
    }, [song]);
    // console.log(DataSongs);
    return (
        <div className="col-span-2 overflow-y-scroll scrollbar ">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="text-center">#</th>
                        <th className="text-left">Tiêu đề</th>
                        <th className="w-[10%] text-center">Ca sĩ</th>
                        <th className="w-[10%] text-center">
                            <i className="fa-solid fa-cloud-arrow-down"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr
                            style={{ marginBottom: '10px' }}
                            key={index}
                            className={`bg-slate-800 h-12 text-gray-400 hover:bg-slate-600   ${
                                idSong === song.id && 'text-teal-400 bg-slate-600'
                            }`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{song.id}</td>
                            <td className="items-center item-none m-w-o">
                                <img src={song.links.images[0].url} className="w-[50px] mr-10 " />
                                <span className="flex-grow hp-full">{song.name}</span>
                            </td>
                            <td className="text-center res-text">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>
                                    <i className="fa-regular fa-circle-down"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

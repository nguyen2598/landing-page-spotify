import { useState } from 'react';
import './App.css';
import { Songs } from './Context';
import DetailSong from './componets/DetailSong';
import ListSong from './componets/ListSong';
import Navbar from './componets/Navbar';
import Playing from './componets/Playing';

import DataSongs from './data/songs.json'
function App() {
  const [song,setSong]=useState(DataSongs[0])

const handleSetSong=(idSong)=>{
  const song =DataSongs.find(song=>song.id===idSong)
  setSong(song)
}

  return (
    <div className="App">
     <Songs.Provider value={{DataSongs,song,handleSetSong}}>
      <Navbar/>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-palyer'>
        <DetailSong/>
        <ListSong/>
      </div>
      <Playing/>
     </Songs.Provider>
    </div>
  );
}

export default App;

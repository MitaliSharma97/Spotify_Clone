import React, { useContext } from 'react'
import Sidebar from './component/Sidebar'
import Player from './component/Player'
import Display from './component/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const {audioRef,track} =useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
          <Sidebar />
          <Player />
          <Display/>
          <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
    </div>
  )
}

export default App



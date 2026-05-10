import React, { useState } from 'react'
import './App.scss'
import Dock from './component/dock'
import Navbar from './component/Navbar'
import Github from './component/window/Github'
import Note from './component/window/Note'
import Resume from './component/window/Resume'
import Spotify from './component/window/Spotify'
import Cli from './component/window/Cli'

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Navbar />
      {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
    </main>
  )
}

export default App

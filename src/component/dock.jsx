import React from 'react'
import "./dock.scss"

const Dock = ({ windowsState, setWindowsState }) => {
    const toggleWindow = (windowName) => {
        setWindowsState(state => ({ ...state, [windowName]: !state[windowName] }))
    }

    return (
        <footer className='dock' >
            <div
                onClick={() => toggleWindow('github')}
                className={`icon github ${windowsState.github ? 'active' : ''}`}>
                <img src="/doc-icon/github.svg" alt="GitHub" />
            </div>
            <div
                onClick={() => toggleWindow('note')}
                className={`icon note ${windowsState.note ? 'active' : ''}`}>
                <img src="/doc-icon/note.svg" alt="Note" />
            </div>
            <div
                onClick={() => toggleWindow('resume')}
                className={`icon pdf ${windowsState.resume ? 'active' : ''}`}>
                <img src="/doc-icon/pdf.svg" alt="Resume" />
            </div>
            <div
                onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
                className="icon calender">
                <img src="/doc-icon/calender.svg" alt="Calendar" />
            </div>
            <div
                onClick={() => toggleWindow('spotify')}
                className={`icon spotify ${windowsState.spotify ? 'active' : ''}`}>
                <img src="/doc-icon/spotify.svg" alt="Spotify" />
            </div>
            <div
                onClick={()=>{window.open("https://mail.google.com/mail/u/0/#inbox?compose=new","_blank")}}
                className="icon mail">
                <img src="/doc-icon/mail.svg" alt="Mail" />
            </div>
            <div 
                onClick={()=>{window.open("https://www.linkedin.com/in/ankur-prajapati-177542231/","_blank")}}
                className="icon link">
                <img src="/doc-icon/link.svg" alt="LinkedIn" />
            </div>
            <div
                onClick={() => toggleWindow('cli')}
                className={`icon cli ${windowsState.cli ? 'active' : ''}`}>
                <img src="/doc-icon/cli.svg" alt="CLI" />
            </div>
        </footer>
    )
}

export default Dock
import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({ children, windowName, setWindowsState, title = 'priyanshu - zsh' }) => {
  const handleClose = () => {
    if (windowName && setWindowsState) {
      setWindowsState(state => ({ ...state, [windowName]: false }))
    }
  }

  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 700,
        height: 550,
      }}
      style={{
        zIndex: 10
      }}
    >
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red" onClick={handleClose} title="Close"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>

                <div className="title"><p>{title}</p></div>

            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow

import React, { useState, useRef, useEffect } from 'react'
import MacWindow from './MacWindow'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const [output, setOutput] = useState([
        "╔════════════════════════════════════════╗",
        "║     Welcome to My Portfolio CLI!       ║",
        "╚════════════════════════════════════════╝",
        "",
        "Type 'help' to see all available commands",
        ""
    ])
    const [input, setInput] = useState('')
    const outputRef = useRef(null)

    const commands = {
        help: {
            description: 'Show all available commands',
            fn: () => [
                "Available commands:",
                "  about    - Learn about me",
                "  skills   - View my technical skills",
                "  projects - Check out my work",
                "  contact  - Get in touch",
                "  github   - Open GitHub profile",
                "  social   - View social media links",
                "  resume   - Download resume",
                "  clear    - Clear terminal",
                "  echo     - Echo a passed string"
            ]
        },
        about: {
            description: 'About me',
            fn: () => ['I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.']
        },
        skills: {
            description: 'List technical skills',
            fn: () => [
                "Frontend: React, Sass, HTML/CSS",
                "Backend: Node.js, Express",
                "Databases: MongoDB",
                "Tools: Git, Webpack, Vite"
            ]
        },
        projects: {
            description: 'View my projects',
            fn: () => [
                "1. Portfolio Website - React + Vite",
                "2. E-commerce Platform - MERN Stack",
                "3. Task Management App - Next.js",
                "4. Real-time Chat App - Socket.io",
                "5. Data Dashboard - React + Chart.js"
            ]
        },
        contact: {
            description: 'Get contact information',
            fn: () => [
                "Email: ompriyanshu12@gmail.com",
                "Phone: 9436452584",
                "Location: Bhopal, MP"
            ]
        },
        github: {
            description: 'Open GitHub profile',
            fn: () => {
                window.open('https://github.com/priyanshulink', '_blank')
                return ['Opening GitHub...']
            }
        },
        resume: {
            description: 'Download resume',
            fn: () => {
                const link = document.createElement('a')
                link.href = '/resume.pdf'
                link.download = 'Priyanshu_Singh_Resume.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                return ['Resume downloaded successfully! ✓']
            }
        },
        social: {
            description: 'View social media links',
            fn: () => [
                "Twitter: @Priyans15649068",
                "LinkedIn: /in/priyanshu-singh-188715290"
            ]
        },
        clear: {
            description: 'Clear terminal',
            fn: () => {
                setOutput([])
                return []
            }
        },
        echo: {
            description: 'Echo a passed string',
            fn: (args) => [args.slice(1).join(' ') || 'echo']
        }
    }

    const handleCommand = (e) => {
        if (e.key !== 'Enter') return

        const cmd = input.trim()
        if (!cmd) return

        const newOutput = [...output, `$ ${cmd}`]
        const [command, ...args] = cmd.split(' ')
        
        if (commands[command]) {
            const result = commands[command].fn(cmd)
            newOutput.push(...(Array.isArray(result) ? result : [result]))
        } else if (cmd) {
            newOutput.push(`Command not found: ${command}`)
        }
        
        newOutput.push('')
        setOutput(newOutput)
        setInput('')
    }

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight
        }
    }, [output])

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
            <div className="cli-window">
                <div className="cli-output" ref={outputRef}>
                    {output.map((line, idx) => (
                        <div key={idx} className="cli-line">{line}</div>
                    ))}
                </div>
                <div className="cli-input-line">
                    <span className="cli-prompt">$ </span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="cli-input"
                        autoFocus
                    />
                </div>
            </div>
        </MacWindow>
    )
}

export default Cli
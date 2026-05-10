import React from 'react'
import githubData from "../../assets/github.json"
import MacWindow from './MacWindow'
import "./github.scss"

const Github = ({ windowName, setWindowsState }) => {
    const { profile, readme, pinnedRepositories } = githubData

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="github-container">
                {/* Left Sidebar */}
                <aside className="sidebar">
                    <div className="profile-card">
                        <img src={profile.avatar} alt="profile" className="avatar" />
                        <h2 className="name">{profile.name}</h2>
                        <p className="username">@{profile.username}</p>
                        <p className="bio">{profile.bio}</p>

                        <div className="stats">
                            <div className="stat">
                                <strong>{profile.followers}</strong>
                                <span>followers</span>
                            </div>
                            <div className="stat">
                                <strong>{profile.following}</strong>
                                <span>following</span>
                            </div>
                        </div>

                        <div className="info">
                            <p><span className="icon"></span> {profile.location}</p>
                            <p><span className="icon email-icon">✉️</span> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
                            <p><span className="icon linkedin-icon">in</span> <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">{profile.socials.linkedin.split('/').filter(x => x).pop()}</a></p>
                            <p><span className="icon">𝕏</span> <a href={`https://twitter.com/${profile.socials.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer">{profile.socials.twitter}</a></p>
                            <p><span className="icon instagram-icon">📷</span> <a href={`https://instagram.com/${profile.socials.instagram}`} target="_blank" rel="noopener noreferrer">{profile.socials.instagram}</a></p>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    {/* README Section */}
                    <section className="readme-section">
                        <div className="readme-header">
                            <span className="file-name">priyanshulink / README.md</span>
                        </div>
                        <h1>{readme.title}</h1>
                        <p className="subtitle">{readme.subtitle}</p>
                        <hr />
                    </section>

                    {/* About Me Section */}
                    <section className="about-section">
                        <h2>About Me</h2>
                        <ul>
                            {readme.about.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <hr />
                    </section>

                    {/* Connect Section */}
                    <section className="connect-section">
                        <h2>Connect with Me</h2>
                        <ul>
                            <li>Email: <a href={`mailto:${readme.contact.email}`}>{readme.contact.email}</a></li>
                            <li>LinkedIn: <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">{readme.contact.linkedin}</a></li>
                        </ul>
                        <hr />
                    </section>

                    {/* Repositories Section */}
                    <section className="pinned-section">
                        <div className="pinned-header">
                            <h2>Repositories</h2>
                        </div>
                        <div className="repos-grid">
                            {pinnedRepositories.map((repo, idx) => (
                                <div key={idx} className="repo-card">
                                    <div className="repo-header">
                                        <h3>{repo.name}</h3>
                                        <span className="visibility">{repo.visibility}</span>
                                    </div>
                                    {repo.description && <p>{repo.description}</p>}
                                    <div className="repo-footer">
                                        <span className="language">${repo.language}</span>
                                        {repo.stars > 0 && <span className="stars">{repo.stars}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </MacWindow>
    )
}

export default Github
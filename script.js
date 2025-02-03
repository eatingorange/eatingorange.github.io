const { useState } = React;

function Website() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div className={`container ${isDark ? 'dark-mode' : ''}`}>
            <button onClick={toggleTheme} className="theme-toggle">
                <img 
                    src={isDark ? "icons/sun-lightmode.png" : "icons/moon-darkmode.png"} 
                    alt={isDark ? "Light mode" : "Dark mode"} 
                    className="theme-icon" 
                />
            </button>

            <img src="images/shimapic.jpg" alt="shimapic" className="main-image" />
            <a href="#" className="title">daniel yang</a>
            
            <div className="description">
                <p>mathematics/financial analysis & risk management @ uw</p>
                <p><a href="mailto:danielcyang26@gmail.com">contact me</a></p>
            </div>
            
            <div className="social-links">
                <a href="https://www.linkedin.com/in/danchuyang/">
                    <img src="icons/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/eatingorange">
                    <img src="icons/github icon.svg" alt="GitHub" className="social-icon" />
                </a>
                <a href="mailto:danielcyang26@gmail.com">
                    <img src="icons/email-icon.svg" alt="Email" className="social-icon" />
                </a>
            </div>
            
            <div className="button-container">
                <a href="images/resume.jpg" className="button">archive</a>
                <a href="images/resume.jpg" className="button">projects</a>
                <a href="images/resume.jpg" className="button">resume</a>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Website />);

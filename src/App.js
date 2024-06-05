import React, { useState } from 'react';
import Timer from './components/Timer';
import Settings from './components/Settings';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeProvider from './contexts/ThemeContext';
import TimerProvider from './contexts/TimerContext';
import LanguageProvider from './contexts/LanguageContext';
import './styles/main.scss';

function App() {
    const [settingsVisible, setSettingsVisible] = useState(false);

    const toggleSettings = () => {
        setSettingsVisible(!settingsVisible);
    };

    return (
        <ThemeProvider>
            <TimerProvider>
                <LanguageProvider>
                    <div className="container">
                        <button className="settings-button" onClick={toggleSettings}>⚙</button>
                        <ThemeSwitcher />
                        <Timer />
                        <div className={`settings-container ${settingsVisible ? 'visible' : 'hidden'}`}>
                            <Settings />
                        </div>
                    </div>
                </LanguageProvider>
            </TimerProvider>
        </ThemeProvider>
    );
}

export default App;

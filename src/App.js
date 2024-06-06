import React, { useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import Timer from './components/Timer';
import Settings from './components/Settings';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeProvider from './contexts/ThemeContext';
import TimerProvider from './contexts/TimerContext';
import LanguageProvider from './contexts/LanguageContext';
import './styles/main.scss';

function App() {
    const [settingsVisible, setSettingsVisible] = useState(false);
    const [settingsClass, setSettingsClass] = useState('hidden');

    const toggleSettings = () => {
        if (settingsVisible) {
            setSettingsClass('hidden');
            setTimeout(() => setSettingsVisible(false), 500); // Время должно соответствовать времени анимации
        } else {
            setSettingsVisible(true);
            setTimeout(() => setSettingsClass('visible'), 10); // Небольшая задержка для запуска анимации
        }
    };

    useEffect(() => {
        if (settingsVisible) {
            setSettingsClass('visible');
        } else {
            setSettingsClass('hidden');
        }
    }, [settingsVisible]);

    return (
        <ThemeProvider>
            <TimerProvider>
                <LanguageProvider>
                    <div className="container">
                        <button className="icon-button settings-button" onClick={toggleSettings}>
                            <FiSettings />
                        </button>
                        <ThemeSwitcher />
                        <Timer />
                        {settingsVisible && (
                            <div className={`settings-container ${settingsClass}`}>
                                <Settings />
                            </div>
                        )}
                    </div>
                </LanguageProvider>
            </TimerProvider>
        </ThemeProvider>
    );
}

export default App;

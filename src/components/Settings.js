import React, { useState, useContext } from 'react';
import { TimerContext } from '../contexts/TimerContext';
import { LanguageContext } from '../contexts/LanguageContext';
import './Settings.scss';

const Settings = () => {
    const { workTime, breakTime, setWorkTime, setBreakTime, enableSound, setEnableSound, enableBrowserNotification, setEnableBrowserNotification } = useContext(TimerContext);
    const { language, setLanguage, translate } = useContext(LanguageContext);
    const [newWorkTime, setNewWorkTime] = useState(workTime / 60);
    const [newBreakTime, setNewBreakTime] = useState(breakTime / 60);

    const handleSave = () => {
        setWorkTime(newWorkTime * 60);
        setBreakTime(newBreakTime * 60);
    };

    return (
        <div className="settings">
            <h2>{translate('settings')}</h2>
            <div className="setting-item">
                <label>{translate('workTime')}</label>
                <input
                    type="number"
                    value={newWorkTime}
                    onChange={(e) => setNewWorkTime(e.target.value)}
                />
            </div>
            <div className="setting-item">
                <label>{translate('breakTime')}</label>
                <input
                    type="number"
                    value={newBreakTime}
                    onChange={(e) => setNewBreakTime(e.target.value)}
                />
            </div>
            <div className="setting-item">
                <label>
                    <input
                        type="checkbox"
                        checked={enableSound}
                        onChange={() => setEnableSound(!enableSound)}
                    />
                    {translate('enableSound')}
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input
                        type="checkbox"
                        checked={enableBrowserNotification}
                        onChange={() => setEnableBrowserNotification(!enableBrowserNotification)}
                    />
                    {translate('enableBrowserNotification')}
                </label>
            </div>
            <div className="setting-item">
                <label>{translate('language')}</label>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                </select>
            </div>
            <button className="save-button" onClick={handleSave}>
                {translate('save')}
            </button>
        </div>
    );
};

export default Settings;

import React, { useState, useContext } from 'react';
import { TimerContext } from '../contexts/TimerContext';
import { LanguageContext } from '../contexts/LanguageContext';

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
            <div>
                <label>
                    {translate('workTime')}:
                    <input
                        type="number"
                        value={newWorkTime}
                        onChange={(e) => setNewWorkTime(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    {translate('breakTime')}:
                    <input
                        type="number"
                        value={newBreakTime}
                        onChange={(e) => setNewBreakTime(e.target.value)}
                    />
                </label>
            </div>
            <div className="settings-options">
                <label>
                    <input type="checkbox" checked={enableSound} onChange={() => setEnableSound(!enableSound)} />
                    {translate('enableSound')}
                </label>
                <label>
                    <input type="checkbox" checked={enableBrowserNotification} onChange={() => setEnableBrowserNotification(!enableBrowserNotification)} />
                    {translate('enableBrowserNotification')}
                </label>
            </div>
            <div>
                <label>
                    {translate('language')}:
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                    </select>
                </label>
            </div>
            <button onClick={handleSave}>{translate('save')}</button>
        </div>
    );
};

export default Settings;

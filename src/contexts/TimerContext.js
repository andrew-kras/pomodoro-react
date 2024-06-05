import React, { createContext, useState } from 'react';

export const TimerContext = createContext();

const TimerProvider = ({ children }) => {
    const [workTime, setWorkTime] = useState(1500); // Default 25 minutes
    const [breakTime, setBreakTime] = useState(300); // Default 5 minutes
    const [enableSound, setEnableSound] = useState(true);
    const [enableBrowserNotification, setEnableBrowserNotification] = useState(true);

    return (
        <TimerContext.Provider value={{
            workTime,
            breakTime,
            setWorkTime,
            setBreakTime,
            enableSound,
            setEnableSound,
            enableBrowserNotification,
            setEnableBrowserNotification
        }}>
            {children}
        </TimerContext.Provider>
    );
};

export default TimerProvider;

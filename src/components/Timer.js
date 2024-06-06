import React, { useState, useEffect, useContext } from 'react';
import Notification from './Notification';
import { TimerContext } from '../contexts/TimerContext';
import { LanguageContext } from '../contexts/LanguageContext';
import './Timer.scss';

const Timer = () => {
    const { workTime, breakTime, enableSound, enableBrowserNotification } = useContext(TimerContext);
    const { translate } = useContext(LanguageContext);
    const [time, setTime] = useState(workTime);
    const [isActive, setIsActive] = useState(false);
    const [isWork, setIsWork] = useState(true);
    const [notificationMessage, setNotificationMessage] = useState('');
    const audio = new Audio(process.env.PUBLIC_URL + '/sound.wav'); // Correct path to sound file

    useEffect(() => {
        setTime(isWork ? workTime : breakTime);
    }, [workTime, breakTime, isWork]);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        if (time === 0) {
            clearInterval(interval);
            if (enableSound) audio.play().catch(error => console.error(error));
            if (enableBrowserNotification) {
                setNotificationMessage(isWork ? translate('workTimeNotification') + ' ' + translate('isUp') : translate('breakTimeNotification') + ' ' + translate('isUp'));
            }
            setIsWork(!isWork);
            setTime(isWork ? breakTime : workTime);
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, time, isWork, workTime, breakTime, audio, enableSound, enableBrowserNotification, translate]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(isWork ? workTime : breakTime);
    };

    const switchMode = () => {
        setIsActive(false);
        setIsWork(!isWork);
        setTime(!isWork ? workTime : breakTime);
    };

    const progress = ((isWork ? workTime - time : breakTime - time) / (isWork ? workTime : breakTime)) * 100;

    return (
        <div className="timer">
            <div className="time-display">{Math.floor(time / 60)}:{('0' + time % 60).slice(-2)}</div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="controls">
                <button onClick={toggleTimer}>{isActive ? translate('pause') : translate('start')}</button>
                <button onClick={resetTimer}>{translate('reset')}</button>
                <button onClick={switchMode}>{translate('switchTo')} {isWork ? translate('break') : translate('work')}</button>
            </div>
            <Notification message={notificationMessage} />
        </div>
    );
};

export default Timer;

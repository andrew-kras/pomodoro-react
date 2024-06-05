import React, { useEffect } from 'react';

const NotificationComponent = ({ message }) => {
    useEffect(() => {
        const showNotification = async () => {
            if (!("Notification" in window)) {
                console.error("This browser does not support desktop notification");
                return;
            }

            if (message) {
                if (Notification.permission === 'granted') {
                    new Notification(message);
                } else if (Notification.permission !== 'denied') {
                    try {
                        const permission = await Notification.requestPermission();
                        if (permission === 'granted') {
                            new Notification(message);
                        }
                    } catch (error) {
                        console.error("Notification permission request error:", error);
                    }
                }
            }
        };

        showNotification();
    }, [message]);

    return null;
};

export default NotificationComponent;

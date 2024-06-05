import React, { createContext, useState, useEffect } from 'react';
import translations from '../translations';

export const LanguageContext = createContext();

const getBrowserLanguage = () => {
    const defaultLanguage = 'en';
    const browserLanguage = navigator.language || navigator.languages[0];
    if (browserLanguage.startsWith('ru')) {
        return 'ru';
    } else if (browserLanguage.startsWith('en')) {
        return 'en';
    }
    return defaultLanguage;
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getBrowserLanguage);

    const translate = (key) => translations[language][key] || key;

    useEffect(() => {
        setLanguage(getBrowserLanguage());
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;

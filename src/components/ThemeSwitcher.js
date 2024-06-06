import React, { useContext } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';  // Иконки для переключения темы
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeSwitcher.scss';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="icon-button theme-button" onClick={toggleTheme}>
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
        </button>
    );
};

export default ThemeSwitcher;

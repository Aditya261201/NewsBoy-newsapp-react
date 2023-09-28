import React from 'react'
import { useTheme } from '../ThemeContext';


export const Toggler = () => {
    const { theme , toggleTheme } = useTheme();
    return (
        <>
            <div className="form-check form-switch">
                <label className={theme === "light" ? "form-check-label text-white" : "form-check-label text-black"} htmlForfor="flexSwitchCheckChecked">Darkmode</label>
                <input className="form-check-input" checked={theme === "light"} onChange={toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
        </>
    )
}



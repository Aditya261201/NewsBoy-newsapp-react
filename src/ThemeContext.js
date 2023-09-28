import React, { createContext, useState, useContext } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    function toggleTheme() {
        if (theme === "dark") {
            setTheme("light");
            console.log("light theme");
        }
        else if (theme === "light") {
            setTheme("dark");
            console.log("dark theme");
        }
    }
    return (
        // passing theme and toggletheme function to ThemecontextProvider
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};
// using context themecontext and exporting it has useTheme
export const useTheme = () => useContext(ThemeContext);

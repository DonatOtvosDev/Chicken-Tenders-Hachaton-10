import React, { createContext, useContext } from "react";

import { colors } from "../assets/colors.js";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const theme = {
        colors,
        iconTheme: {
            height: 150,
            width: 150,
        }
    }

    return (
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext);
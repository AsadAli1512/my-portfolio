import { createContext } from "react";

// The context object lives alone so that ThemeContext.jsx exports only a
// component, which is what React Fast Refresh requires.
export const ThemeContext = createContext({ isDark: false, toggle: () => {} });

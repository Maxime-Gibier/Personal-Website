import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [lightMode, setLightMode] = useState(true);

	useEffect(() => {
		const html = document.getElementById("html");
		html.classList.remove(!lightMode ? "bg-bgd-light" : "bg-bgd-dark");
		html.classList.add(lightMode ? "bg-bgd-light" : "bg-bgd-dark");
	}, [lightMode]);

	const toggleTheme = () => {
		if (lightMode) {
			setLightMode(false);
			return;
		}
		setLightMode(true);
	};

	return (
		<ThemeContext.Provider value={{ lightMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;

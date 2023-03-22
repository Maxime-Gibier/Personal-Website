import { createContext, useState } from "react";

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
	const [french, setFrench] = useState(true);

	const toggleLanguage = () => {
		if (french) {
			setFrench(false);
			return;
		}
		setFrench(true);
	};

	return (
		<LanguageContext.Provider value={{ french, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export default LanguageProvider;

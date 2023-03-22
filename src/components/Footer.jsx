import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
	const { lightMode } = useContext(ThemeContext);
	const { french } = useContext(LanguageContext);

	return (
		<div
			className={
				(lightMode ? "text-black " : "text-white ") +
				"w-full flex flex-col items-center justify-center mt-[30px] pb-[15px] z-40"
			}
		>
			<span className="w-4/6 flex justify-around">
				<Link to="/mentions-légales" className="font-title text-xs z-40">
					{french ? "Mentions Légales" : "Legal Notice"}
				</Link>
				<a
					href="mailto:maxime.gibier@icloud.com"
					className="font-title text-xs z-40"
				>
					{french ? "Me contacter" : "contact me"}
				</a>
			</span>
			<p className="font-text text-sm pt-[10px]">
				{french
					? "Développé avec React et TailwindCSS"
					: "Developped with React and TailwindCSS"}
			</p>
		</div>
	);
};

export default Footer;

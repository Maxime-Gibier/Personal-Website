import React, { useContext, useState } from "react";
import { FiGithub, FiMail } from "react-icons/fi";
import {
	RiMoonClearLine,
	RiSunLine,
	RiMenuLine,
	RiCloseFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
	const [menuOn, setMenuOn] = useState(false);
	const { lightMode, toggleTheme } = useContext(ThemeContext);
	const { french, toggleLanguage } = useContext(LanguageContext);

	const toggleMenu = () => {
		if (menuOn) {
			setMenuOn(false);
			return;
		}
		setMenuOn(true);
	};
	return (
		<div className="">
			<div className="hidden tablet:flex w-screen justify-between mt-6 fixed top-0 left-0 font-title z-30 px-8">
				<Link
					to="/"
					href="https://www.maxime-gibier.fr"
					className={(lightMode ? "text-black " : "text-white ") + "z-30"}
				>
					<h2>Maxime</h2>
				</Link>
				<span
					className={
						(lightMode ? " text-black " : " text-white ") +
						"flex flex-col items-center"
					}
				>
					<button onClick={toggleLanguage} className="pb-4">
						{french ? "EN." : "FR."}
					</button>
					<button onClick={toggleTheme} className="py-4">
						{lightMode ? (
							<RiMoonClearLine size={30} />
						) : (
							<RiSunLine size={30} />
						)}
					</button>
				</span>
			</div>

			<div
				className={
					(lightMode ? " text-black " : " text-white ") +
					"tablet:hidden flex w-screen fixed justify-end z-20"
				}
			>
				<button
					onClick={toggleMenu}
					className={
						(lightMode ? "bg-bgd-light " : "bg-bgd-dark ") +
						"p-4 z-50 rounded-bl-[15px] transition duration-300"
					}
				>
					{menuOn ? <RiCloseFill size={24} /> : <RiMenuLine size={24} />}
				</button>

				<div
					className={
						(menuOn ? (lightMode ? "bg-bgd-light " : "bg-bgd-dark ") : "") +
						(menuOn ? "translate-x-0 " : "translate-x-full ") +
						"w-screen fixed top-0 left-0 transition duration-300"
					}
				>
					<div
						className={
							(lightMode ? "text-black " : "text-white ") +
							"w-full flex justify-between items-center font-title z-30 p-4 pl-8 pr-24"
						}
					>
						<Link to="/" href="https://www.maxime-gibier.fr" className="z-30">
							<h2>Maxime</h2>
						</Link>

						<button onClick={toggleLanguage}>{french ? "EN." : "FR."}</button>
						<button onClick={toggleTheme}>
							{lightMode ? (
								<RiMoonClearLine size={24} />
							) : (
								<RiSunLine size={24} />
							)}
						</button>
					</div>
					<hr className="m-auto w-2/3" />

					<ul
						className={
							(lightMode ? "text-black " : "text-white ") +
							"w-full flex justify-between items-center z-20 p-4 pl-8 pr-24"
						}
					>
						<li className="">
							<a
								className="flex justify-between items-center w-full"
								href="mailto:maxime.gibier@icloud.com"
							>
								<FiMail size={24} />
							</a>
						</li>
						<li className="">
							<a
								className="flex justify-between items-center w-full font-title"
								href="https://www.linkedin.com/in/maxime-gibier/"
								target="_blank"
								rel="noopener noreferrer"
							>
								IN.
							</a>
						</li>
						<li className="">
							<a
								className="flex justify-between items-center w-full"
								href="https://github.com/Maxime-Gibier"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FiGithub size={24} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;

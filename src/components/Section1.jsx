import React, { useContext } from "react";
import Photo_maxime from "../assets/img/Photo_maxime.png";
import { BsMouse } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const Section1 = () => {
	const { lightMode } = useContext(ThemeContext);
	const { french } = useContext(LanguageContext);

	return (
		<div
			className={
				(lightMode ? " text-black " : " text-white ") +
				"h-screen/2 tablet:h-screen overflow-hidden 2xl:overflow-x-visible"
			}
		>
			<div className="h-screen/2 tablet:h-screen flex justify-center items-center z-10">
				<div className=" w-4/6 flex flex-col items-end z-10">
					<h2 className="font-title">WEB DEVELOPER</h2>
					<span>
						<h1 className="font-title text-3xl desktop:text-4xl leading-3xl desktop:leading-4xl">
							GIBIER
							<br />
							&nbsp;Maxime
						</h1>
					</span>
					<a
						href="mailto:maxime.gibier@icloud.com"
						className={
							(lightMode ? " bg-black text-white " : " bg-white text-black ") +
							"w-40 font-title text-xs text-center leading-xs rounded-[10px] tablet:rounded-[15px] py-4 z-10"
						}
					>
						{french ? "Me contacter" : "Contact Me"}
					</a>
				</div>
				<span className="w-2/6 h-screen/2 tablet:h-screen flex items-end z-10 pl-8">
					<img
						src={Photo_maxime}
						alt="Maxime"
						className="desktop:w-5/6 w-full pr-4 h-auto drop-shadow-[9px_14px_15px_rgba(0,0,0,0.25)]"
					/>
				</span>
			</div>
			<a href="#about">
				<BsMouse className="h-[35px] w-[30px] relative left-1/2 bottom-[70px] z-10" />
			</a>
			<span className="flex justify-end">
				<div
					className={
						(lightMode ? " bg-gradient-light " : " bg-gradient-dark ") +
						"h-[290px] w-[290px] tablet:h-[700px] tablet:w-[700px] desktop:h-[900px] desktop:w-[900px] rounded-round relative bottom-[230px] tablet:bottom-[600px] desktop:bottom-[690px] left-1/3 tablet:left-1/5 desktop:left-1/4 z-0"
					}
				></div>
			</span>
		</div>
	);
};

export default Section1;

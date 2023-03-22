import React, { useContext } from "react";
import {
	TbBrandHtml5,
	TbBrandJavascript,
	TbBrandCss3,
	TbBrandReactNative,
	TbBrandPhp,
	TbBrandFigma,
} from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { DiPhotoshop } from "react-icons/di";
import { FaWordpressSimple } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const Skills = () => {
	const { lightMode } = useContext(ThemeContext);
	const { french } = useContext(LanguageContext);

	return (
		<div
			className={
				(lightMode ? "text-black " : "text-white ") +
				"overflow-hidden h-screen2/3 tablet:h-extra"
			}
		>
			<div className="flex flex-col items-center mx-8 tablet:mx-[180px] z-10">
				<hr
					className={
						(lightMode ? "border-black" : "border-white") +
						" border-t w-4/5 mb-8 mt-[20px] z-10"
					}
				></hr>
				<div className="flex flex-col items-center">
					<h2 className="font-title text-2xl mb-8 z-10">
						{french ? "COMPETENCES" : " skills"}
					</h2>
				</div>
				<div className="w-full h-104 flex flex-col desktop:flex-wrap desktop:flex-row items-center justify-between items-between z-10">
					<span className="flex flex-col items-center w-full desktop:w-6/12">
						<h3 className="font-title text-xl">FRONT-END</h3>
						<ul className="w-full tablet:w-2/3 flex justify-around tablet:justify-between font-title text-xs">
							<li className="flex flex-col items-center">
								<TbBrandReactNative className="w-[50px] h-[50px]" />
								REACT
							</li>
							<li className="flex flex-col items-center">
								<span className="flex">
									<TbBrandHtml5 className="w-[50px] h-[50px]" />
									<TbBrandCss3 className="w-[50px] h-[50px]" />
								</span>
								HTML/CSS
							</li>
							<li className="flex flex-col items-center">
								<TbBrandJavascript className="w-[50px] h-[50px]" />
								JAVASCRIPT
							</li>
						</ul>
					</span>
					<span className="flex flex-col items-center w-full desktop:w-6/12">
						<h3 className="font-title text-xl">BACK-END</h3>
						<ul className="w-full tablet:w-2/3 flex justify-around font-title text-xs">
							<li className="flex flex-col items-center">
								<IoLogoNodejs className="w-[50px] h-[50px]" />
								NODE JS
							</li>
							<li className="flex flex-col items-center">
								<TbBrandPhp className="w-[50px] h-[50px]" />
								PHP
							</li>
						</ul>
					</span>
					<span className="flex flex-col items-center w-full desktop:w-6/12">
						<h3 className="font-title text-xl">
							{french ? "LOGICIELS" : "SOFTWARE"}
						</h3>
						<ul className="w-full tablet:w-2/3 flex justify-around tablet:justify-between font-title text-xs">
							<li className="flex flex-col items-center">
								<TbBrandFigma className="w-[50px] h-[50px]" />
								FIGMA
							</li>
							<li className="flex flex-col items-center">
								<FaWordpressSimple className="w-[50px] h-[50px]" />
								WORDPRESS
							</li>
							<li className="flex flex-col items-center">
								<DiPhotoshop className="w-[50px] h-[50px]" />
								PHOTSHOP
							</li>
						</ul>
					</span>
				</div>
			</div>
			<span className="flex justify-between">
				<div
					className={
						(lightMode ? " bg-gradient-light " : " bg-gradient-dark ") +
						"w-16 h-16 rounded-round relative bottom-52 left-48 z-0"
					}
				></div>
				<div
					className={
						(lightMode ? " bg-gradient-light " : " bg-gradient-dark ") +
						"w-48 h-48 rounded-round relative bottom-120 right-20 z-0"
					}
				></div>
			</span>
		</div>
	);
};

export default Skills;

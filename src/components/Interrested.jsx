import React, { useContext } from "react";
import CV_light_image from "../assets/img/CV_Maxime-Gibier.png";
import CV_dark_image from "../assets/img/CV_Maxime-Gibier_Dark.png";
import CV_light from "../assets/Download/CV_Maxime-Gibier.pdf";
import CV_dark from "../assets/Download/CV_Maxime-Gibier_Dark.pdf";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const Interrested = () => {
	const { lightMode } = useContext(ThemeContext);
	const { french } = useContext(LanguageContext);

	return (
		<div className="overflow-hidden h-screen2/3 tablet:h-extra">
			<div
				className={
					(lightMode ? "text-black " : "text-white ") +
					"h-full flex flex-col items-center mx-8 tablet:mx-28"
				}
			>
				<hr
					className={
						(lightMode ? "border-black" : "border-white") +
						" border-t w-4/5 mb-8"
					}
				></hr>
				<h2 className="font-title text-2xl text-center mb-8 w-2/3 desktop:w-full">
					{french ? "Intéressé par mon profil ?" : "Interested in my profile ?"}
				</h2>
				<div className="w-full flex justify-around h-full z-10">
					<span className="h-5/6 w-1/2 flex flex-col items-center justify-around">
						<h3 className="font-title">
							{french ? "Télécharger mon cv" : "Download my cv"}
						</h3>
						<img
							src={lightMode ? CV_light_image : CV_dark_image}
							alt="CV"
							className={
								(lightMode ? "border-black " : "border-white ") +
								"h-64 border mb-0.5"
							}
						/>
						<a
							href={lightMode ? CV_light : CV_dark}
							download
							className={
								(lightMode
									? " bg-black text-white "
									: " bg-white text-black ") +
								"w-40 text-center font-title text-xs rounded-[10px] tablet:rounded-[15px] leading-xs py-4"
							}
						>
							{french ? "Télécharger" : "Download"}
						</a>
					</span>
					<span className="h-full w-1/2 flex flex-col items-center justify-center">
						<p className="font-text text-center w-full mb-8">
							{french
								? "Si vous avez une question ou si mon profil vous intérresse n’hésitez pas à me contacter"
								: "If you have a question or if you are interested in my profile, do not hesitate to contact me"}
						</p>
						<a
							href="mailto:maxime.gibier@icloud.com"
							className={
								(lightMode
									? " bg-black text-white "
									: " bg-white text-black ") +
								"w-40 text-center font-title text-xs py-4 rounded-[10px] tablet:rounded-[15px] leading-xs"
							}
						>
							{french ? "Me contacter" : "Contact me"}
						</a>
					</span>
				</div>
			</div>
			<div
				className={
					(lightMode ? " bg-gradient-light " : " bg-gradient-dark ") +
					"w-52 h-52 rounded-round relative bottom-60 left-20 z-0 "
				}
			></div>
		</div>
	);
};

export default Interrested;

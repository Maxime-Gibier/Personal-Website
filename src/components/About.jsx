import React, { useContext } from "react";
import WSF from "../assets/img/LOGO_WSF.png";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
	const { lightMode } = useContext(ThemeContext);
	const { french } = useContext(LanguageContext);

	return (
		<div
			className={
				(lightMode ? "text-black " : "text-white ") +
				"overflow-hidden h-screen3/5 tablet:h-screen"
			}
			id="about"
		>
			<div className="flex flex-col items-center mt-8">
				<h2 className="font-title text-2xl mb-8 z-10">
					{french ? "A propos de moi" : "About me"}
				</h2>
				<span className="w-screen flex justify-between items-center px-8 laptop:px-32 z-10">
					<img
						src={WSF}
						alt="WSF"
						className={
							(lightMode ? "" : " border border-white ") +
							"h-24 w-24 mt-12 tablet:mt-32"
						}
					/>
					<p className="w-4/6 font-text text-xs text-justify">
						{french
							? "Je suis un étudiant de 3e année en management du digital à La Web School Factory. Je suis spécialisé dans le développement web. Durant ces 3 années, j’ai pu effectuer différents projets qui m’ont permis d’améliorer mon travail en équipe ainsi que de mettre en place les différentes méthodologies apprises afin de mener à bien ces projets."
							: "I am a 3rd year student in digital management at La Web School Factory. I am specialised in web development. During these 3 years, I was able to carry out different projects that allowed me to improve my teamwork as well as to put in place the different methodologies I learned in order to successfully complete these projects."}
					</p>
				</span>
				<p className="w-4/6 desktop:w-3/6 h-36 font-text text-xs text-justify px-8 mt-8 tablet:ml-24 z-10">
					{french
						? "J’aime bien le sport et les jeux vidéo, ce qui me plais le plus dans ça, c’est la compétition, avec les autres, mais surtout avec moi-même. Lorsque je me passionne pour quelque chose, je me donne à fond et j’éssaye de devenir le meilleur possible."
						: "I like sports and video games, and what I like most about them is the competition, with others, but especially with myself. When I'm passionate about something, I give it my all and try to be the best I can be."}
				</p>
			</div>
			<div
				className={
					(lightMode ? " bg-gradient-light " : " bg-gradient-dark ") +
					"w-80 h-80 rounded-round relative bottom-96 right-52 tablet:right-40 z-0"
				}
			></div>
		</div>
	);
};

export default About;

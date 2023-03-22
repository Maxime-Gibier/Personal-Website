import React, { useContext } from "react";
import Site from "../assets/img/386.png";
import ProductionBdP from "../assets/img/ProductionBdP.png";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const Projects = () => {
	const { lightMode } = useContext(ThemeContext);
	const { french } = useContext(LanguageContext);

	return (
		<div
			className={
				(lightMode ? " text-black " : " text-white ") +
				"h-screen tablet:h-2extra desktop:h-extra overflow-hidden mt-8 "
			}
		>
			<div className="flex flex-col items-center mx-8 tablet:mx-28">
				<hr
					className={
						(lightMode ? " border-black " : " border-white ") +
						"w-4/5 border-t mb-8"
					}
				></hr>
				<h2 className="font-title text-2xl mb-8">
					{french ? "MES PROJETS" : "MY PROJECTS"}
				</h2>
				<div className="flex flex-col">
					<span className="desktop:w-screen flex flex-col desktop:flex-row justify-between items-center desktop:px-32 mb-8 z-10">
						<p className="w-full desktop:w-7/12 h-44 font-text text-xs text-justify align-middle">
							{french
								? "Durant ma scolarité à la Web School Factory j’ai pu effectuer plus d’une dizaine de projets pour de grandes entreprises française, dont Malakoff Humanis, BPCE et L’Oréal. Durant c’est projet, j’ai pu mettre en pratique la méthodologie de gestion de projet, ainsi que des compétences en développement web, design et marketing apprisent pendant mon cursus dans cette école."
								: "During my studies at the Web School Factory I was able to carry out more than projects for large French companies, including Malakoff Humanis, BPCE and L'Oréal. During this project, I was able to put into practice the project management methodology, as well as skills in web development, design and marketing learned during my studies in this school."}
						</p>
						<a
							href="https://www.386laboratoire.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Site} alt="WSF" className="h-40 w-auto" />
						</a>
					</span>
					<span className="desktop:w-screen flex flex-col-reverse desktop:flex-row justify-between items-center desktop:px-32 z-10">
						<a
							href="https://www.productionsbdp.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={ProductionBdP} alt="WSF" className="h-40 w-auto" />
						</a>
						<p className="w-full desktop:w-7/12 h-44 font-text text-xs text-justify py-4">
							{french
								? " J’ai aussi réalisé quelques projets personnels, dans lesquels j’ai pu designer, construire et mettre en ligne des sites internet. Notamment un site pour un studio d’enregistrement"
								: "I also carried out some personal projects, in which I was able to design, build and put websites online. In particular a website for a recording studio"}
							(
							<a
								href="https://www.386laboratoire.com"
								target="_blank"
								rel="noopener noreferrer"
								className="underline underline-offset-1"
							>
								www.386laboratoire.com
							</a>
							)
							{french
								? "et un autre pour une boite de production"
								: "and another for a production company"}
							(
							<a
								href="https://www.productionsbdp.com"
								target="_blank"
								rel="noopener noreferrer"
								className="underline underline-offset-1"
							>
								www.productionsbdp.com
							</a>
							).
						</p>
					</span>
				</div>
			</div>
			<span className="flex justify-between">
				<div
					className={
						(lightMode ? " bg-gradient-light " : " bg-gradient-dark ") +
						"w-52 h-52 rounded-round relative bottom-36 tablet:bottom-96 desktop:bottom-40 left-8 z-0"
					}
				></div>
				<div
					className={
						(lightMode ? " bg-gradient-light " : " bg-gradient-dark ") +
						"w-60 h-60 rounded-round relative bottom-160 desktop:bottom-120 left-32 z-0"
					}
				></div>
			</span>
		</div>
	);
};

export default Projects;

import React, { useContext } from "react";
import { FiGithub, FiMail } from "react-icons/fi";
import { BsArrowUp } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const Socials = () => {
	const { lightMode } = useContext(ThemeContext);

	return (
		<div>
			<div
				className={
					(lightMode ? "text-black " : "text-white ") +
					"fixed left-0 h-screen hidden tablet:flex flex-col justify-end z-20"
				}
			>
				<ul className="flex flex-col justify-around h-2/5  ml-[75px]">
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
							<FiGithub size={30} />
						</a>
					</li>
					<li className="">
						<a
							className="flex justify-between items-center w-full"
							href="mailto:maxime.gibier@icloud.com"
						>
							<FiMail size={30} />
						</a>
					</li>
				</ul>
				<a
					className="h-1/6 flex items-center justify-end mt-[120px]"
					href="#top"
				>
					<BsArrowUp />
				</a>
			</div>
		</div>
	);
};

export default Socials;

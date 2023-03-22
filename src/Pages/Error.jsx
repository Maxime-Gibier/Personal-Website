import React from "react";
import { Link } from "react-router-dom";

const Error = ({ lightMode, french }) => {
	return (
		<div
			className={
				(lightMode ? "text-black " : "text-white ") +
				"flex flex-col justify-center items-center font-title text-2xl h-screen85"
			}
		>
			<p>
				{french
					? "Oups cette page n'éxiste pas"
					: "Oups this page doesn't exist"}
			</p>
			<span className="text-xs">
				<Link to="/">
                    <u>{french ? "Je retrouve mon chemin" : "Find my way"}</u>
				</Link>
			</span>
		</div>
	);
};

export default Error;

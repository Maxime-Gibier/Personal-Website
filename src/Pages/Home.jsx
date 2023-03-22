import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Section1 from "../components/Section1";
import Skills from "../components/Skills";
import Interrested from "../components/Interrested";

const Home = ({ lightMode, french }) => {
	return (
		<>
			<Section1 lightMode={lightMode} french={french} />
			<About lightMode={lightMode} french={french} />
			<Projects lightMode={lightMode} french={french} />
			<Skills lightMode={lightMode} french={french} />
			<Interrested lightMode={lightMode} french={french} />
		</>
	);
};

export default Home;

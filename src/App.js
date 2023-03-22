import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import LegalsNotices from "./Pages/LegalsNotices";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./Pages/Error";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";

function App() {
	return (
		<Router>
			<ThemeProvider>
				<LanguageProvider>
					<ScrollToTop />
					<div className="overflow-hidden 2xl:overflow-visible">
						<Header />
						<Socials />
						<Routes>
							<Route path="/" exact element={<Home />}></Route>
							<Route
								path="/mentions-légales"
								exact
								element={<LegalsNotices />}
							></Route>
							<Route path="*" element={<Error />}></Route>
						</Routes>
						<Footer />
					</div>
				</LanguageProvider>
			</ThemeProvider>
		</Router>
	);
}

export default App;

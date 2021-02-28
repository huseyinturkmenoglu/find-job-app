import React from "react";
import Footer from "../LandingLayout/Footer";
import Header from "../LandingLayout/Header";
import ContentTeam from "../svg/ContentTeam";

export default function Page404() {
	return (
		<>
			<Header />
			<div className="no-page">
                <h1>Working on this page 🤟</h1>
				<ContentTeam />
			</div>
			<Footer />
		</>
	);
}

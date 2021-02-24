import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SearchArea from "./SearchArea";
import WeeklyEmailArea from "./WeeklyEmailArea";

export default function LandingLayout() {
	return (
		<>
			<Header />
			<Content />
			<SearchArea />
            <WeeklyEmailArea />
            <Footer />
		</>
	);
}

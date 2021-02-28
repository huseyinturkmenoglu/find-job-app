import "./assets/styles/index.css";

import LandingLayout from "./LandingLayout/LandingLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./components/Page404";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<LandingLayout />
				</Route>
				<Route path="/new" exact>
					<Page404 />
				</Route>
				<Route path="/joblists">
					<Page404 />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

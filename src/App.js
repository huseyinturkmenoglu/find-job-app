import './css/index.css';

import LandingLayout from "./LandingLayouts/LandingLayout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<LandingLayout />
				</Route>
        <Route path="/new" exact>
          Hello New User
        </Route>
        <Route path="/joblists">
          Jobs Lists
        </Route>
			</Switch>
		</Router>
	);
}

export default App;

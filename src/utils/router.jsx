import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import MapperComponent from "../containers/mapper/mapper";
import AboutComponent from "../containers/about/about";
import ContactComponent from "../containers/contact/contact";
import TeamComponent from "../containers/team/team";
import HomeComponent from "../containers/home/home";

class Routes extends Component {
	render() {
		return (
			<>
				<Switch>
				<Route exact path='/team' component={TeamComponent} />
				<Route exact path='/contact' component={ContactComponent} />
				<Route exact path='/about' component={AboutComponent} />
				{/* <Route exact path='/' component={MapperComponent} /> */}
				<HomeComponent />
				</Switch>
			</>
		);
	}
}

export default Routes;
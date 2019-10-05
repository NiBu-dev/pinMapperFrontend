import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomeComponent from "../containers/home/home";

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomeComponent} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
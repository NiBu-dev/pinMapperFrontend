import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import MapperComponent from "../containers/mapper/mapper";
import ContactComponent from "../containers/contact/contact";
import HomeComponent from "../containers/home/home";
import NotFoundComponent from "../containers/notFound/notFound";

class Routes extends Component {
	render() {
		return (
			<>
				<Switch>
				<Route exact path='/contact' component={ContactComponent} />
				<Route exact path='/tc277' component={MapperComponent} />
				<Route exact path='/' component={HomeComponent} />
				<Route exact path='*' component={NotFoundComponent} />
				</Switch>
			</>
		);
	}
}

export default Routes;
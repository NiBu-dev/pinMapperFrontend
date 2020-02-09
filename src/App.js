import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import themeconfig from "./utils/theme/theme.js";
import  DarkThemeConstants from "./utils/theme/constants";
import Layout from "./hoc/layouts/layout";
import classes from "./App.css";

function App() {
	return (
		<MuiThemeProvider theme={themeconfig}>
			<ThemeProvider theme={DarkThemeConstants}>
				<Layout className={classes}/>
			</ThemeProvider>
		</MuiThemeProvider>
	);
}

export default App;

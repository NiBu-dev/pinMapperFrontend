import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import themeconfig from "./utils/theme/theme.js";
import {constantsDark} from "./utils/theme/constants";
import Layout from "./hoc/layouts/layout";

function App() {
  return (
    <MuiThemeProvider theme={themeconfig}>
				<ThemeProvider theme={constantsDark}>
					<Layout />
				</ThemeProvider>
			</MuiThemeProvider>
  );
}

export default App;

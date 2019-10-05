import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#18ffff"
		},
		error: {
			main: "#0ea5a5"
		},
		secondary: {
			main: "#c51162"
		}
	}
});


export default theme;
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		type: "light",
		primary: {
			main: "#005da9"
		},
		error: {
			main: "#0ea5a5"
		},
		secondary: {
			main: "#e30034"
		}
	}
});


export default theme;
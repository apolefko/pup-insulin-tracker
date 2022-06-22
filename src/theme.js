import { createTheme } from "@mui/material";
import {blue, purple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: purple,
        secondary: blue
    }
});

export default theme;
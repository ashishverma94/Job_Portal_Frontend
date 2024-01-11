import { createTheme } from '@mui/material/styles' ;
// import { blue, lightBlue } from '@mui/material/colors' ;
import { brown, grey} from '@mui/material/colors' ;

export const theme = createTheme({
    palette:{
        primary:{
            // main: blue[500]#5D5655
            main : "#090909"
        },
        secondary:{
            // main: lightBlue[800],
            main : "#292322" ,
            // midNightBlue:"#003366"#000000
            midNightBlue : "#7C7A7A"
        }
    }
})
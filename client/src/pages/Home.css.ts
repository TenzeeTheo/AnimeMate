import { style } from "@vanilla-extract/css";
import {vars} from '../styles/theme.css'



export const captionStyle = style({
    position: 'absolute',
    background:vars.colors.semiColor,
    height:'85px',
    top: '45%',
    left: '35%',
    textAlign: 'center',
    border:'10px black',
    zIndex: 2,
})
export const cap = style({
    position: 'absolute',
    // width: "100px",
    height:'95px',
    top: '60%',
    left: '35%',
    textAlign: 'center',
    border:'10px black',
    zIndex: 2,
});
export const visit =style({
    textDecoration: 'none',
    fontSize: '16px',
    color: vars.colors.primary,
})
export const about =style({
    marginTop: "2%",
    boxSizing: "border-box",
    borderStyle: "solid",
    borderWidth: "5px",
    maxWidth:"100%",
    margin: "auto",
    textAlign: "center",
    paddingTop: '80px'
})
export const satoi =style({
    "@media": {
        'screen and (min-width: 368px)': {
            maxWidth: '100%',
    },
  }
})
   



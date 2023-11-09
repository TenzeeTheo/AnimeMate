import { style } from "@vanilla-extract/css";
import {vars} from '../styles/theme.css'
import { before } from "node:test";



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
})
export const btn = style({
//    width:"100px",
   backgroundColor: vars.colors.favColor,
    display: "inlineBlock",
    padding: "0.9rem 1.8rem",
    fontSize: vars.fontSizes["3x"],
    fontWeight: vars.fontWeights.bold,
    color: "white",
    border: "none",
    cursor: "pointer",
    position: "relative",
    textDecoration: "none",
    overflow: "hidden",
    zIndex: "1",
    fontFamily: vars.fonts.body,
  
    })

   



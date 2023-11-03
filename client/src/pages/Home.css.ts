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
export const btn = style({
    position: 'absolute',
    top: '60%',
    left: '42%',
    background:vars.colors.semiColor,
    height:'50px',
    width:'100px',
    textAlign: 'center',  
})
export const text = style({
    position: 'absolute',
    top: '40%',
    left: '32%',
    background:vars.colors.semiColor,
    textAlign: 'center',  
})
export const Content = style({
    fontFamily: vars.fonts.brand,
    backgroundColor: vars.colors.favColorDark,
    padding: `${vars.space['3x']} 0`,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  })



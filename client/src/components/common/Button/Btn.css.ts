import { style } from "@vanilla-extract/css";
import {vars} from '../../../styles/theme.css'

export const btn = style({
    display:    'inline-block',
    border:'1px solid black',
    padding: " 12px 34px",
    background: 'transparent',
    position: 'relative',
    cursor: 'pointer',
    
    ':hover':{
        border: "1px solid $9F83C6",
        background:vars.colors.favColor,
        transition: '1s',
    }  
    })
    
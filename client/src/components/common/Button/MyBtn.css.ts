import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";


export const btn = style({

    cursor: 'pointer',
    width: '100%',
    height: '56px',
    // padding: '0 16px',
    background: '#9F83C6',
    color: '#f9f9f9',
    border: 0,
    fontFamily: 'inherit',
    fontSize: '1rem', // Assuming 1rem font size
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: '2px',
    borderRadius: '28px',
    margin: '0 auto',
    ':hover': {
        background:vars.colors.favColorDark
    }

})

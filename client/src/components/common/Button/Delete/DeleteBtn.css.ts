import { vars } from "../../../../styles/theme.css";
import { createVar, style } from '@vanilla-extract/css';

export const Btn = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100px',
  height: '40px',
  border: 'none',
  padding: '0px 20px',
  backgroundColor: "red",
  color: 'white',
  fontWeight: 500,
  cursor: 'pointer',
  borderRadius: '10px',
  boxShadow: '5px 5px 0px rgb(140, 32, 212)',
  transitionDuration: '0.3s',

  selectors: {
    '&:hover:not(:active)': {
        transform: 'translate(3px , 3px)',
        transitionDuration: '0.3s',
        boxShadow: '2px 2px 0px rgb(140, 32, 212)',    },
}

});




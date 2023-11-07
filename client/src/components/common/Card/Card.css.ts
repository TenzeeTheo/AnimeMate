import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const bg = style({
  display: 'grid',
  placeItems: 'center',
  margin: 0,
  padding: '0 32px',
  background: vars.colors.primary,
  minHeight: "80vh",

});

export const card = style({
  overflow: 'hidden',
  placeItems: 'center',
  position: 'relative',
  zIndex: 3,
  width: '100%', 
  maxWidth: '500px', 
  maxHeight: '950px',
  margin: '0 20px',
  padding: '170px 30px 54px',
  borderRadius: '1.25rem',
  background: vars.colors.primary,
  textAlign: 'center',
  boxShadow: '0 100px 100px rgba(0, 0, 0, 0.1)',
  ':before': {
    content: '""',
    position: 'absolute',
    top: '-880px',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '1000px',
    height: '1000px',
    borderRadius: '50%',
    background: vars.colors.favColor,
  },
});

export const logo = style({
  position: 'absolute',
  top: '30px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  width: '64px',
  height: '64px',
});



// export const generalForm = style({
//   minWidth: "60vw"
// })

// export const authForm = style({
//   minWidth: "25vw"
// })

// export const container = style({
//   marginTop: "1rem",
//   minHeight: "70vh",
//   display: "flex",
//   flexDirection: "column"
// })

// export const leadCard = style({
//   background: vars.colors.primary,
//   color: vars.colors.complementary,
//   margin: "auto",
//   padding: "2rem",
//   borderRadius: "1rem",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
//   textAlign: "center",
// })


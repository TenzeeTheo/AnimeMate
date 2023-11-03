import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const gridContainer = style({
  margin: `${vars.space['5x']} 0`,
  width: "100%",
})

// export const listGrid = style({
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(1rem, 1fr))",
//   gap: vars.space['4x'],
//   width: "80%",
//   margin: "auto",
// })
// export const listGrid = style({
//   display: "grid",
//   gridTemplateColumns: "repeat (4, 1fr))", // 4 columns
//   gap: vars.space['4x'],
//   width: "80%",
//   margin: "auto",
// });
export const listGrid = style({
  '@media': {
    'screen and (min-width: 768px)': {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(1rem, 1fr))",
      gap: vars.space['4x'],
      width: "80%",
      margin: "auto",
    },
    '(prefers-reduced-motion)': {
      transitionProperty: 'color'
    }
  }
});



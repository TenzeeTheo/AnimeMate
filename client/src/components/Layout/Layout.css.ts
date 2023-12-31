import { style } from "@vanilla-extract/css";
import { vars } from '../../styles/theme.css';

export const app = style({
  fontFamily: vars.fonts.body,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
})

export const appContent = style({
  margin: `${vars.space["2x"]} 0`,
  flex: 1
})
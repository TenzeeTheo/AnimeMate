import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const gridContainer = style({
    margin: `${vars.space['5x']} 0`,
    width: "100%",
  })
  export const listGrid = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
    gap: vars.space['4x'],
    width: "80%",
    margin: "auto",
  })
  



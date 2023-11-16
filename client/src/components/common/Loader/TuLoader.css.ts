import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const loadingBox = style({
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

export const loadingSpinner = style({
  color: vars.colors.favColor,
  width: "10rem !important",
  height: "10rem !important",
  fontSize: vars.fontSizes["4x"]
})
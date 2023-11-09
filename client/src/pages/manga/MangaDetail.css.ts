import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";


export const productBox = style({
    display: "flex",
    flexDirection: "column",
    margin: `${vars.space['3x']} 0`,
    width: "100%",
      "@media": {
        'screen and (min-width: 768px)': {
        flexDirection: "row", // Change to column for small screens
    },
  }
});
export const productBoxRight = style({
    "@media": {
        'screen and (min-width: 768px)': {
        marginLeft: "10%", // Change to column for small screens
    },
  }

})


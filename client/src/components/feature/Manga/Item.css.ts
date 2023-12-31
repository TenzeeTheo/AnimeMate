import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const productLink = style({
  color: vars.colors.complementary,
  textDecoration: "none",
})

export const productCard = style({
  display: "grid",
  justifyItems: "center",
  textAlign: "center",
})

export const productCardContent = style({
  background: vars.colors.primary,
  margin: "0.5rem 0.5rem",
  padding: "0.5rem",
})

export const productCardTitle = style({
  fontSize: vars.fontSizes['4x'],
  fontWeight: vars.fontWeights.bold,
})

export const itemImage = style({
  maxWidth: "100%", 
});
export const container = style({
  background:"black"
});
export const onSalePrice = style({
  color:"red"
});



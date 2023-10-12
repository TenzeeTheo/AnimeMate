import { keyframes, style } from '@vanilla-extract/css';
import {vars} from '../../styles/theme.css'

export const Content = style({
    fontFamily: vars.fonts.brand,
    backgroundColor: vars.colors.primary,
    padding: `${vars.space['3x']} 0`,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  })
  export const logo = style({
    width: 60,
  })



  const bounceAnimation = keyframes({
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-20px)',
    },
    '60%': {
      transform: 'translateY(-10px)',
    },
  });
  export const user = style({
    width: 60,
    ':hover': {
      animationName: bounceAnimation,
      animationDuration: '0.5s',
      animationTimingFunction: 'ease',
      animationPlayState: 'running',
    },
  });
  export const bag = style({
    width: 60,
    ':hover': {
      animationName: bounceAnimation,
      animationDuration: '0.5s',
      animationTimingFunction: 'ease',
      animationPlayState: 'running',
    },
  });

  export const navLink = style({
    padding: vars.space["1x"],
  })

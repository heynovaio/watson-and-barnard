import React from "react"
import { Global, css } from '@emotion/core';

import blackFont from '../fonts/metropolis-black.woff';
import blackFont2 from '../fonts/metropolis-black.woff2';

import boldFont from '../fonts/metropolis-bold.woff';
import boldFont2 from '../fonts/metropolis-bold.woff2';

import mediumFont from '../fonts/metropolis-medium.woff';
import mediumFont2 from '../fonts/metropolis-medium.woff2';

import semiBoldFont from '../fonts/metropolis-semibold.woff';
import semiBoldFont2 from '../fonts/metropolis-semibold.woff2';

import regFont from '../fonts/metropolis-regular.woff';
import regFont2 from '../fonts/metropolis-regular.woff2';

import lightFont from '../fonts/metropolis-light.woff';
import lightFont2 from '../fonts/metropolis-light.woff2';


export const Font = () => (
  <Global
    styles={css`

      h1 {
        font-family: metropolis, sans-serif;
        font-weight: 600;
      }
      h3 {
        font-family: metropolis, sans-serif;
        font-weight: 700;
      }
      p {
        font-family: metropolis, sans-serif;
        font-weight: 500;
      }

      @font-face {
        font-family: 'metropolis';
        src: url(${blackFont2}) format('woff'), url(${blackFont}) format('woff');
        font-weight: 900;
        font-style: normal;

      }

      @font-face {
        font-family: 'metropolis';
        src: url(${boldFont2}) format('woff'), url(${boldFont}) format('woff');
        font-weight: 800;
        font-style: normal;

      }

      @font-face {
        font-family: 'metropolis';
        src: url(${mediumFont2}) format('woff'), url(${mediumFont}) format('woff');
        font-weight: 600;
        font-style: normal;

      }

      @font-face {
        font-family: 'metropolis';
        src: url(${semiBoldFont2}) format('woff'), url(${semiBoldFont}) format('woff');
        font-weight: 700;
        font-style: normal;

      }

      @font-face {
        font-family: 'metropolis';
        src: url(${regFont2}) format('woff'), url(${regFont}) format('woff');
        font-weight: 500;
        font-style: normal;

      }

      @font-face {
        font-family: 'metropolis';
        src: url(${lightFont2}) format('woff'), url(${lightFont}) format('woff');
        font-weight: 400;
        font-style: normal;

      }

    `}
  />
);

export default Font;

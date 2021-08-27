import React from 'react';
import { Global, css } from '@emotion/core';

export const colors ={
  themeBlue:'#092146',
  themeGreen:'#34594C',
  themeBlack:'#172821',
  btnGold:'#D3C190',
  lightGold:'#EEE4CB',
  bgGrey:'#F6F7FA',
}

export const GlobalStyle = () => (

  <Global
    styles={css`
      /* Reset */
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      main,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      main,
      menu,
      nav,
      section {
        display: block;
      }
      /* HTML5 hidden-attribute fix for newer browsers */
      *[hidden] {
        display: none;
      }
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
      body {
        line-height: 1;
        overflow-y: scroll;
        letter-spacing: 0.01em;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }


      /* Global Structure */

      html {
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        border-color: #f2f2f2;
      }

      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: none;
        cursor: pointer;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        background: none;
      }
      strong {
        font-weight: 700;
      }

      /* remove firefox dotted lines around focused objects */
      a:hover,
      a:active,
      a:focus,
      a:link,
      a:visited {
        outline: 0;
        outline: 0 !important;
        outline-style: none;
      }
      button,
      object,
      embed {
        outline: 0;
      }

      /* All Input elements */
      input::-moz-focus-inner {
        outline: 0;
      }

      /* Or more specifically*/
      input[type='submit']::-moz-focus-inner,
      input[type='button']::-moz-focus-inner {
        outline: 0;
      }
    `}
  />
);

export default GlobalStyle;

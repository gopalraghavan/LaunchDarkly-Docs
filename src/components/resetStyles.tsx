import React from 'react'
import { css, Global } from '@emotion/react'

const ResetStyles = () => {
  return (
    <Global
      styles={css`
        /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
        html,
        body,
        p,
        ol,
        ul,
        li,
        dl,
        dt,
        dd,
        blockquote,
        figure,
        fieldset,
        legend,
        textarea,
        pre,
        iframe,
        hr,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: 100%;
          font-weight: normal;
        }
        ul {
          list-style: none;
        }
        button,
        input,
        select,
        textarea {
          margin: 0;
        }
        html {
          box-sizing: border-box;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        img,
        video {
          height: auto;
          max-width: 100%;
        }
        iframe {
          border: 0;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        td,
        th {
          padding: 0;
        }
        td:not([align]),
        th:not([align]) {
          text-align: left;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        }
        html {
          font-size: 100%;
          line-height: 1rem;
        }
      `}
    />
  )
}

export default ResetStyles

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body, html {
    padding: 0;
    margin: 0;
  }

  /* body {
    background: green;
  } */

  #__next {
    height: 100vh;
    overflow: auto;
  }

`

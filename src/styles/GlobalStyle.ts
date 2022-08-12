import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#455a64",
  secondary: "#2F0961",
  third: "#4C1990",
  thirdLight: "#D1C3E2",
  white: "#ffffff",
  black: "#000000",
}

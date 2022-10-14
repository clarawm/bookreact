import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Questrial;
  }
`

export const colors = {
  primary: "#5DC0BA",
  secondary: "#2F0961",
  third: "#4C1990",
  thirdLight: "#D1C3E2",
  white: "#ffffff",
  black: "#000000",
  success: "#50ba9e",
  danger: "#660000"
}

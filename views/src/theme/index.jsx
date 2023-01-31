import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Fira Code';
    
 
    }

    body {
      background: ${(props) => props.theme.background};
    }

    .editor {
 
    /* overflow: hidden; */
    /* background: transparent; */
    border-radius: 20px;
    color: ${(props) => props.theme.text};
    background: #eeecec;
    /* border: none; */
}


`;

export const darkTheme = {
  background: "#252422",
  text: "#fff",
  shadow: "rgba(255, 255, 255, 0.15)",
  content: "#c4c4c4",
  border: "rgba(255, 255, 255, 0.1)",
  links: {
    color: "#9381ff",
    active: "#8374dc",
  },
  button: {
    background: "#9381ff",
    text: "#fff",
    hover: {
      background: "#9e8aff",
      text: "#fff",
    },
  },
  overlays: "rgba(0, 0, 0, 0.7)",
  cards: "#333",
};

export const lightTheme = {
  background: "#fff",
  text: "#333",
  shadow: "rgba(0, 0, 0, 0.15)",
  content: "#7e7d7d",
  border: "rgba(0, 0, 0, 0.1)",
  links: {
    color: "#9381ff",
    active: "#8374dc",
  },
  button: {
    background: "#b7d3f2",
    text: "#333",
    hover: {
      background: "#9e8aff",
      text: "#fff",
    },
  },
  overlays: "rgba(255, 255, 255, 0.7)",
  cards: "#f7f7f7",
};




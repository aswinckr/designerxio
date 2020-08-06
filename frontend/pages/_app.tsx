// src/pages/_app.js
import * as React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../lib/theme"; // theme object from step 2
import Page from "../components/Page";
import "typeface-barlow";
import "typeface-fugaz-one";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Page />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

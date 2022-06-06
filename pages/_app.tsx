/** @jsxImportSource theme-ui */
import '../styles/globals.css'
import { theme } from "../lib/theme";
import { ThemeProvider } from "theme-ui";
import type { AppProps } from 'next/app'

export default ({ Component, pageProps }: AppProps)  => (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
)

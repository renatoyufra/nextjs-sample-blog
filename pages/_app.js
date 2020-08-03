import { Component } from "react"

import '../styles/global.css'

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default App
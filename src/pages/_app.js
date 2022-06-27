import GlobalStyles from '../styles/GlobalStyleMacro/GlobalStyle'
import '../styles/globals.css'
import Script from 'next/script'

const App = ({ Component, ...pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
    <Script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"/>
  </>
)

export default App
import StationsContextProvider from '../src/state.jsx'
import '../styles/globals.css'

function StationApp({ Component, pageProps }) {
  return <StationsContextProvider>
    <Component {...pageProps} />
  </StationsContextProvider>
}

export default StationApp

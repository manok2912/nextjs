import '../styles/globals.css'
import '../styles/index.css'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  console.log(process.env.NODE_ENV);

  return <Component {...pageProps} />
}

export default MyApp

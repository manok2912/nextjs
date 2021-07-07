//import '../styles/globals.css'
import '../styles/index.css'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  console.log(process.env.NODE_ENV);

  return <div className="border-red-900 border-2 mx-20"><Component {...pageProps} /></div>
}

export default MyApp

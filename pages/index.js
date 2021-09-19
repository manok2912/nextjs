import Head from 'next/head'
import absoluteUrl from 'next-absolute-url'
import HomeMatchCard from '../components/HomeMatchCard'
export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Live Scores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.map(function(data, key){return <div key={key}><HomeMatchCard match={data}/></div>})}
    </div>
  )
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { origin } = absoluteUrl(context.req)
  const apiURL = `${origin}/api/matches`
  console.log(apiURL)
  const res = await fetch(apiURL)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}
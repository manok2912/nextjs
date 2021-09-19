import Head from 'next/head'
import SeriesTable from '../../components/SeriesTable'
export default function Series({data}) {
  return (
    <div>
      <Head>
        <title>Series</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SeriesTable series={data.seriesList.series}/>
    </div>
  )
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  const url = `${process.env.URL}/series`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}
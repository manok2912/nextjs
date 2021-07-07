import styles from '../../styles/Home.module.css'
import MatchCard from '../../components/MatchCard'

export default function Home(props) {
  return (
    <>
      <div class="flex space-x-2 ">
        <div class="flex-auto"><h1 className="text-center">Recent</h1><MatchCard /><MatchCard /><MatchCard /></div>
        <div class="flex-none">
        <h1 className="text-center">Live</h1>
          <div className="flex flex-wrap">
            <div className="w-1/3 md:w-full lg:w-full xl:w-1/3 sm:w-full"><MatchCard /></div>
            <div className="w-1/3 md:w-full lg:w-full xl:w-1/3 sm:w-full"><MatchCard /></div>
            <div className="w-1/3 md:w-full lg:w-full xl:w-1/3 sm:w-full"><MatchCard /></div>
            <div className="w-1/3 md:w-full lg:w-full xl:w-1/3 sm:w-full"><MatchCard /></div>
          </div>
        </div>
        <div class="flex-auto"><h1 className="text-center">Upcomimg</h1><MatchCard /><MatchCard /><MatchCard /></div>
      </div>

    </>
  )
}

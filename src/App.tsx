import Header from "./components/Header"
import Hero from "./components/Hero"
import Hero2 from "./components/Hero2"
import StatsCard from "./components/StatCard"
const App = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-[84px] xl:px-[120px]">
    <Header/>
    <Hero/>
    <Hero2/>
    <StatsCard/>
    </div>
  )
}

export default App
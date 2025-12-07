import Features from "../../Components/Features/Features"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import HeroBack from "../../Components/HeroBack/HeroBack"
import Info from "../../Components/Info/Info"
import Requirements from "../../Components/Requirements/Requirements"
import Subscribe from "../../Components/Subscribe/Subscribe"

function HomePage() {

    return (
      <>
        <HeroBack />
        <Header />
        <Hero />
        <Info />
        <Features/>
        <Requirements/>
        <Subscribe/>
        <Footer/>
      </>
    )
  }
  
  export default HomePage
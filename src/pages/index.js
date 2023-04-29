import * as React from "react"
import '../styles/index.css'

import { AnimatePresence } from "framer-motion"

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialContainer from '../components/SocialContainer'
import Portfolio from "../components/Portfolio"
import Services from '../components/Services'
import Container from "../ui/Container"
import Overlay from '../ui/Overlay'
import { Carousel } from "../components/Carosel"
import About from "../components/About"
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"


//photoswipe css

const IndexPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {

    window.addEventListener('load', () => {

      setIsLoading(false);
    });

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);

    return () => clearTimeout(timer)
  }, []);


  return (
    <>
      <AnimatePresence>
        {isLoading && <Overlay isLoading={isLoading} id="banner" />}
      </AnimatePresence>
      <SocialContainer />
      <header className="min-h-screen relative" >
        <Container>
          <Navbar />
          <Hero />
        </Container>
      </header>

      <Container >
        <Services />
        <Portfolio />
      </Container>
      <About />

      <Testimonial />
      <Footer />


    </>
  )
}
export const Head = () => <title>Naina Sharma | Artist</title>

export default IndexPage


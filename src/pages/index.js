import * as React from "react"
import '../styles/index.css'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialContainer from '../components/SocialContainer'
import Portfolio from "../components/Portfolio"

import Container from "../ui/Container"
import Overlay from '../ui/Overlay'

//photoswipe css

const IndexPage = () => {
  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1500);

  //   return () => clearTimeout(timer)
  // }, []);


  return (
    <>
      {/* {isLoading && <Overlay />} */}
      <SocialContainer />
      <Container>
        <header className="min-h-screen" >
          <Navbar />
          <Hero />
        </header>
      </Container>
      <Portfolio />
    </>
  )
}
export const Head = () => <title>Naina Sharma | Artist</title>

export default IndexPage


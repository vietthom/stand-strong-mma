import Navbar  from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Newsletter from "../components/Newsletter"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Newsletter />
    </div>
  )
}

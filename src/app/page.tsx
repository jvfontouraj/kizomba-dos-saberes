import { Hero } from './components/home/Hero'
import { AboutSection } from './components/home/AboutSection'
import { MapSection } from './components/home/MapSection'
import { BookSection } from './components/home/BookSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MapSection />
      <BookSection />
    </>
  )
}

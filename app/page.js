import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className='text-white mt-7 mx-5 '>
      <Navbar />
      <Hero />
      <Projects />
    </main>
  )
}

import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className='text-white mt-7 mx-5 '>
      <Navbar />
      <Hero /> 
    </main>
  )
}

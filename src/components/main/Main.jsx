import React from 'react'
import "./Main.scss"
import Hero from './hero/Hero'
import Gallery from './gallery/Gallery'

const Main = () => {
  return (
    <main className='main'>
        <Hero />
        <Gallery />
    </main>
  )
}

export default Main
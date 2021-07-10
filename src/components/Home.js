import React, { useEffect } from 'react';
import homepageBackground from '../img/homepage-background.jpeg';
import HomeInfo from './HomeInfo';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <main>
      <div className="2xl:mb-164 lg:mb-72 md:mb-72 mb-12">
        <img src={homepageBackground} alt="portrait" className="lg:fixed md:fixed absolute bg-fixed" />
        <section className="relative opacity-80 justify-center content-center items-center pt-12 px-8">
          <div className="bg-white lg:mt-10 lg:p-12 justify-center content-center items-center text-center">
            <h1 className="2xl:text-8xl lg:text-6xl md:text-6xl text-4xl cursive text-black leading-none lg:leading-snug home-name">
              Benjamin Britton Photography
            </h1>
            <p className="2xl:text-2xl lg:text-xl text-lg">
              Intimate Wedding and Engagement Photography Serving Northeast Ohio
            </p>
          </div>
        </section>
      </div>
      <div className="">
        <HomeInfo/>
      </div>
    </main>
    
  )
}
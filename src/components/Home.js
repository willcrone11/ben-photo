import React, { useEffect } from 'react';
import homepageBackground from '../img/homepage-background.webp';
import HomeInfo from './HomeInfo';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <main>
      <div className="2xl:mb-164 lg:mb-72 md:mb-72 sm:mb-72 xs:mb-20 xxs:mb-2 mb-12">
        <img src={homepageBackground} alt="" className="md:fixed absolute bg-fixed" />
        <section className="relative opacity-80 justify-center content-center items-center pt-12 px-8">
          <div className="bg-white lg:mt-10 lg:p-12 justify-center content-center items-center text-center">
            <h1 className="2xl:text-8xl lg:text-6xl md:text-6xl xxs:text-2xl text-4xl cursive text-black leading-none lg:leading-snug home-name">
              Benjamin Britton Photography
            </h1>
            <p className="2xl:text-2xl lg:text-xl text-base">
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
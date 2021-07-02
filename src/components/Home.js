import React from 'react';
import Portrait from '../img/wedding-portrait.jpeg';
import HomeInfo from './HomeInfo';

export default function Home() {
  return (
    <main>
      <div className="lg:mb-72 md:mb-72 mb-20">
        <img src={Portrait} alt="portrait" className="fixed bg-fixed z-0" />
        <section className="relative opacity-80 justify-center content-center items-center pt-12  px-8">
          <div className="bg-white lg:mt-10 lg:p-12 justify-center content-center items-center text-center z-10">
            <h1 className="lg:text-6xl text-4xl cursive text-black leading-none lg:leading-snug home-name">
              Benjamin Britton Photography
            </h1>
            <p className="lg:text-xl text-lg">
              Intimate Wedding and Engagement Photography Serving Northeast Ohio
            </p>
          </div>
        </section>
      </div>
      <div className="z-10">
      <HomeInfo/>
      </div>
    </main>
    
  )
}
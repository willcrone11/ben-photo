import React from 'react';
import Portrait from '../img/wedding-portrait.jpeg';

export default function Home() {
  return (
    <main>
      <img src={Portrait} alt="portrait" className="absolute  " />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl cursive text-white leading-none lg:leading-snug home-name">Hello, I'm Ben</h1>
      </section>
    </main>
  )
}
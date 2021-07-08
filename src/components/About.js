import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import amongEverything from '../img/among-everything.jpeg';
import benSideView from '../img/ben-sideview.png';
import manToss from '../img/man-toss.jpeg';
import { NavLink } from 'react-router-dom';
import FadeInSection from './FadeInSection';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`)
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>

  return (
    <main className="relative bg-gray-100">
      <div className="lg:p-10 p-1 container mx-auto relative">
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex md:flex p-5">
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded lg:w-80 lg:auto md:w-80 md:auto"
              alt={author.name}
            />
            <div className="text-lg flex flex-col justify-center lg:ml-28 ">
              <h1 className="cursive text-6xl text-black mb-12 mt-5 text-center">
                Hey there, I'm{" "}
                <span className="text-blue-800">
                  {author.name}
                </span>
              </h1>
              <p className="text-2xl 2xl:text-4xl text-center">
                I can’t wait to meet you! 
                But first, here's a little about me… 
              </p>
              <div className="flex content-center items-center text-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-12 w-12 lg:mt-20 mt-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10 md:flex lg:flex">
            <div className="prose 2xl:text-5xl lg:text-3xl md:text-2xl p-5 text-xl content-center items-center">
              <h1 className="2xl:text-8xl lg:text-7xl text-3xl">
                Some ways to describe myself...
              </h1>
              <hr style={{ borderTop: "solid black 1px" }} className="lg:mb-10 mt-5 mb-5" />
              <ul className="lg:ml-8 ml-5 list-disc">
                <li>Wanderer</li>
                <li>Saver-of-the planet</li>
                <li>Coffee enthusiast</li>
                <li>Lover of all animals and plants</li>
                <li>Educator</li>
                <li>Climber of walls and rocks alike</li>
                <li>Reveler of the subtleties in life</li>
              </ul>
            </div>
            <img 
              src={benSideView}
              alt="Ben Side View"
              className="lg:m-4 lg:w-2/5 lg:h-2/5 md:w-3/5 md:p-6 md:h-3/5 mt-10"
            />
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-10 mt-10">
            <div>
              <h1 className="animate-wiggle text-6xl text-center">
                Quirky
              </h1>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <h2 className="lg:text-2xl text-lg text-center text-blue-800">
                /ˈKWƏRKĒ/ /ˈKWƏRKI/ │ ADJECTIVE
              </h2>
            </div>
            <div className="lg:pl-44 pt-5 lg:text-left text-center lg:text-3xl text-xl">
              <p>
                Strange in a somewhat silly, awkward manner; strikingly unconventional.
              </p>
              <br/>
              <p>
                Synonyms: Off-beat, Curious, just Weird! 
              </p>
              <hr style={{ borderTop: "solid black 1px" }} className="mt-5 mb-5" />
              <p className="lg:text-2xl text-xl lg:text-left text-center">
                Over the years, I have grown to accept the quirkiness I bring to the table, if not to make others laugh, to give myself a good smile. 
              </p>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <div className="lg:m-32 m-14">
            <p className="lg:text-7xl text-5xl content-center items-center text-center">
              When it comes to my work...
            </p>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
          </div>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex md:flex p-2 mt-10">
            <div className="lg:flex md:flex md:p-12 lg:p-5 2xl:p-14">
              <p className="2xl:text-4xl lg:text-2xl text-xl lg:content-center lg:items-center text-left">
                You know that feeling you get after watching a Disney love story 
                come full-circle? to me, that has always been an irresistible high 
                and my why to what i do.
                <br/><br/>
                Having the opportunity to peer inside of a 
                love story, and provide that same perspective warms my body to the 
                bones. from the connections i get to make, to intimate moments i get 
                to capture, to the smiles i catch myself making as i edit the images,
                <br/><br/>
                <span className="text-blue-800 lg:text-5xl text-3xl">i truly love what i do.</span>
                </p>
                <br/>
            </div>
            <div className="m-3">
              <img 
                src={manToss}
                alt="Wedding Celebration"
              />
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex md:flex p-5 mt-10">
            <img 
              src={amongEverything}
              alt="Lovers Dancing"
              className="items-center content-center lg:m-5 md:m-3 mb-4 lg:w-2/5 lg:h-2/5 md:w-2/5 md:h-2/5"
            />
            <div className="lg:p-16 2xl:p-16 xl:p-16">
              <div className="2xl:text-5xl lg:text-4xl text-xl lg:flex lg:content-center lg:items-center text-center">
                <p>
                  Among everything that makes me me, the enjoyment in documenting 
                  love stories is one of my favorites.
                  <br/><br/> 
                  if you think my team and i would 
                  be a good fit for your big day, engagement session, or “just for fun” 
                  pictures, shoot me a message with the button below and we’ll get started 
                  on planning your adventure!
                </p>
              </div>
              <br/>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <div className="transition duration-500 ease-in-out transform hover:scale-150 lg:content-center lg:items-center text-2xl 2xl:text-4xl text-center mt-16 mb-5">
                  <NavLink 
                    to="/contact" 
                    className="animate-pulse bg-white border-2 border-black hover:bg-black hover:text-white p-5"
                  >
                    Let's Chat!
                  </NavLink>
                  <br/><br/>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>
  )
}
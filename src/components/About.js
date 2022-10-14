import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import amongEverything from '../img/among-everything.webp';
import benSideView from '../img/ben-sideview.webp';
import manToss from '../img/man-toss.webp';
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
      <div className="lg:p-10 p-1 sm:container mx-auto relative">
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex md:flex p-5">
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded lg:w-80 lg:auto md:w-80 md:auto"
              alt={author.name}
            />
            <div className="text-lg flex flex-col justify-center lg:ml-28 md:m-5">
              <h1 className="cursive text-6xl text-black mb-12 mt-5 text-center">
                Hey there, I'm{" "}
                <span>
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
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 md:mt-10 mt-5 md:flex lg:flex">
            <div className="prose 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-2xl p-5 text-xl content-center items-center">
              <h1 className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-5xl text-3xl">
                Some ways to describe myself...
              </h1>
              <hr style={{ borderTop: "solid black 1px" }} className="lg:mb-10 mt-5 mb-5" />
              <ul className="lg:ml-8 ml-5">
                <li className="2xl:mb-3 lg:mb-2">Traveler</li>
                <li className="2xl:mb-3 lg:mb-2">Science Nerd and Educator</li>
                <li className="2xl:mb-3 lg:mb-2">Coffee Addict</li>
                <li className="2xl:mb-3 lg:mb-2">Rock Climber</li>
                <li>Hot Sauce Enthusiast</li>
              </ul>
            </div>
            <img 
              src={benSideView}
              alt=""
              className="xl:m-4 lg:w-2/5 lg:h-2/5 md:w-3/5 md:p-6 md:h-3/5 mt-10"
            />
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-10 md:mt-10 mt-5">
            <div>
              <h1 className="animate-wiggle text-6xl text-center">
                Quirky
              </h1>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <h2 className="lg:text-2xl text-lg text-center text-gray-500">
                /ˈKWƏRKĒ/ /ˈKWƏRKI/ │ ADJECTIVE
              </h2>
            </div>
            <div className="lg:pl-44 pt-5 lg:text-left md:text-center lg:text-3xl text-xl">
              <p>
                Strange in a somewhat silly, awkward manner; strikingly unconventional.
              </p>
              <br/>
              <p>
                Synonyms: Off-beat, Curious, just Weird! 
              </p>
              <hr style={{ borderTop: "solid black 1px" }} className="mt-5 mb-5" />
              <p className="lg:text-2xl text-lg lg:text-left">
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
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex md:flex p-2 md:mt-10 mt-5">
            <div className="lg:flex md:flex p-2 md:p-2 lg:p-5 2xl:p-14">
              <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-xl lg:content-center lg:items-center text-left">
                <span className="2xl:text-6xl md:text-2xl lg:text-4xl text-3xl">
                  When I say I love my job... I LOVE my job. 
                </span>
                <br/><br/>
                It’s not just about the awesome 
                couples I get to meet or the crazy experiences I get to be a part of 
                (although they help). What really drives me is the high I feel when I get 
                to witness two people madly in love start another chapter of their lives. 
                <br/><br/>
                Having the opportunity to peer inside of a love story warms my body to the 
                bones and the energy it puts off fills me with immense joy. 
                </p>
                <br/>
            </div>
            <div className="m-3">
              <img 
                src={manToss}
                alt=""
              />
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex md:flex p-5 md:mt-10 mt-5">
            <img 
              src={amongEverything}
              alt=""
              className="items-center content-center lg:m-5 md:m-3 mb-4 lg:w-2/5 lg:h-2/5 md:w-2/5 md:h-2/5"
            />
            <div className="lg:p-16 2xl:p-16 xl:p-16">
              <div className="2xl:text-5xl xl:text-4xl lg:text-xl text-xl lg:flex lg:content-center lg:items-center">
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
              <div className="transition duration-500 ease-in-out transform hover:scale-110 lg:content-center lg:items-center text-2xl 2xl:text-4xl text-center mt-16 mb-5">
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
import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import beachLove from '../img/beach-love.jpeg';
import benSideView from '../img/ben-sideview.png';
import { NavLink } from 'react-router-dom';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null);

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
      <div className="p-10 container mx-auto relative">
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-80 h-auto lg:w-80 lg:auto"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center lg:ml-28 ">
            <h1 className="cursive text-6xl text-black mb-12 mt-5 text-center">
              Hey there, I'm{" "}
              <span className="text-blue-800">
                {author.name}
              </span>
            </h1>
            <p className="text-2xl text-center">
              I can’t wait to meet you! 
              But first, here's a little about me… 
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-12 w-12 lg:ml-72 lg:mt-20 mt-16 ml-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
          </div>
        </section>
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:p-10 p-5 mt-10 lg:flex">
          <div className="prose lg:text-2xl text-center content-center items-center">
            <h1 className="text-5xl">
              Some ways to describe myself...
            </h1>
            <br/><br/>
            <ul>
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
            className="lg:m-10 lg:w-96 lg:h-116 mt-10"
          />
        </section>
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-10 mt-10">
          <div>
            <h1 className="animate-wiggle text-6xl text-center">
              Quirky
            </h1>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <h2 className="text-2xl text-center text-blue-800">
              /ˈKWƏRKĒ/ /ˈKWƏRKI/ │ ADJECTIVE
            </h2>
          </div>
          <div className="lg:pl-44 pt-5 text-3xl">
            <p>
              Strange in a somewhat silly, awkward manner; strikingly unconventional.
            </p>
            <br/>
            <p>
              Synonyms: Off-beat, Curious, just Weird! 
            </p>
            <hr style={{ borderTop: "solid black 1px" }} className="mt-5 mb-5" />
            <p className="lg:text-2xl text-xl">
              Over the years, I have grown to accept the quirkiness I bring to the table, if not to make others laugh, to give myself a good smile. 
            </p>
          </div>
        </section>
          <div className="lg:m-32 m-14">
            <p className="text-5xl content-center items-center text-center">
              When it comes to my work...
            </p>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
          </div>
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5 mt-10">
          <div>
            <p className="text-2xl lg:flex lg:content-center lg:items-center text-center">
              You know that feeling you get after watching a Disney love story
              come full-circle?
              <br/><br/>
              To me, that has always been an irresistible high.
              <img 
                src="https://media.tenor.com/images/9180b829660c535aa70abd3f6cdfe408/tenor.gif" 
                alt="Bunny Love gif"
                className="lg:m-10 m-5"
              />
            </p>
          </div>
        </section>
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5 mt-10">
          <img 
            src={beachLove}
            alt="Beach Love"
            className="items-center content-center lg:m-5 lg:mt-28 mb-4 lg:w-2/5 lg:h-2/5"
          />
          <div className="lg:p-32">
            <div className="text-4xl lg:flex lg:content-center lg:items-center text-center">
              From the connections I make,
              <br/><br/>
              to the intimate moments I capture,
              <br/><br/>
              to the smiles I simply can't help but make while I edit the images...
            </div>
            <br/><br/><br/>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <div className="lg:content-center lg:items-center text-center">
              <p className="text-6xl text-blue-800">
                I TRULY LOVE WHAT I DO. 
              </p>
            </div>
          </div>
        </section>
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
          <div>
            <p className="lg:text-4xl text-xl lg:content-center lg:items-center text-center">
            If you think my team and I would be a good fit for your big day,
            engagement session, or "just for fun" pictures, shoot me a message
            by clicking the button below and we'll get started on planning your adventure! 
            </p>
            <br/><br/>
            <div className="lg:content-center lg:items-center text-2xl text-center mt-5 mb-5">
              <NavLink 
                to="/contact" 
                className="hover:opacity-75 bg-blue-500 text-white p-5"
              >
                Let's Chat!
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
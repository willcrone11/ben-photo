import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  });

  return (
    <main className="bg-gray-100 min-h-screen lg:p-12 p-6"> 
      <section className="container mx-auto">
        <FadeInSection>
          <h1 className="text-center mt-5 2xl:text-8xl lg:text-7xl text-5xl">
            Blog Posts
          </h1>
          <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
        </FadeInSection>
        <h2 className="2xl:text-3xl text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my Blog!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData && postData.map((post, index) => (
            <article className="transition duration-500 ease-in-out transform hover:scale-110">
              <Link 
                to={"/post/" + post.slug.current} 
                key={post.slug.current}
              >
                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-600" key={index}>
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute"
                    key={post.mainImage}
                  />
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                    <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded" key={post.title}>{post.title}</h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
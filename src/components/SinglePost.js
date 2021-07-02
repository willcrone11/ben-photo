import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import dayjs from 'dayjs';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(`*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        publishedAt,
        "name": author->name,
        "authorImage": author->image
      }`)
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>

  return (
    <main className="bg-gray-200 min-h-screen lg:p-12 md:p-6 p-2">
      <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-90 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <br/>
              <div className="flex justify-center text-gray-800">
                <img 
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                  />
                <p className="cursive flex items-center pl-2 text-2xl">
                  {singlePost.name}
                </p>
              </div>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <div className="flex justify-center text-gray-800">
                <p className="cursive flex items-center pl-2 text-1xl">
                  {dayjs(singlePost.publishedAt).format('MMMM DD YYYY')}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: 400 }}
          />
        </header>
        <div className="lg:px-16 lg:px-48 lg:py-12 lg:py-20  md:p-8 p-4 max-w-full">
          <BlockContent 
            blocks={singlePost.body}
            projectId="2pvrefrb"
            dataset="production"
          />
        </div>
      </article>
    </main>
  )
}
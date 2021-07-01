import React from 'react';
import FadeInSection from './FadeInSection';
import holdingHands from '../img/holding-hands.png';
import spidermanStyle from '../img/spiderman-style.png';
import weddingFlowers from '../img/wedding-flowers.jpeg';
import behindHug from '../img/behind-hug.jpeg';
import fieldLove from '../img/field-love.jpeg';
import { SocialIcon } from 'react-social-icons';
import { HashLink as Link } from 'react-router-hash-link';
//katie and corbin gallery
import katieCorbin1 from '../img/katie-corbin/katie-corbin1.jpeg';
import katieCorbin2 from '../img/katie-corbin/katie-corbin2.jpeg';
import katieCorbin3 from '../img/katie-corbin/katie-corbin3.jpeg';
import katieCorbin4 from '../img/katie-corbin/katie-corbin4.jpeg';
import katieCorbin5 from '../img/katie-corbin/katie-corbin5.jpeg';
import katieCorbin6 from '../img/katie-corbin/katie-corbin6.jpeg';
//elise and braxton gallery
import eliseBraxton1 from '../img/elise-braxton/elise-braxton1.jpeg';
import eliseBraxton2 from '../img/elise-braxton/elise-braxton2.jpeg';
import eliseBraxton3 from '../img/elise-braxton/elise-braxton3.jpeg';
import eliseBraxton4 from '../img/elise-braxton/elise-braxton4.jpeg';
import eliseBraxton5 from '../img/elise-braxton/elise-braxton5.jpeg';
import eliseBraxton6 from '../img/elise-braxton/elise-braxton6.jpeg';
import eliseBraxton7 from '../img/elise-braxton/elise-braxton7.jpeg';
//sarah and adam gallery
import sarahAdam1 from '../img/sarah-adam/sarah-adam1.jpeg';
import sarahAdam2 from '../img/sarah-adam/sarah-adam2.jpeg';
import sarahAdam3 from '../img/sarah-adam/sarah-adam3.jpeg';
import sarahAdam4 from '../img/sarah-adam/sarah-adam4.jpeg';
import sarahAdam5 from '../img/sarah-adam/sarah-adam5.jpeg';
import sarahAdam6 from '../img/sarah-adam/sarah-adam6.jpeg';
import sarahAdam7 from '../img/sarah-adam/sarah-adam7.jpeg';


export default function Portfolio() {
  return (
    <main className="relative bg-gray-100">
      <div className="lg:p-10 p-1 container mx-auto relative">
        <FadeInSection>
          <h1 className="text-center mt-5 lg:text-7xl text-5xl">
            Portfolio
          </h1>
          <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-2">
            <div className="lg:flex">
              <div className="flex-column lg:p-16">
                <h1 className="lg:text-6xl text-4xl">
                  Their Moments, Their Story, Their Love
                </h1>
                <p className="lg:text-4xl text-xl lg:p-3 mt-3 mb-3">
                  It’s always been our philosophy that a photographer is only as good 
                  as the last photo they took. 
                  <br/><br/>
                  Look through our galleries below to see if we might be a fit for your Wedding, 
                  Engagement, or Couples session!
                </p>
                <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                <div className="items-center content-center justify-center text-center lg:text-3xl text-xl">
                  <p>
                    Don't forget to check us out on Instagram and Facebook for even more content!
                  </p>
                  <br/>
                  <div 
                    style={{textAlign: "center"}}
                    className="mb-8 lg:mb-0"
                  >
                    <SocialIcon 
                      url="https://www.instagram.com/benjaminbrittonphotography/?hl=en/" 
                      className="icon mr-8 transition duration-500 ease-in-out transform hover:scale-150"
                      target="_blank" 
                      fgColor="#fff" 
                      style={{ height: 75, width: 75 }}
                    />
                    <SocialIcon
                      url="https://www.facebook.com/benjaminbrittonphotography" 
                      target="_blank" 
                      fgColor="#fff" 
                      className="icon transition duration-500 ease-in-out transform hover:scale-150"
                      style={{ height: 75, width: 75 }}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex-column">
                <div>
                  <img 
                    src={holdingHands}
                    alt="Holding Hands"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
                <div>
                  <img 
                    src={spidermanStyle}
                    alt="Field Lovers"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex md:flex p-5 mt-10">
            <div className="lg:p-20">
              <h1 className="lg:text-7xl text-4xl content-center items-center text-center justify-center">
                Galleries
              </h1>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <div className="lg:flex md:flex content-center items-center text-center justify-center">
                <div>
                  <img 
                    src={fieldLove}
                    alt="Katie and Corbin"
                    className="lg:m-10 md:m-5 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                  />
                  <h2 className="text-4xl mt-5">
                    Katie and Corbin
                  </h2>
                  <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                    <Link 
                      to="/portfolio#katie-corbin" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
                <div>
                  <img 
                    src={weddingFlowers}
                    alt="Elise and Braxton"
                    className="lg:m-10 md:m-5 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                  />
                  <h2 className="text-4xl mt-5">
                    Elise and Braxton
                  </h2>
                  <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                    <Link 
                      to="/portfolio#elise-braxton" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
                <div>
                  <img 
                    src={behindHug}
                    alt="Sarah and Adam"
                    className="lg:m-10 md:m-5 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                  />
                  <h2 className="text-4xl mt-5">
                    Sarah and Adam
                  </h2>
                  <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                    <Link 
                      to="/portfolio#sarah-adam" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="katie-corbin" className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
            <h1 className="text-center mt-5 lg:text-7xl text-5xl">
              Katie and Corbin
            </h1><br/>
            <h3 className="text-center text-gray-500 lg:text-3xl">
              engagement session at sunset in the park. joyful. best-friends. genuine.
            </h3>
            <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
            <div className="">
              <img 
                src={katieCorbin1}
                alt="Katie and Corbin 1"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={katieCorbin2}
                  alt="Katie and Corbin 2"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={katieCorbin3}
                  alt="Katie and Corbin 3"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <div className="">
              <img 
                src={katieCorbin4}
                alt="Katie and Corbin 4"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={katieCorbin5}
                  alt="Katie and Corbin 5"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={katieCorbin6}
                  alt="Katie and Corbin 6"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="elise-braxton" className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
            <h1 className="text-center mt-5 lg:text-7xl text-5xl">
              Elise and Braxton
            </h1><br/>
            <h3 className="text-center text-gray-500 lg:text-3xl">
              two long-time lovers tying the knot. spunky. happy. soul-mates.
            </h3>
            <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
            <div className="lg:flex">
              <div className="lg:flex-column">
                <div className="">
                  <img 
                    src={eliseBraxton1}
                    alt="Elise and Braxton 1"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
                <div className="">
                  <img 
                    src={eliseBraxton2}
                    alt="Elise and Braxton 2"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
              </div>
              <div className="lg:flex-column">
                <div className="lg:m-2 lg:mt-14">
                  <img 
                    src={eliseBraxton3}
                    alt="Elise and Braxton 3"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
                <div className="lg:m-2">
                  <img 
                    src={eliseBraxton4}
                    alt="Elise and Braxton 4"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
                <div className="lg:m-2">
                  <img 
                    src={eliseBraxton5}
                    alt="Elise and Braxton 5"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
              </div>
              <div className="lg:flex-column">
                <div className="lg:m-2">
                  <img 
                    src={eliseBraxton6}
                    alt="Elise and Braxton 6"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
                <div className="">
                  <img 
                    src={eliseBraxton7}
                    alt="Elise and Braxton 7"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="sarah-adam" className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
            <h1 className="text-center mt-5 lg:text-7xl text-5xl">
              Sarah and Adam
            </h1><br/>
            <h3 className="text-center text-gray-500 lg:text-3xl">
              intimate elopement in the woods. strong. passionate. tranquil.
            </h3>
            <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
            <div className="lg:flex">
              <div className="lg:flex">
                <div className="lg:m-2">
                  <img 
                    src={sarahAdam1}
                    alt="Sarah and Adam 1"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
                <div className="lg:m-2">
                  <img 
                    src={sarahAdam2}
                    alt="Sarah and Adam 2"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
              </div>
            </div>
            <div className="lg:m-2">
              <img 
                src={sarahAdam3}
                alt="Sarah and Adam 3"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={sarahAdam4}
                  alt="Sarah and Adam 4"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={sarahAdam5}
                  alt="Sarah and Adam 5"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={sarahAdam6}
                  alt="Sarah and Adam 6"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={sarahAdam7}
                  alt="Sarah and Adam 7"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>
  )
}
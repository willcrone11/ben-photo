import React, { useEffect } from 'react';
import FadeInSection from './FadeInSection';
import theirMoment1 from '../img/their-moment1.png';
import theirMoment2 from '../img/their-moment2.png';
import weddingFlowers from '../img/wedding-flowers.jpeg';
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
//jenna and brian gallery
import jennaBrianHome from '../img/jenna-brian/jenna-brian-home.jpeg';
import jennaBrian1 from '../img/jenna-brian/jenna-brian1.jpeg';
import jennaBrian2 from '../img/jenna-brian/jenna-brian2.jpeg';
import jennaBrian3 from '../img/jenna-brian/jenna-brian3.jpeg';
import jennaBrian4 from '../img/jenna-brian/jenna-brian4.jpeg';
import jennaBrian5 from '../img/jenna-brian/jenna-brian5.jpeg';
import jennaBrian6 from '../img/jenna-brian/jenna-brian6.jpeg';
import jennaBrian7 from '../img/jenna-brian/jenna-brian7.jpeg';
import jennaBrian8 from '../img/jenna-brian/jenna-brian8.jpeg';
//brick and ashley gallery
import brickAshleyHome from '../img/brick-ashley/brick-ashley1.jpeg';
import brickAshley2 from '../img/brick-ashley/brick-ashley2.jpeg';
import brickAshley3 from '../img/brick-ashley/brick-ashley3.jpeg';
import brickAshley4 from '../img/brick-ashley/brick-ashley4.jpeg';
import brickAshley5 from '../img/brick-ashley/brick-ashley5.jpeg';
import brickAshley6 from '../img/brick-ashley/brick-ashley6.jpeg';
//shelby and jared gallery
import shelbyJaredHome from '../img/shelby-jared/shelby-jared-home.jpeg';
import shelbyJared1 from '../img/shelby-jared/shelby-jared1.jpeg';
import shelbyJared2 from '../img/shelby-jared/shelby-jared2.jpeg';
import shelbyJared3 from '../img/shelby-jared/shelby-jared3.jpeg';
import shelbyJared4 from '../img/shelby-jared/shelby-jared4.jpeg';
import shelbyJared5 from '../img/shelby-jared/shelby-jared5.jpeg';
import shelbyJared6 from '../img/shelby-jared/shelby-jared6.jpeg';
//sydney and caleb gallery
import sydneyCalebHome from '../img/sydney-caleb/sydney-caleb-home.jpeg';
import sydneyCaleb1 from '../img/sydney-caleb/sydney-caleb1.jpeg';
import sydneyCaleb2 from '../img/sydney-caleb/sydney-caleb2.jpeg';
import sydneyCaleb3 from '../img/sydney-caleb/sydney-caleb3.jpeg';
import sydneyCaleb4 from '../img/sydney-caleb/sydney-caleb4.jpeg';
import sydneyCaleb5 from '../img/sydney-caleb/sydney-caleb5.jpeg';
import sydneyCaleb6 from '../img/sydney-caleb/sydney-caleb6.jpeg';
import sydneyCaleb7 from '../img/sydney-caleb/sydney-caleb7.jpeg';

export default function Portfolio() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <main className="relative bg-gray-100">
      <div className="lg:p-10 p-1 container mx-auto relative">
        <FadeInSection>
          <h1 className="text-center mt-5 2xl:text-8xl lg:text-7xl text-5xl">
            Portfolio
          </h1>
          <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-2">
            <div className="lg:flex">
              <div className="flex-column lg:p-12">
                <h1 className="2xl:text-8xl lg:text-6xl text-4xl">
                  Their Moments, Their Story, Their Love
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
                <p className="lg:text-4xl text-xl 2xl:p-8 lg:p-3 mt-3 mb-3">
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
              <div className="lg:flex-column lg:p-4">
                <div>
                  <img 
                    src={theirMoment1}
                    alt="Blowing Bubbles"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
                <div>
                  <img 
                    src={theirMoment2}
                    alt="Bridesmaids in the forest"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex md:flex p-5 mt-10">
            <div className="lg:p-20">
              <h1 className="lg:text-7xl text-4xl content-center items-center text-center justify-center">
                Galleries
              </h1>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <div className="lg:flex-column">
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
                      src={jennaBrianHome}
                      alt="Jenna and Brian"
                      className="lg:m-10 md:m-5 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                    />
                    <h2 className="text-4xl mt-5">
                      Jenna and Brian
                    </h2>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                    <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                      <Link 
                        to="/portfolio#jenna-brian" 
                        className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:flex md:flex content-center items-center text-center justify-center">
                  <div>
                    <img 
                      src={brickAshleyHome}
                      alt="Brick and Ashley"
                      className="lg:m-10 md:m-5 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                    />
                    <h2 className="text-4xl mt-5">
                      Brick and Ashley
                    </h2>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                    <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                      <Link 
                        to="/portfolio#brick-ashley" 
                        className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={shelbyJaredHome}
                      alt="Katie and Corbin"
                      className="lg:m-10 md:m-5 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                    />
                    <h2 className="text-4xl mt-5">
                      Shelby and Jared
                    </h2>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                    <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                      <Link 
                        to="/portfolio#shelby-jared" 
                        className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={sydneyCalebHome}
                      alt="Sydney and Caleb"
                      className="lg:m-10 md:m-5 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                    />
                    <h2 className="text-4xl mt-5">
                      Sydney and Caleb
                    </h2>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                    <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                      <Link 
                        to="/portfolio#sydney-caleb" 
                        className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="katie-corbin" className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
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
          <section id="elise-braxton" className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
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
          <section id="jenna-brian" className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
            <h1 className="text-center mt-5 lg:text-7xl text-5xl">
              Jenna and Brian
            </h1><br/>
            <h3 className="text-center text-gray-500 lg:text-3xl">
              ???
            </h3>
            <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
            <div className="lg:flex-column">
              <div className="lg:m-2">
                <img 
                  src={jennaBrian1}
                  alt="Jenna and Brian 1"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:flex">
                <div className="lg:m-2">
                  <img 
                    src={jennaBrian2}
                    alt="Jenna and Brian 2"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
                <div className="lg:m-2">
                  <img 
                    src={jennaBrian3}
                    alt="Jenna and Brian 3"
                    className="items-center content-center lg:m-4 mb-4 "
                  />
                </div>
              </div>
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={jennaBrian4}
                  alt="Jenna and Brian 4"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={jennaBrian5}
                  alt="Jenna and Brian 5"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={jennaBrian6}
                  alt="Jenna and Brian 6"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={jennaBrian7}
                  alt="Jenna and Brian 7"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={jennaBrian8}
                  alt="Jenna and Brian 8"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="brick-ashley" className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
            <h1 className="text-center mt-5 lg:text-7xl text-5xl">
              Brick and Ashley
            </h1><br/>
            <h3 className="text-center text-gray-500 lg:text-3xl">
              ???
            </h3>
            <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={brickAshley5}
                  alt="Brick and Ashley 5"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={brickAshley2}
                  alt="Brick and Ashley 2"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={brickAshley3}
                  alt="Brick and Ashley 3"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <div className="">
              <img 
                src={brickAshley4}
                alt="Brick and Ashley 4"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
            <div className="lg:m-2">
              <img 
                src={brickAshley6}
                alt="Brick and Ashley 6"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="shelby-jared" className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
            <h1 className="text-center mt-5 lg:text-7xl text-5xl">
              Shelby and Jared
            </h1><br/>
            <h3 className="text-center text-gray-500 lg:text-3xl">
              ???
            </h3>
            <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
            <div className="">
              <img 
                src={shelbyJared1}
                alt="Shelby and Jared 1"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={shelbyJared2}
                  alt="Shelby and Jared 2"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={shelbyJared3}
                  alt="Shelby and Jared 3"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <div className="">
              <img 
                src={shelbyJared4}
                alt="Shelby and Jared 4"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={shelbyJared5}
                  alt="Shelby and Jared 5"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={shelbyJared6}
                  alt="Shelby and Jared 6"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="sydney-caleb" className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 lg:mt-28 mt-20">
            <h1 className="text-center mt-5 lg:text-7xl text-5xl">
              Sydney and Caleb
            </h1><br/>
            <h3 className="text-center text-gray-500 lg:text-3xl">
              ???
            </h3>
            <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
            <div className="">
              <img 
                src={sydneyCaleb1}
                alt="Sydney and Caleb 1"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={sydneyCaleb2}
                  alt="Sydney and Caleb 2"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={sydneyCaleb3}
                  alt="Sydney and Caleb 3"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <div className="">
              <img 
                src={sydneyCaleb4}
                alt="Sydney and Caleb 4"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
            <div className="lg:flex">
              <div className="lg:m-2">
                <img 
                  src={sydneyCaleb5}
                  alt="Sydney and Caleb 5"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="lg:m-2">
                <img 
                  src={sydneyCaleb6}
                  alt="Sydney and Caleb 6"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <div className="lg:m-2">
              <img 
                src={sydneyCaleb7}
                alt="Sydney and Caleb 7"
                className="items-center content-center lg:m-4 mb-4 "
              />
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>
  )
}
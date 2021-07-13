import React from 'react';
import weddingKiss from '../img/wedding-kiss.jpeg';
import engagementKiss from '../img/engagement-kiss.jpeg';
import weddingFlowers from '../img/wedding-flowers.jpeg';
import couplesPortal from '../img/couples-portal.jpeg'
import engagementPortal from '../img/engagement-portal.jpeg';
import loversLying from '../img/lovers-lying.jpeg';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { SocialIcon } from 'react-social-icons';
import ContactForm from './ContactForm';
import FadeInSection from './FadeInSection';

export default function HomeInfo() {
  return (
    <main className="relative bg-gray-100">
      <div className="lg:p-10 p-1 container mx-auto relative">
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5">
            <img 
              src={weddingKiss}
              alt="Wedding Kiss"
              className="xl:m-10 xl:m-5 mb-5 lg:w-2/5 lg:h-2/5 xl:w-2/5 xl:h-2/5 2xl:w-2/5 2xl:h-2/5"
            />
            <div className="lg:p-6 xl:p-12 2xl:p-16">
              <div className="lg:text-5xl xl:text-7xl 2xl:text-8xl text-5xl lg:content-center lg:items-center text-center">
                <h2>Hey there!</h2>
              </div>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <div className="lg:content-center lg:items-center text-center md:p-2">
                <p className="lg:text-xl xl:text-3xl md:text-2xl text-lg 2xl:text-5xl mb-5">
                  Thanks for stopping by our website! We hope you find us to be a match
                  for your wedding, engagement, or couple photos.
                  <br/><br/>
                  If you like what you see,
                  shoot us a message by clicking the button below!
                </p>
                <br/>
                <div className="transition duration-500 ease-in-out transform lg:hover:scale-150 lg:content-center lg:items-center md:text-xl text-lg text-center lg:mt-5 mb-5">
                  <NavLink 
                    to="/contact" 
                    className="animate-pulse bg-white border-2 border-black hover:bg-black hover:text-white p-5"
                  >
                    Let's Chat!
                  </NavLink>
                  <br/><br/>
                </div>
                <hr style={{ borderTop: "solid black 1px" }} className="m-5 md:mb-5 mb-2" />
                <p className="lg:text-4xl xl:text-5xl text-3xl mb-4">
                  We can't wait to hear from you!
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <div className="lg:m-32 m-14">
              <p className="lg:text-7xl text-2xl content-center items-center text-center">
                “It was almost like we were with a friend that we’ve had forever during this shoot”
              </p>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <p className="lg:text-4xl text-xl content-center items-center text-center">
                -kyle
              </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5 mt-10">
            <div className="xl:p-6 lg:p-2 2xl:p-12">
              <div className="text-5xl 2xl:text-7xl xl:text-6xl lg:text-4xl lg:content-center lg:items-center lg:text-left text-center">
                <h2>For the wild lovers, wildly in love</h2>
              </div>
              <hr style={{ borderTop: "solid black 1px" }} className="mt-5 mb-5" />
              <div className="lg:content-center lg:items-center text-left">
                <p className="text-xl lg:text-sm xl:text-xl 2xl:text-2xl">
                  Whether you’re looking for a wedding, engagement, or casual session with 
                  your partner, we’re glad to have you consider us!
                  <br/><br/>
                  First and foremost, we want you to make sure we’re the right photographers 
                  for your love-story.
                  <br/><br/>
                  While we have no doubt we’ll feel as if we’ve been friends forever come your 
                  big day, you should feel an automatic connection with who you choose to 
                  document your moments!
                  <br/><br/>
                  that all begins with checking out the about page, 
                  as well as looking through our portfolio. if you feel confident that we’re the 
                  ones, send us a message through the contact page. 
                </p>
                <hr style={{ borderTop: "solid black 1px" }} className="mt-5 2xl:mt-16" />
                <div className="flex content-center items-center justify-center text-center xl:text-2xl lg:text-sm md:text-2xl xl:text-xl text-sm mt-3 pt-5 xl:mb-4 mb-16">
                  <div className="transition duration-500 ease-in-out transform lg:hover:scale-150 md:hover:scale-150 xl:hover:scale-150 mt-5">
                    <NavLink 
                      to="/about" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 pl-7 pr-7 lg:m-5 md:m-5 xl:m-5 m-1"
                    >
                      About
                    </NavLink>
                  </div>
                  <br/>
                  <div className="transition duration-500 ease-in-out transform lg:hover:scale-150 md:hover:scale-150 xl:hover:scale-150 mt-5">
                    <NavLink 
                      to="/portfolio" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 lg:m-5 md:m-5 xl:m-5 m-1"
                    >
                      Portfolio
                    </NavLink>
                  </div>
                  <br/>
                  <div className="transition duration-500 ease-in-out transform lg:hover:scale-150 md:hover:scale-150 xl:hover:scale-150 mt-5">
                    <NavLink 
                      to="/contact" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 lg:m-5 md:m-5 xl:m-5 m-1"
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <img 
              src={engagementKiss}
              alt="Engagement Kiss"
              className="xl:m-5 mb-5 xl:p-1 lg:p-5 lg:w-2/5 lg:h-2/5"
            />
          </section>
        </FadeInSection>
        <FadeInSection>
          <div className="lg:m-32 m-16">
            <p className="lg:text-6xl text-2xl content-center items-center text-center">
              “I really have NO WORDS!…We had SO MUCH fun taking our pictures.
              This is everything I imagined and more!!!”
            </p>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <p className="lg:text-4xl text-xl content-center items-center text-center">
              -sydney
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5 mt-10">
            <div className="lg:p-20">
              <h1 className="lg:text-7xl text-4xl content-center items-center text-center justify-center">
                Pricing and Packages
              </h1>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <div className="lg:flex md:flex content-center items-center text-center justify-center">
                <div>
                  <img 
                    src={weddingFlowers}
                    alt="Wedding Couple"
                    className="lg:m-8 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                  />
                  <h2 className="text-4xl mt-5">
                    Weddings
                  </h2>
                  <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                  <h3>
                    Starting at <span>$175/hr</span>
                  </h3>
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                    <Link 
                      to="/pricing#weddings" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div>
                  <img 
                    src={engagementPortal}
                    alt="Field Love"
                    className="lg:m-8 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                  />
                  <h2 className="text-4xl mt-5">
                    Engagements
                  </h2>
                  <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                  <h3>
                    <span>FREE</span> when you book a wedding
                  </h3>
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                    <Link 
                      to="/pricing#engagements" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div>
                  <img 
                    src={couplesPortal}
                    alt="Pillow Fight"
                    className="lg:m-8 lg:w-4/5 lg:h-4/5 md:w-4/5 md:h-4/5"
                  />
                  <h2 className="text-4xl mt-5">
                    Couples
                  </h2>
                  <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                  <h3>
                    Starting at <span>$150</span>
                  </h3>
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                    <Link 
                      to="/pricing#couples" 
                      className="bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <hr style={{ borderTop: "solid black 1px" }} className="mt-5" />
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <div className="lg:m-32 m-16">
            <p className="lg:text-5xl text-xl content-center items-center text-center">
              “They were so helpful, understanding and made you feel comfortable! Did I mention 
              helpful?! Being your wedding day, it’s already stressful enough. They were 
              willing to go above and beyond to help accommodate any situation to make it a tad easier. ”
            </p>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <p className="lg:text-4xl text-lg content-center items-center text-center">
              -cabrina
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
            <div>
              <div className="contact-background content-center items-center text-center justify-center lg:ml-6 pt-4">
                <h1 className="lg:text-6xl text-3xl bg-gray-200 p-8 lg:ml-48 ml-4 lg:mr-48 mr-4 mb-4">
                  Are you ready to do this!?
                </h1>
                <ContactForm />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 md:hover:scale-105 xl:hover:scale-105 2xl:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
            <div className="xl:flex">
              <div className="2xl:p-12 xl:p-12 lg:p-6">
                <h1 className="items-center content-center justify-center text-center 2xl:text-8xl lg:text-6xl text-5xl">
                  We Can't Wait to Meet You!
                </h1>
                <br/>
                <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
                <div className="items-center content-center justify-center text-center lg:text-3xl text-xl">
                  <p>
                    In the meantime, check us out on Instagram and Facebook!
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
              <div className="lg:flex items-center content-center justify-center lg:m-5 mb-12">
                <img 
                  src={loversLying}
                  alt="Lovers Lying"
                  className="lg:flex items-center content-center justify-center lg:m-5 mb-4 lg:w-4/5 lg:h-4/5"
                />
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>
  )
}
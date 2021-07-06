import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import weddingParty from '../img/wedding-party.png';
import loversLying from '../img/lovers-lying.jpeg';
import flowerKiss from '../img/flower-kiss.jpeg';
import FadeInSection from './FadeInSection';

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="relative bg-gray-100">
      <div className="lg:p-10 p-1 container mx-auto relative">
        <FadeInSection>
          <h1 className="text-center mt-5 2xl:text-8xl lg:text-7xl text-5xl">
            Contact Us!
          </h1>
          <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-2">
            <div className="content-center items-center justify-center lg:ml-6 md:ml-3 pt-4">
              <div className="lg:flex md:flex">
                <img 
                  src={flowerKiss}
                  alt="Flower Kiss"
                  className="items-center content-center lg:m-5 mb-4 lg:w-2/5 lg:h-2/5 md:w-2/5 md:h-2/5"
                />
                <div className="flex-column">
                  <p className="text-center 2xl:text-8xl lg:text-6xl md:text-4xl text-4xl">
                    We’re so stoked you’re ready to chat!
                  </p>
                    <br/><br/> 
                  <p className="text-center 2xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                    Beforehand, we recommend checking out our package
                    details, as transparency is key in our relationship.
                  </p>
                  <br/>
                  <div className="text-center transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                        <NavLink 
                          to="/pricing" 
                          className="lg:text-2xl md:text-2xl text-lg bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                        >
                          Pricing and Packages
                        </NavLink>
                  </div>
                  <hr style={{ borderTop: "solid black 1px" }} className="m-10" />
                  <p className="text-center lg:mt-10 lg:text-5xl text-xl">
                    Once you're ready, fill out the contact form below!
                  </p>
                  <div className="flex content-center items-center text-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce lg:w-20 lg:h-20 h-12 w-12 lg:mt-14 mt-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
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
          <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:p-5 p-3 mt-10">
            <div className="lg:flex">
              <img 
                src={weddingParty}
                alt="Wedding Party"
                className="lg:m-4  lg:w-2/5 lg:h-2/5 xl:w-3/5 xl:h-3/5"
              />
              <div className="flex-column p-3">
                <h1 className="2xl:text-7xl lg:text-5xl text-4xl">
                  The next steps...
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="mt-3" />
                <br/>
                <h3 className="2xl:text-4xl lg:text-3xl text-2xl">
                  In the next 48 hours...
                </h3>
                <br/>
                <p className="2xl:text-2xl lg:text-xl text-md">
                  we will send you a reply. if we don’t get back to you, 
                  contact us at benjaminbrittonphotography@gmail.com because 
                  something went wrong. 
                </p>
                <br/>
                <h3 className="2xl:text-4xl lg:text-3xl text-2xl">
                  Set up a wedding consult
                </h3>
                <br/>
                <p className="2xl:text-2xl lg:text-xl text-md">
                  if this is a wedding and you’re ready for booking, we will setup a consult 
                  to learn more about you, talk about the details of your wedding, and exchange 
                  a deposit of $175 to reserve your date. 
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
            <div className="lg:flex">
              <div className="2xl:p-12 xl:p-12">
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
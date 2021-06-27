import React from 'react';
import ContactForm from './ContactForm';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import weddingParty from '../img/wedding-party.png';
import loversLying from '../img/lovers-lying.jpeg';
import cakeKiss from '../img/cake-kiss.jpeg';

export default function Contact() {
  return (
    <main className="relative bg-gray-100">
      <div className="p-10 container mx-auto relative">
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-2">
          <div className="content-center items-center text-center justify-center lg:ml-6 pt-4">
            <h1 className="lg:text-6xl text-3xl text-blue-800">
              Contact Us!
            </h1>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <br/>
            <p className="lg:text-3xl text-xl">
              We’re so stoked you’re ready to chat!
              <br/><br/> 
              Beforehand, we recommend checking out our package
              details as transparency is key in our relationship.
            </p>
            <br/>
            <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                  <NavLink 
                    to="/pricing" 
                    className="bg-blue-500 text-white p-5 m-5"
                  >
                    Pricing and Packages
                  </NavLink>
            </div>
          </div>
        </section>
        <hr style={{ borderTop: "solid black 1px" }} className="m-20" />
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
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:p-5 p-3 mt-10">
          <div className="lg:flex lg:ml-6 pt-4">
            <img 
              src={weddingParty}
              alt="Wedding Party"
              className="lg:m-4 lg:pt-10 lg:w-2/5 lg:h-2/5"
            />
            <div className="flex-column p-4">
              <h1 className="lg:text-6xl text-3xl text-blue-800">
                The next steps...
              </h1>
              <br/>
              <h3 className="lg:text-3xl text-2xl">
                In the next 48 hours...
              </h3>
              <br/>
              <p className="lg:text-xl text-sm">
                we will send you a reply. if we don’t get back to you, 
                contact us at benjaminbrittonphotography@gmail.com because 
                something went wrong. 
              </p>
              <br/>
              <h3 className="lg:text-3xl text-2xl">
                Set up a wedding consult
              </h3>
              <br/>
              <p className="lg:text-xl text-sm">
                if this is a wedding and you’re ready for booking, we will setup a consult 
                to learn more about you, talk about the details of your wedding, and exchange 
                a deposit of $175 to reserve your date. 
              </p>
            </div>
          </div>
        </section>
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
          <div>
            <h1 className="items-center content-center justify-center text-center text-blue-800 lg:text-6xl text-3xl">
              We Can't Wait to Meet You!
            </h1>
            <br/>
            <div className="items-center content-center justify-center text-center lg:text-3xl text-xl">
              <p>
                In the meantime, check us out on Instagram and Facebook!
              </p>
              <br/>
              <div style={{textAlign: "center"}}>
                <SocialIcon 
                  url="https://www.instagram.com/benjaminbrittonphotography/?hl=en/" 
                  className="icon mr-8 transition duration-500 ease-in-out transform hover:scale-150"
                  target="_blank" 
                  fgColor="#fff" 
                  style={{ height: 55, width: 55 }}
                />
                <SocialIcon
                  url="https://www.facebook.com/benjaminbrittonphotography" 
                  target="_blank" 
                  fgColor="#fff" 
                  className="icon transition duration-500 ease-in-out transform hover:scale-150"
                  style={{ height: 55, width: 55 }}
                />
              </div>
            </div>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <div className="lg:flex items-center content-center justify-center lg:m-5 mb-12">
              <img 
                src={loversLying}
                alt="Lovers Lying"
                className="lg:flex items-center content-center justify-center lg:m-5 mb-4 lg:w-3/5 lg:h-3/5"
              />
              <img 
                src={cakeKiss}
                alt="Cake Kiss"
                className="lg:flex items-center content-center justify-center lg:m-5 mb-4 lg:w-2/5 lg:h-2/5"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
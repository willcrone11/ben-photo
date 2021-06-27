import React from 'react';
import weddingKiss from '../img/wedding-kiss.jpeg';
import engagementKiss from '../img/engagement-kiss.jpeg';
import weddingFlowers from '../img/wedding-flowers.jpeg';
import pillowFight from '../img/pillow-fight.jpeg'
import fieldLove from '../img/field-love.jpeg';
import { NavLink } from 'react-router-dom';
import ContactForm from './ContactForm';

export default function HomeInfo() {
  return (
    <main className="relative bg-gray-100">
      <div className="p-10 container mx-auto relative">
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5">
          <img 
            src={weddingKiss}
            alt="Wedding Kiss"
            className="lg:m-10 lg:m-5 mb-5 lg:w-2/5 lg:h-2/5"
          />
          <div className="lg:p-32">
            <div className="text-6xl text-blue-800 lg:content-center lg:items-center text-center">
              <h2>Hey there!</h2>
            </div>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <div className="lg:content-center lg:items-center text-center">
              <p className="text-2xl">
                Thanks for stopping by our website! We hope you find us to be a match
                for your wedding, engagement, or couple photos. If you like what you see,
                shoot us a message by clicking the button below!
              </p>
              <br/><br/>
              <div className="transition duration-500 ease-in-out transform hover:scale-150 lg:content-center lg:items-center text-2xl text-center mt-5 mb-5">
                <NavLink 
                  to="/contact" 
                  className="animate-pulse bg-blue-500 text-white p-5"
                >
                  Let's Chat!
                </NavLink>
                <br/><br/>
              </div>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <p className="text-4xl text-blue-800">
                We can't wait to hear from you!
              </p>
            </div>
          </div>
        </section>
        <div className="lg:m-32 m-14">
            <p className="lg:text-7xl text-2xl content-center items-center text-center">
              “It was almost like we were with a friend that we’ve had forever during this shoot”
            </p>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <p className="lg:text-4xl text-xl content-center items-center text-center">
              -kyle
            </p>
        </div>
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5 mt-10">
          <div className="lg:p-20">
            <div className="text-4xl text-blue-800 lg:content-center lg:items-center text-center">
              <h2>For the Wild Lovers, wildly in love.</h2>
            </div>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <div className="lg:content-center lg:items-center ">
              <p className="text-xl">
                Whether you’re looking for a wedding, engagement, or casual session with 
                our partner, we’re glad to have you consider us!
                <br/><br/>
                First and foremost, we want you to make sure we’re the right photographers 
                for your love-story.
                <br/><br/>
                While i have no doubt we’ll feel as if we’ve been friends forever come your 
                big day, you should feel an automatic connection with who you choose to 
                document your moments!
                <br/><br/>
                that all begins with checking out the about page, 
                as well as looking through our portfolio. if you feel confident that we’re the 
                ones, send us a message through the contact page. 
              </p>
              <br/><br/>
              <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
              <div className="lg:flex content-center items-center justify-center text-center text-2xl mt-5 pt-5">
                <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-5">
                  <NavLink 
                    to="/about" 
                    className="bg-blue-500 text-white p-5 m-5"
                  >
                    About
                  </NavLink>
                </div>
                <br/>
                <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-5">
                  <NavLink 
                    to="/portfolio" 
                    className="bg-blue-500 text-white p-5 m-5"
                  >
                    Portfolio
                  </NavLink>
                </div>
                <br/>
                <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-5">
                  <NavLink 
                    to="/contact" 
                    className="bg-blue-500 text-white p-5 m-5"
                  >
                    Contact
                  </NavLink>
                </div>
                <br/><br/>
              </div>
            </div>
          </div>
          <img 
            src={engagementKiss}
            alt="Engagement Kiss"
            className="lg:m-10 lg:m-5 mb-5 lg:w-2/5 lg:h-2/5"
          />
        </section>
        <div className="lg:m-32 m-14">
            <p className="lg:text-6xl text-2xl content-center items-center text-center">
            “I really have NO WORDS!…We had SO MUCH fun taking our pictures. This is everything I imagined and more!!!”
            </p>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
            <p className="lg:text-4xl text-xl content-center items-center text-center">
              -sydney
            </p>
        </div>
        <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl lg:flex p-5 mt-10">
          <div className="lg:p-20">
            <div className="lg:flex content-center items-center text-center justify-center lg:ml-6">
              <div>
                <img 
                  src={weddingFlowers}
                  alt="Wedding Couple"
                  className="lg:m-10 lg:w-4/5 lg:h-4/5"
                />
                <h2 className="text-3xl mt-5">
                  Weddings
                </h2>
                <h3>
                  Starting at <span className="text-blue-800">$175/hr</span>
                </h3>
                <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                  <NavLink 
                    to="/pricing" 
                    className="bg-blue-500 text-white p-5 m-5"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
              <div>
                <img 
                  src={fieldLove}
                  alt="Field Love"
                  className="lg:m-10 lg:w-4/5 lg:h-4/5"
                />
                <h2 className="text-3xl mt-5">
                  Engagements
                </h2>
                <h3>
                  <span className="text-blue-800">FREE</span> when you book a wedding
                </h3>
                <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                  <NavLink 
                    to="/pricing" 
                    className="bg-blue-500 text-white p-5 m-5"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
              <div>
                <img 
                  src={pillowFight}
                  alt="Pillow Fight"
                  className="lg:m-10 lg:w-4/5 lg:h-4/5"
                />
                <h2 className="text-3xl mt-5">
                  Couples
                </h2>
                <h3>
                  Starting at <span className="text-blue-800">$150</span>
                </h3>
                <div className="transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-10">
                  <NavLink 
                    to="/pricing" 
                    className="bg-blue-500 text-white p-5 m-5"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
            <hr style={{ borderTop: "solid black 1px" }} className="m-5" />
          </div>
        </section>
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
      </div>
    </main>
  )
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import cakeKiss from '../img/cake-kiss.jpeg';
import walkingLovers from '../img/walking-lovers.jpeg';
import holdingHands from '../img/holding-hands.jpeg';
import fallLovers from '../img/fall-lovers.jpeg';
import FadeInSection from './FadeInSection';

export default function Pricing() {
  return (
    <main className="relative bg-gray-100">
      <div className="lg:p-10 p-1 container mx-auto relative">
        <FadeInSection>
          <h1 className="text-center mt-5 lg:text-7xl text-5xl">
            Pricing and Packages
          </h1>
          <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-2">
            <div className="lg:flex">
              <div className="flex-column">
                <h1 className="lg:text-6xl text-4xl">
                  Ok, the details...
                </h1>
                <p className="lg:text-3xl text-xl p-6">
                  Before you ask me to be your third wheel, you probably want to know what 
                  you’re getting and for how much!
                  <br/><br/>
                  Here you’ll find our three possible session 
                  types and the 411 behind each.
                  <br/><br/>
                  Because i want us to be on the same 
                  page, if you still have any unanswered questions, just let us know in
                  your <span className="text-blue-800 hover:underline"> 
                        <NavLink 
                          to="/contact"
                        >
                          inquiry message.
                        </NavLink>
                      </span> 
                </p>
                <hr style={{ borderTop: "solid black 1px" }} className="lg:mb-16 mt-5" />
                <div className="content-center items-center justify-center text-center lg:ml-6 pt-4">
                  <h1 className="text-5xl">
                    Jump to...
                  </h1>
                </div>
                <div className="lg:flex md:flex content-center items-center justify-center m-10">
                  <div className="text-center transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-16">
                    <Link 
                      to="/pricing#weddings" 
                      className="text-xl bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      Weddings
                    </Link>
                  </div>
                  <div className="text-center transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-16">
                    <Link 
                      to="/pricing#engagements" 
                      className="text-xl bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      Engagements
                    </Link>
                  </div>
                  <div className="text-center transition duration-500 ease-in-out transform hover:scale-150 mt-10 mb-16">
                    <Link 
                      to="/pricing#couples" 
                      className="text-xl bg-white border-2 border-black hover:bg-black hover:text-white p-5 m-5"
                    >
                      Couples
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-column">
                <img 
                  src={cakeKiss}
                  alt="Cake Kiss"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="weddings" className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
            <div className="lg:flex">
              <div className="flex-column">
                <img 
                  src={walkingLovers}
                  alt="Walking Lovers"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="flex-column lg:p-16">
                <h1 className="lg:text-6xl text-4xl text-center">
                  The Wedding Package
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                <div className="lg:flex">
                  <div className="flex-column text-center lg:p-8 p-8">
                    <h3 className="lg:text-4xl text-3xl font-bold">
                      Pack 1
                    </h3>
                    <h6 className="text-blue-800 text-2xl">
                      $800
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left text-xl list-disc">
                      <li>Up to 4 hours of coverage</li>
                      <li>2 Photographers</li>
                      <li>Personal Online Gallery</li>
                      <li>Free Consultation</li>
                      <li>Polaroids of Your Day</li>
                    </ul>
                  </div>
                  <div className="flex-column text-center p-8">
                    <h3 className="lg:text-4xl text-3xl font-bold">
                      Pack 2
                    </h3>
                    <h6 className="text-blue-800 text-2xl">
                      $1,400
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left text-xl list-disc">
                      <li>Up to 8 hours of coverage</li>
                      <li>2 Photographers</li>
                      <li>Personal Online Gallery</li>
                      <li>Free Consultation</li>
                      <li>Polaroids of Your Day</li>
                      <li>Free Engagement Session</li>
                    </ul>
                  </div>
                  <div className="flex-column text-center p-8">
                    <h3 className="lg:text-4xl text-3xl font-bold">
                      Pack 3
                    </h3>
                    <h6 className="text-blue-800 text-2xl">
                      $1650
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left text-xl list-disc">
                      <li>Up to 10 hours of coverage</li>
                      <li>2 Photographers</li>
                      <li>Personal Online Gallery</li>
                      <li>Free Consultation</li>
                      <li>Polaroids of Your Day</li>
                      <li>Free Engagement Session</li>
                      <li>30% Off Your Next Booked Couples Session</li>
                    </ul>
                  </div>
                </div>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3 mb-8" />
                <div className="items-center text-center content-center justify-center">
                  <h1 className="lg:text-5xl text-3xl lg:mb-16 mb-8">
                    Ready to Book a Session?
                  </h1>
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 lg:content-center lg:items-center text-xl text-center mt-5 mb-10">
                      <NavLink 
                        to="/contact" 
                        className="animate-pulse bg-white border-2 border-black hover:bg-black hover:text-white p-5"
                      >
                        Let's Chat!
                      </NavLink>
                    </div>
                  </div>
                </div>
            </div>
            <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
            <div className="text-2xl lg:text-right">
              <p>
                *hourly pricing or additional hours available at a rate of $200 per hour 
              </p>
              <p>
                *15% non-refundable deposits required to book
              </p>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="engagements" className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
            <div className="lg:flex">
              <div className="flex-column lg:p-16">
                <h1 className="lg:text-6xl text-4xl text-center">
                  The Engagement Package
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                <div className="lg:flex">
                  <div className="flex-column text-center lg:p-8 p-8">
                    <h3 className="lg:text-4xl text-3xl font-bold">
                      Pack 1
                    </h3>
                    <h6 className="text-blue-800 text-2xl">
                      $150*
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left text-xl list-disc">
                      <li>1 Outfit, One Location</li>
                      <li>About 1 Hour</li>
                      <li>All Images Edited and Delivered (about 80-120 photos)</li>
                      <li>Personal Online Gallery</li>
                      <li>For One Couple</li>
                    </ul>
                  </div>
                  <div className="flex-column text-center p-8">
                    <h3 className="lg:text-4xl text-3xl font-bold">
                      Pack 2
                    </h3>
                    <h6 className="text-blue-800 text-2xl">
                      $200
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left text-xl list-disc">
                      <li>2 Outfits, 2 Locations</li>
                      <li>About 2 Hours</li>
                      <li>Personal Online Gallery</li>
                      <li>All Images Edited and Delivered (about 120-160 photos)</li>
                      <li>For One Couple</li>
                      <li className="text-blue-800">30% off Your Next Couples Session</li>
                    </ul>
                  </div>
                </div>
                <br/>
                <p className="text-center">
                  *free when you book a wedding
                </p>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3 mb-8" />
                <div className="items-center text-center content-center justify-center">
                  <h1 className="lg:text-5xl text-3xl lg:mb-16 mb-8">
                    Ready to Book a Session?
                  </h1>
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 lg:content-center lg:items-center text-xl text-center mt-5 mb-10">
                      <NavLink 
                        to="/contact" 
                        className="animate-pulse bg-white border-2 border-black hover:bg-black hover:text-white p-5"
                      >
                        Let's Chat!
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="flex-column">
                <img 
                  src={holdingHands}
                  alt="Holding Hands"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
            <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
            <div className="text-2xl">
              <ul className="list-disc p-3">
                <li>
                  Package 1 is by far our most popular package and provides the most value!
                </li>
                <br/>
                <li>
                  Package two is for our couples who are looking to get a little bit more out of 
                  a session. this package is good if you can’t quite decide on a location or want a second look.
                </li>
              </ul>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="couples" className="transition duration-500 ease-in-out transform hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-10">
            <div className="lg:flex">
              <div className="flex-column">
                <img 
                  src={fallLovers}
                  alt="Autumn Lovers"
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="flex-column lg:p-16">
                <h1 className="lg:text-6xl text-4xl text-center">
                  The Couples Package
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                <div className="lg:flex">
                  <div className="flex-column text-center lg:p-8 p-8">
                    <h3 className="lg:text-4xl text-3xl font-bold">
                      Pack 1
                    </h3>
                    <h6 className="text-blue-800 text-2xl">
                      $150
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left text-xl list-disc">
                      <li>1 Outfit, One Location</li>
                      <li>About 1 Hour</li>
                      <li>All Images Edited and Delivered (about 80-120 photos)</li>
                      <li>Personal Online Gallery</li>
                      <li>For One Couple</li>
                    </ul>
                  </div>
                  <div className="flex-column text-center p-8">
                    <h3 className="lg:text-4xl text-3xl font-bold">
                      Pack 2
                    </h3>
                    <h6 className="text-blue-800 text-2xl">
                      $200
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left text-xl list-disc">
                      <li>2 Outfits, 2 Locations</li>
                      <li>About 2 Hours</li>
                      <li>Personal Online Gallery</li>
                      <li>All Images Edited and Delivered (about 120-160 photos)</li>
                      <li>For One Couple</li>
                      <li className="text-blue-800">30% off Your Next Couples or Engagement Session</li>
                    </ul>
                  </div>
                </div>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3 mb-8" />
                <div className="items-center text-center content-center justify-center">
                  <h1 className="lg:text-5xl text-3xl lg:mb-16 mb-8">
                    Ready to Book a Session?
                  </h1>
                  <div className="transition duration-500 ease-in-out transform hover:scale-150 lg:content-center lg:items-center text-xl text-center mt-5 mb-10">
                      <NavLink 
                        to="/contact" 
                        className="animate-pulse bg-white border-2 border-black hover:bg-black hover:text-white p-5"
                      >
                        Let's Chat!
                      </NavLink>
                    </div>
                  </div>
                </div>
            </div>
            <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
            <div className="text-2xl">
              <ul className="list-disc p-3">
                <li>
                  Package 1 is by far our most popular package and provides the most value!
                </li>
                <br/>
                <li>
                  Package two is for our couples who are looking to get a little bit more out of 
                  a session. this package is good if you can’t quite decide on a location or want a second look.
                </li>
              </ul>
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>
  )
}
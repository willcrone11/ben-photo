import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import cakeKiss from '../img/cake-kiss.webp';
import walkingLovers from '../img/walking-lovers.webp';
import holdingHands from '../img/holding-hands.webp';
import fallLovers from '../img/fall-lovers.webp';
import behindKiss from '../img/behind-kiss.webp';
import loversBlanket from '../img/lovers-blanket.webp';
import loversHeadTouch from '../img/lovers-head-touch.webp';
import FadeInSection from './FadeInSection';

export default function Pricing() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <main className="relative bg-gray-100">
      <div className="lg:p-10 p-1 sm:container mx-auto relative">
        <FadeInSection>
          <h1 className="text-center mt-5 2xl:text-8xl lg:text-7xl text-5xl">
            Pricing and Packages
          </h1>
          <hr style={{ borderTop: "solid black 1px" }} className="mb-10 mt-5" />
        </FadeInSection>
        <FadeInSection>
          <section className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 mt-2">
            <div className="lg:flex">
              <div className="flex-column 2xl:p-8 xl:p-8 xl:p-8">
                <h1 className="xl:text-6xl lg:text-5xl 2xl:text-8xl text-4xl">
                  Ok, the details...
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="mt-3" />
                <p className="2xl:text-4xl xl:text-3xl lg:text-base text-xl lg:p-6 mt-3">
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
                <hr style={{ borderTop: "solid black 1px" }} className="lg:mb-3 mt-5" />
                <div className="content-center items-center justify-center text-center lg:ml-6 pt-4">
                  <h1 className="2xl:text-7xl xl:text-5xl lg:text-3xl text-3xl 2xl:mb-8">
                    Jump to...
                  </h1>
                </div>
                <div className="xs:flex content-center items-center justify-center lg:p-3">
                  <div className="text-center transition duration-500 ease-in-out transform 2xl:hover:scale-105 lg:hover:scale-110 md:hover:scale-110 xl:hover:scale-110 mt-10 mb-16">
                    <Link 
                      to="/pricing#weddings" 
                      className="2xl:text-3xl lg:text-xl md:text-xl xl:text-xl text-sm bg-white border-2 border-black hover:bg-black hover:text-white p-5 lg:m-5 md:m-5 xl:m-5 m-1 xs:mb-0 xxs:mb-3"
                    >
                      Weddings
                    </Link>
                  </div>
                  <div className="text-center transition duration-500 ease-in-out transform 2xl:hover:scale-105 lg:hover:scale-110 md:hover:scale-110 xl:hover:scale-110 mt-10 mb-16">
                    <Link 
                      to="/pricing#engagements" 
                      className="2xl:text-3xl lg:text-xl md:text-xl xl:text-xl text-sm bg-white border-2 border-black hover:bg-black hover:text-white p-5 lg:m-6 md:m-5 xl:m-6 m-1 xs:mb-0 xxs:mb-3"
                    >
                      Engagements
                    </Link>
                  </div>
                  <div className="text-center transition duration-500 ease-in-out transform 2xl:hover:scale-105 lg:hover:scale-110 md:hover:scale-110 xl:hover:scale-110 mt-10 mb-16">
                    <Link 
                      to="/pricing#couples" 
                      className="2xl:text-3xl lg:text-xl md:text-xl xl:text-xl text-sm bg-white border-2 border-black hover:bg-black hover:text-white p-5 lg:m-5 md:m-5 xl:m-5 m-1"
                    >
                      Couples
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-column">
                <img 
                  src={cakeKiss}
                  alt=""
                  className="items-center content-center xl:m-4 xl:p-4 mb-4"
                />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="weddings" className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 md:mt-20 mt-5">
            <div className="xl:flex">
              <div className="flex-column">
                <img 
                  src={walkingLovers}
                  alt=""
                  className="items-center content-center xl:m-4 mb-4 "
                />
                <img 
                  src={loversHeadTouch}
                  alt=""
                  className="items-center content-center xl:m-4 mb-4 "
                />
              </div>
              <div className="flex-column xl:p-14 lg:p-3">
                <h1 className="2xl:text-8xl xl:text-6xl lg:text-6xl md:text-5xl text-5xl text-center">
                  The Wedding Package
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                <div className="lg:flex">
                  <div className="flex-column text-center p-4">
                    <h3 className="2xl:text-5xl xl:text-4xl text-3xl font-bold">
                      Pack 1
                    </h3>
                    <h6 className="text-2xl">
                      $1000
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left 2xl:text-2xl text-xl 2xl:p-4 list-disc">
                      <li>Up to 4 hours of coverage</li><br/>
                      <li>2 Photographers</li><br/>
                      <li>Personal Online Gallery</li><br/>
                      <li>Free Consultation</li><br/>
                      <li>Polaroids of Your Day</li><br/>
                    </ul>
                  </div>
                  <div className="flex-column text-center p-4">
                    <h3 className="2xl:text-5xl xl:text-4xl text-3xl font-bold">
                      Pack 2
                    </h3>
                    <h6 className="text-2xl">
                      $1,850
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left 2xl:text-2xl text-xl 2xl:p-4 list-disc">
                      <li>Up to 8 hours of coverage</li><br/>
                      <li>2 Photographers</li><br/>
                      <li>Personal Online Gallery</li><br/>
                      <li>Free Consultation</li><br/>
                      <li>Polaroids of Your Day</li><br/>
                      <li>Free Engagement Session</li><br/>
                    </ul>
                  </div>
                  <div className="flex-column text-center p-4">
                    <h3 className="2xl:text-5xl xl:text-4xl text-3xl font-bold">
                      Pack 3
                    </h3>
                    <h6 className="text-2xl">
                      $2,200
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left 2xl:text-2xl text-xl 2xl:p-4 list-disc">
                      <li>Up to 10 hours of coverage</li><br/>
                      <li>2 Photographers</li><br/>
                      <li>Personal Online Gallery</li><br/>
                      <li>Free Consultation</li><br/>
                      <li>Polaroids of Your Day</li><br/>
                      <li>Free Engagement Session</li><br/>
                      <li>30% Off Your Next Booked Couples Session</li><br/>
                    </ul>
                  </div>
                </div>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3 mb-8" />
                <div className="items-center text-center content-center justify-center">
                  <h1 className="2xl:text-7xl lg:text-5xl text-3xl lg:mb-16 2xl:mb-20 mb-10">
                    Ready to Book a Session?
                  </h1>
                  <div className="transition duration-500 ease-in-out transform lg:hover:scale-110 lg:content-center lg:items-center 2xl:text-4xl text-xl text-center mt-5 mb-10">
                      <NavLink 
                        to="/contact" 
                        className="animate-pulse bg-white border-2 border-black hover:bg-black hover:text-white p-5"
                      >
                        Contact Us!
                      </NavLink>
                    </div>
                  </div>
                </div>
            </div>
            <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
            <div className="md:text-2xl text-lg xl:text-right">
              <p>
                *hourly pricing or additional hours available at a rate of $200 per hour 
              </p>
              <p>
                *15% non-refundable deposit required to book
              </p>
              <p>
                *A mileage-based travel fee will be added for events not located in Cuyahoga or an immediately adjacent county
              </p>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="engagements" className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 md:mt-20 mt-5">
            <div className="xl:flex">
              <div className="flex-column lg:p-10">
                <h1 className="2xl:text-8xl xl:text-6xl lg:text-6xl md:text-5xl text-5xl text-center">
                  The Engagement Package
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                <div className="lg:flex">
                  <div className="flex-column text-center lg:p-8 p-8">
                    <h3 className="2xl:text-5xl lg:text-4xl text-3xl font-bold">
                      Pack 1
                    </h3>
                    <h6 className="text-2xl">
                      $150*
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left 2xl:text-3xl lg:text-2xl text-xl list-disc">
                      <li>1 Outfit, 1 Location</li><br/>
                      <li>About 1 Hour</li><br/>
                      <li>All Images Edited and Delivered (about 80-120 photos)</li><br/>
                      <li>Personal Online Gallery</li><br/>
                      <li>For 1 Couple</li><br/>
                    </ul>
                  </div>
                  <div className="flex-column text-center p-8">
                    <h3 className="2xl:text-5xl lg:text-4xl text-3xl font-bold">
                      Pack 2
                    </h3>
                    <h6 className="text-2xl">
                      $200
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left 2xl:text-3xl lg:text-2xl text-xl list-disc">
                      <li>2 Outfits, 2 Locations</li><br/>
                      <li>About 2 Hours</li><br/>
                      <li>Personal Online Gallery</li><br/>
                      <li>All Images Edited and Delivered (about 120-160 photos)</li><br/>
                      <li>For 1 Couple</li><br/>
                      <li>30% off Your Next Couples Session</li><br/>
                    </ul>
                  </div>
                </div>
                <br/>
                <p className="mb-3">
                  *free when you book a wedding
                </p>
                <p>
                  A mileage-based travel fee will be added for events not located in Cuyahoga or an immediately adjacent county
                </p>
                <hr style={{ borderTop: "solid black 1px" }} className="mt-2 mb-2" />
                <div className="2xl:text-2xl xl:text-xl md:text-2xl text-lg">
                  <ul className="list-disc p-3">
                    <li>
                      Package 1 is by far our most popular package and provides the most value!
                    </li>
                    <br/>
                    <li>
                      Package 2 is for our couples who are looking to get a little bit more out of 
                      a session. this package is good if you can’t quite decide on a location or want a second look.
                    </li>
                  </ul>
                </div>
                <hr style={{ borderTop: "solid black 1px" }} className="mb-8 mt-3" />
                <div className="items-center text-center content-center justify-center">
                  <h1 className="2xl:text-7xl lg:text-5xl text-3xl lg:mb-16 2xl:mb-20 mb-10">
                    Ready to Book a Session?
                  </h1>
                  <div className="transition duration-500 ease-in-out transform lg:hover:scale-110 lg:content-center lg:items-center text-xl 2xl:text-4xl text-center mt-5 mb-10">
                      <NavLink 
                        to="/contact" 
                        className="animate-pulse bg-white border-2 border-black hover:bg-black hover:text-white p-5"
                      >
                        Contact Us!
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="flex-column">
                <img 
                  src={holdingHands}
                  alt=""
                  className="items-center content-center lg:m-4 mb-4 "
                />
                <img 
                  src={behindKiss}
                  alt=""
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section id="couples" className="transition duration-500 ease-in-out transform lg:hover:scale-105 bg-white rounded-lg shadow-2xl p-5 md:mt-20 mt-5">
            <div className="xl:flex">
              <div className="flex-column">
                <img 
                  src={fallLovers}
                  alt=""
                  className="items-center content-center lg:m-4 mb-4 "
                />
                <img 
                  src={loversBlanket}
                  alt=""
                  className="items-center content-center lg:m-4 mb-4 "
                />
              </div>
              <div className="flex-column lg:p-10">
                <h1 className="2xl:text-8xl xl:text-6xl lg:text-6xl md:text-5xl text-5xl text-center">
                  The Couples Package
                </h1>
                <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                <div className="lg:flex">
                  <div className="flex-column text-center lg:p-8 p-8">
                    <h3 className="2xl:text-5xl lg:text-4xl text-3xl font-bold">
                      Pack 1
                    </h3>
                    <h6 className="text-2xl">
                      $150
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left 2xl:text-3xl lg:text-2xl text-xl list-disc">
                      <li>1 Outfit, 1 Location</li><br/>
                      <li>About 1 Hour</li><br/>
                      <li>All Images Edited and Delivered (about 80-120 photos)</li><br/>
                      <li>Personal Online Gallery</li><br/>
                      <li>For 1 Couple</li><br/>
                    </ul>
                  </div>
                  <div className="flex-column text-center p-8">
                    <h3 className="2xl:text-5xl lg:text-4xl text-3xl font-bold">
                      Pack 2
                    </h3>
                    <h6 className="text-2xl">
                      $200
                    </h6>
                    <hr style={{ borderTop: "solid black 1px" }} className="m-3" />
                    <ul className="text-left 2xl:text-3xl lg:text-2xl text-xl list-disc">
                      <li>2 Outfits, 2 Locations</li><br/>
                      <li>About 2 Hours</li><br/>
                      <li>Personal Online Gallery</li><br/>
                      <li>All Images Edited and Delivered (about 120-160 photos)</li><br/>
                      <li>For 1 Couple</li><br/>
                      <li>30% off Your Next Couples or Engagement Session</li><br/>
                    </ul>
                  </div>
                </div>
                <p>
                  A mileage-based travel fee will be added for events not located in Cuyahoga or an immediately adjacent county
                </p>
                <hr style={{ borderTop: "solid black 1px" }} className="mt-2 mb-3"/>
                <div className="2xl:text-2xl xl:text-xl md:text-2xl text-lg">
                  <ul className="list-disc p-3">
                    <li>
                      Package 1 is by far our most popular package and provides the most value!
                    </li>
                    <br/>
                    <li>
                      Package 2 is for our couples who are looking to get a little bit more out of 
                      a session. this package is good if you can’t quite decide on a location or want a second look.
                    </li>
                  </ul>
                </div>
                <hr style={{ borderTop: "solid black 1px" }} className="mt-3 mb-8" />
                <div className="items-center text-center content-center justify-center">
                  <h1 className="2xl:text-6xl lg:text-5xl text-3xl lg:mb-16 mb-10">
                    Ready to Book a Session?
                  </h1>
                  <div className="transition duration-500 ease-in-out transform lg:hover:scale-110 lg:content-center lg:items-center 2xl:text-3xl text-xl text-center mt-5 mb-10">
                      <NavLink 
                        to="/contact" 
                        className="animate-pulse bg-white border-2 border-black hover:bg-black hover:text-white p-5"
                      >
                        Contact Us!
                      </NavLink>
                    </div>
                  </div>
                </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>
  )
}
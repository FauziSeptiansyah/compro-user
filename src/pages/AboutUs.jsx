import React from "react";
import { Layout } from "../layout/Layout";
import imghero from "../assets/img/hero-img.png";
import imgabout from "../assets/img/about.png";
import imgvismis from "../assets/img/unsplash_AQTA5E6mCNU.png";
import imgteam1 from "../assets/img/unsplash_E9PFbdhZmus.png";
import imgteam2 from "../assets/img/unsplash_dt60oksDTx8.png";
import imgteam3 from "../assets/img/unsplash_4uj3iZ5m084.png";
import imgteam4 from "../assets/img/unsplash_WMD64tMfc4k.png";
import imgteam5 from "../assets/img/unsplash_oTweoxMKdkA.png";
import imgteam6 from "../assets/img/unsplash_N5GCRjEMboQ.png";
import imgteam7 from "../assets/img/unsplash_3TLl_97HNJo.png";
import { Button } from "../components/Button";

export const AboutUs = () => {
  const teamMembers = [
    { id: 1, image: imgteam1 },
    { id: 2, image: imgteam2 },
    { id: 3, image: imgteam3 },
    { id: 4, image: imgteam4 },
    { id: 5, image: imgteam5 },
    { id: 6, image: imgteam6 },
    { id: 7, image: imgteam7 },
  ];

  return (
    <Layout>
      {/* <!-- Hero Section --> */}
      <section className="min-w-7xl relative min-h-screen">
        {/* <!-- Background hero --> */}
        <img
          src={imghero}
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* <!-- gradient --> */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

        {/* <!-- Tagline --> */}
        <div className="items-centr relative -top-28 z-10 flex min-h-screen flex-col justify-center text-center">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
          <div className="flex items-center justify-center">
            <span className="text-sm text-yellow-400">HOME</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17L15 12L10 7"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-yellow-400">COMPANY</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17L15 12L10 7"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-yellow-400">ABOUT US</span>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className="relative -top-56 z-10 px-8">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-2 md:grid-cols-2">
          {/* <!-- About Us img --> */}
          <div className="flex justify-center">
            <img
              src={imgabout}
              alt="About Us"
              className="h-[550px] w-[550px]"
            />
          </div>

          {/* <!-- About Us text --> */}
          <div>
            <h3 className="text-sm font-bold uppercase text-red-500">
              About Us
            </h3>
            <h1 className="text-3xl font-semibold text-white mt-4">
              Find out more about our business consulting
            </h1>
            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              consequatur eius velit sed, consectetur nihil omnis...
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Vision & Mission --> */}
      <section className="relative bg-black -top-20">
        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 items-center mx-auto">
            {/* <!-- Text Section --> */}
            <div className="flex justify-center items-center px-4">
              <div className="space-y-8 text-center">
                {/* <!-- Vision --> */}
                <div className="items-center text-center">
                  <h3 className="text-sm font-bold uppercase text-red-500">
                    Our Vision
                  </h3>
                  <h1 className="text-3xl font-bold text-white">Our Vision</h1>
                  <p className="mt-2 leading-relaxed text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur eget eros eu sem cursus gravida. Sed at sem sed
                    sollicitudin condimentum.
                  </p>
                </div>
                {/* <!-- Mission --> */}
                <div className="items-center text-center">
                  <h3 className="text-sm font-bold uppercase text-red-500">
                    Our Mission
                  </h3>
                  <h1 className="text-3xl font-bold text-white">Our Mission</h1>
                  <p className="mt-2 leading-relaxed text-gray-300">
                    We make it easy for anyone in the world to launch and grow
                    their online presence. Through dedication, high-quality
                    products, and reliable support.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Image Section --> */}
            <div className="relative flex justify-center items-center -top-28">
              <img
                src={imgvismis}
                alt="People working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team Section --> */}
      <section className="relative py-10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-sm font-bold uppercase text-red-500">crew</h3>
            <h1 className="mb-8 text-3xl font-bold text-white">
              Meet the crew
            </h1>
            <p className="mb-10">
              We’re a friendly group of designers, developers, testers, and
              marketers.
            </p>
          </div>
          {/* <!-- Horizontal Scroll --> */}
          <div className="flex space-x-4 overflow-x-scroll">
            {teamMembers &&
              teamMembers.map((team) => <img key={team.id} src={team.image} />)}
          </div>
        </div>
      </section>

      {/* <!-- Join Us --> */}
      <section className="py-16">
        <div className="container mx-auto flex justify-center px-6">
          {/* <!-- Card --> */}
          <div className="w-full bg-black p-10 text-center shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Interested in joining the crew?
            </h2>
            <p className="mb-6 text-white">
              Whether you're a budding programmer, creative designer, talented
              developer, detail-oriented tester, or visionary marketer, we'd
              love to hear your stories and skills! Conversation with us, a
              place where every talent is valued and every idea has a chance to
              thrive.
            </p>
            <Button>JOIN US</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

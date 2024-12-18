import React from "react";
import { Layout } from "../layout/Layout";
import imghero from "../assets/img/tower.png";
import imgcarrer from "../assets/img/Group 163.png";
import imgEngineer from "../assets/img/engineering.png.png";
import imgHumanCap from "../assets/img/human-capital.png.png";
import imgBusiness from "../assets/img/business.png.png";
import imgDeveloper from "../assets/img/development.png.png";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const Career = () => {
  const hiring = [
    {
      id: 1,
      title: "Technical Test",
      image: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.8379 56.25L37.5879 60H7.5V7.5H22.5C22.5 6.46484 22.6953 5.49805 23.0859 4.59961C23.4766 3.70117 24.0137 2.90039 24.6973 2.19727C25.3809 1.49414 26.1719 0.957031 27.0703 0.585938C27.9688 0.214844 28.9453 0.0195312 30 0C31.0352 0 32.002 0.195313 32.9004 0.585938C33.7988 0.976562 34.5996 1.51367 35.3027 2.19727C36.0059 2.88086 36.543 3.67188 36.9141 4.57031C37.2852 5.46875 37.4805 6.44531 37.5 7.5H52.5V37.5879L48.75 41.3379V11.25H45V18.75H15V11.25H11.25V56.25H33.8379ZM18.75 11.25V15H41.25V11.25H33.75V7.5C33.75 6.97266 33.6523 6.48438 33.457 6.03516C33.2617 5.58594 32.998 5.19531 32.666 4.86328C32.334 4.53125 31.9336 4.25781 31.4648 4.04297C30.9961 3.82812 30.5078 3.73047 30 3.75C29.4727 3.75 28.9844 3.84766 28.5352 4.04297C28.0859 4.23828 27.6953 4.50195 27.3633 4.83398C27.0312 5.16602 26.7578 5.56641 26.543 6.03516C26.3281 6.50391 26.2305 6.99219 26.25 7.5V11.25H18.75ZM59.4434 42.5684L43.125 58.916L35.2441 51.0059L37.8809 48.3691L43.125 53.584L56.8066 39.9316L59.4434 42.5684Z"
            fill="white"
          />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Interview",
      image: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.125 47.25H30.375C30.375 39.194 33.5752 31.468 39.2716 25.7716C44.968 20.0752 52.694 16.875 60.75 16.875V23.625C47.6888 23.625 37.125 34.1888 37.125 47.25ZM60.75 37.125V30.375C51.435 30.375 43.875 37.935 43.875 47.25H50.625C50.625 41.6475 55.1475 37.125 60.75 37.125ZM23.625 13.5C23.625 9.75375 20.6213 6.75 16.875 6.75C13.1287 6.75 10.125 9.75375 10.125 13.5C10.125 17.2463 13.1287 20.25 16.875 20.25C20.6213 20.25 23.625 17.2463 23.625 13.5ZM38.6437 15.1875H31.8937C31.5085 17.548 30.2946 19.694 28.47 21.2404C26.6453 22.7867 24.3293 23.6322 21.9375 23.625H11.8125C9.01125 23.625 6.75 25.8862 6.75 28.6875V37.125H27V29.4975C30.1248 28.5075 32.8919 26.6254 34.9607 24.0828C37.0295 21.5403 38.3098 18.4483 38.6437 15.1875ZM64.125 57.375C67.8713 57.375 70.875 54.3713 70.875 50.625C70.875 46.8787 67.8713 43.875 64.125 43.875C60.3787 43.875 57.375 46.8787 57.375 50.625C57.375 54.3713 60.3787 57.375 64.125 57.375ZM69.1875 60.75H59.0625C54 60.75 49.9163 57.105 49.1063 52.3125H42.3563C43.0312 59.0625 47.7225 64.6312 54 66.6225V74.25H74.25V65.8125C74.25 63.0112 71.9887 60.75 69.1875 60.75Z"
            fill="white"
          />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Final Decision",
      image: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.0417 20.75H48.4167L59.7946 9.3375C60.1161 9.01335 60.4986 8.75607 60.92 8.5805C61.3415 8.40492 61.7935 8.31453 62.25 8.31453C62.7066 8.31453 63.1586 8.40492 63.58 8.5805C64.0015 8.75607 64.384 9.01335 64.7054 9.3375L73.628 18.2946C74.2721 18.9425 74.6336 19.8191 74.6336 20.7327C74.6336 21.6463 74.2721 22.5229 73.628 23.1708L65.7084 31.125H38.0417V38.0417C38.0417 38.9589 37.6773 39.8385 37.0288 40.4871C36.3802 41.1356 35.5006 41.5 34.5834 41.5C33.6662 41.5 32.7865 41.1356 32.138 40.4871C31.4894 39.8385 31.125 38.9589 31.125 38.0417V27.6667C31.125 25.8323 31.8538 24.073 33.1509 22.7758C34.448 21.4787 36.2073 20.75 38.0417 20.75ZM17.2917 38.0417V51.875L9.37211 59.7946C8.728 60.4426 8.36646 61.3191 8.36646 62.2327C8.36646 63.1464 8.728 64.0229 9.37211 64.6708L18.2946 73.6279C18.6161 73.9521 18.9986 74.2093 19.42 74.3849C19.8415 74.5605 20.2935 74.6509 20.75 74.6509C21.2066 74.6509 21.6586 74.5605 22.08 74.3849C22.5015 74.2093 22.8839 73.9521 23.2054 73.6279L38.0417 58.7917H51.875C52.7922 58.7917 53.6719 58.4273 54.3204 57.7787C54.969 57.1302 55.3334 56.2505 55.3334 55.3333V51.875H58.7917C59.7089 51.875 60.5885 51.5106 61.2371 50.8621C61.8857 50.2135 62.25 49.3339 62.25 48.4167V44.9583H65.7084C66.6256 44.9583 67.5052 44.594 68.1538 43.9454C68.8023 43.2968 69.1667 42.4172 69.1667 41.5V38.0417H44.9584V41.5C44.9584 43.3344 44.2296 45.0937 42.9325 46.3908C41.6354 47.6879 39.8761 48.4167 38.0417 48.4167H31.125C29.2906 48.4167 27.5313 47.6879 26.2342 46.3908C24.9371 45.0937 24.2084 43.3344 24.2084 41.5V31.125L17.2917 38.0417Z"
            fill="white"
          />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const opportunities = [
    {
      id: 1,
      title: "Engineer",
      image: imgEngineer,
      slug: "engineer",
      description: "Join our Engineering team! We’re looking for talented individuals like Web Developers, Mobile Developers, Quality Assurance, and System Administrators to drive technological integration in Indonesia. It’s time to unlock your potential with us!",
      reverse: false, // Gambar di kiri, teks di kiri
    },
    {
      id: 2,
      title: "Human Capital",
      image: imgHumanCap,
      slug: "human-capital",
      description: "Be a part of our Human Capital team! We have exciting career opportunities for HR Administration, Legal Officer, HR General Affairs, and Talent Acquisition roles. Together, let’s elevate human resource development in Indonesia.",
      reverse: true, // Gambar di kiri, teks di kanan
    },
    {
      id: 3,
      title: "Bussiness",
      image: imgBusiness,
      slug: "bussiness",
      description: "Lead digital transformation with our Business team! Join us as a Presales Executive, Digital Marketing specialist, Content Strategist, or Graphic Designer, and contribute to a more innovative digital future in Indonesia.",
      reverse: false, // Gambar di kiri, teks di kiri
    },
    {
      id: 4,
      title: "Development",
      image: imgDeveloper,
      slug: "development",
      description: "Shape a brighter future with our Development team! We’re seeking Project Managers, System Analysts, and UI/UX Designers ready to make a positive impact and drive Indonesia’s growth forward!",
      reverse: true, // Gambar di kiri, teks di kanan
    },
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
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent"></div>

        {/* <!-- Tagline --> */}
        <div className="items-centr relative -top-28 z-10 flex min-h-screen flex-col justify-center text-center">
          <h1 className="text-5xl font-bold text-white">Carrer</h1>
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
            <span className="text-sm text-yellow-400">CARRER</span>
          </div>
        </div>
      </section>

      {/* <!-- About Career Section --> */}
      <section className="relative -top-56 z-10 px-8">
        <div className="container mx-auto grid grid-cols-1 justify-center p-8 md:grid-cols-2">
          {/* <!-- About Career text --> */}
          <div className="flex max-w-4xl flex-col">
            <h3 className="text-sm font-bold uppercase text-red-500">CARRER</h3>
            <h1 className="text-3xl font-semibold text-white">
              Work With Us
            </h1>
            <p className="mt-4 text-gray-300">
              Are you passionate about creating and creating new breakthroughs?
            </p>
            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              consequatur eius velit sed, consectetur nihil omnis...
            </p>
          </div>

          {/* <!-- About Career img --> */}
          <div className="flex justify-center">
            <img src={imgcarrer} alt="About Us" className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* <!-- Hiring Process Section --> */}
      <section className="relative -top-40 bg-black p-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h3 className="text-sm font-bold uppercase text-red-500">Hiring</h3>
            <h1 className="text-3xl font-semibold text-white">
              Hiring Process
            </h1>
          </div>
          <div className="grid grid-cols-1 items-center justify-center space-x-10 md:grid-cols-3">
            {/* <!-- progres 1 --> */}
            {hiring &&
              hiring.map((hiring) => (
                <div key={hiring.id} className="text-center">
                  <div className="mx-auto mb-8 flex gap-10 rounded-full bg-gradient-to-r from-red-500/80 to-transparent p-2 font-bold text-white">
                    <span className="ms-4">{hiring.id}</span>
                    <span>{hiring.title}</span>
                  </div>
                  <div className="flex items-center text-center">
                    {hiring.image}
                    <p className="max-w-sm">{hiring.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* <!-- Opportunities Section --> */}
      <section className="relative -top-32 py-24">
        <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
            <h3 className="text-sm font-bold uppercase text-red-500">Opportunities</h3>
            <h1 className="text-3xl font-semibold text-white">
              Opportunities
            </h1>
          </div>

          {/* <!-- Opportunity 1 --> */}
          {opportunities && opportunities.map((opportunity) => (   
          <div key={opportunity.id} className={`mx-auto flex max-w-5xl items-center justify-center space-x-4 ${
            opportunity.reverse ? "flex-row-reverse" : "flex-row"
          }`}>
            <img
              src={opportunity.image}
              alt="Opportunities"
              className="h-auto w-auto"
            />

            <div className="flex-col justify-start space-y-4">
              <h3 className="text-2xl font-bold text-white">{opportunity.title}</h3>
              <p>
                {opportunity.description}
              </p>
              <Button> <Link to={`/JobsForYou/${opportunity.slug}`}>Check Available </Link> </Button>
            </div>
          </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

import React from "react";
import { Layout } from "../layout/Layout";
import bghero from "../assets/img/hero-img.png";
import imgabout from "../assets/img/about.png";
import imgwork1 from "../assets/img/Link.png";
import imgwork2 from "../assets/img/Link(1).png";
import imgwork3 from "../assets/img/Link(2).png";
import imgwork4 from "../assets/img/Link(3).png";
import imgwork5 from "../assets/img/Link(4).png";
import imgwork6 from "../assets/img/Link(5).png";
import imgblog from "../assets/img/blog-2.png.png";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur eius velit sed, consectetur nihil omnis.",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="69"
          height="69"
          viewBox="0 0 69 69"
          fill="none"
          className="mx-auto mb-4"
        >
          <path
            d="M10.7812 12.9375V42.1827L5.86284 47.1723C4.87713 48.153 4.31974 49.4841 4.3125 50.8746C4.32042 52.248 4.86955 53.563 5.84077 54.5342C6.81198 55.5054 8.12696 56.0546 9.50044 56.0625H59.4996C60.873 56.0546 62.188 55.5054 63.1592 54.5342C64.1304 53.563 64.6796 52.248 64.6875 50.8746C64.6791 49.4831 64.1219 48.1511 63.1372 47.168L58.2188 42.1806V12.9375H10.7812ZM15.0938 17.25H53.9062V40.9688H15.0938V17.25ZM34.5 19.4062L31.2656 38.8125H34.5L37.7344 19.4062H34.5ZM26.0604 23.7188L22.3538 28.1779L21.5625 29.1094L22.3538 30.0409L26.0604 34.5L28.4021 32.6392L25.4653 29.1094L28.3978 25.5796L26.0604 23.7188ZM42.9396 23.7188L40.5979 25.5796L43.5347 29.1094L40.6022 32.6392L42.9417 34.5L46.6483 30.0409L47.4375 29.1094L46.6462 28.1779L42.9396 23.7188ZM13.8798 45.2812H55.1181L60.1055 50.1997C60.2775 50.3824 60.3738 50.6236 60.375 50.8746C60.3812 50.9912 60.3628 51.1078 60.321 51.2168C60.2792 51.3258 60.215 51.4248 60.1324 51.5074C60.0498 51.59 59.9508 51.6542 59.8418 51.696C59.7328 51.7378 59.6162 51.7562 59.4996 51.75H9.50044C9.38384 51.7562 9.26724 51.7378 9.15821 51.696C9.04918 51.6542 8.95016 51.59 8.8676 51.5074C8.78503 51.4248 8.72076 51.3258 8.67897 51.2168C8.63717 51.1078 8.61878 50.9912 8.625 50.8746C8.625 50.6374 8.72634 50.37 8.89453 50.1997L13.8798 45.2812Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur eius velit sed, consectetur nihil omnis.",
      image: (
        <svg
          width="69"
          height="69"
          viewBox="0 0 69 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-4"
        >
          <path
            d="M34.5 8.625C27.6375 8.625 21.0561 11.3511 16.2036 16.2036C11.3511 21.0561 8.625 27.6375 8.625 34.5C8.625 48.8865 19.3056 60.0789 33.5024 60.0789H33.511C33.3749 59.8527 33.2254 59.6112 33.0625 59.3544L33.005 59.2624C31.855 57.431 30.9637 55.0476 31.1276 52.4343C31.2972 49.726 32.5795 47.0982 35.1929 44.9132C38.1599 42.4321 41.699 42.3717 44.4446 42.4781C45.0618 42.505 45.6445 42.5337 46.1926 42.5644C48.3719 42.6823 50.0969 42.7771 51.7902 42.32C57.1147 40.8825 60.0731 37.3463 60.3808 32.7664C61.3036 19.0325 49.2056 8.625 34.5 8.625ZM2.875 34.5C2.875 17.0344 17.0344 2.875 34.5 2.875C51.5516 2.875 67.3267 15.1972 66.1192 33.1487C65.6219 40.526 60.6337 45.8879 53.2881 47.8687C50.6086 48.5932 47.7336 48.4236 45.5026 48.2943C45.0426 48.2636 44.6143 48.2406 44.2175 48.2253C41.5811 48.1218 40.0487 48.3489 38.8844 49.3206C37.3692 50.5885 36.9294 51.7931 36.8661 52.7936C36.7971 53.8861 37.1709 55.0821 37.8724 56.2005L37.95 56.3241C38.226 56.764 38.6285 57.3994 38.962 58.0635C39.307 58.7506 39.7613 59.8 39.7958 60.9759C39.8304 61.7378 39.6624 62.4952 39.3089 63.171C38.9553 63.8467 38.4289 64.4167 37.7833 64.8226C36.5614 65.6133 35.0261 65.8289 33.4995 65.8289C15.9448 65.8289 2.875 51.8707 2.875 34.5ZM28.0312 20.1365C28.0312 18.6115 28.6371 17.149 29.7154 16.0706C30.7937 14.9923 32.2563 14.3865 33.7812 14.3865C35.3062 14.3865 36.7688 14.9923 37.8471 16.0706C38.9254 17.149 39.5313 18.6115 39.5312 20.1365C39.5313 21.6615 38.9254 23.124 37.8471 24.2024C36.7688 25.2807 35.3062 25.8865 33.7812 25.8865C32.2563 25.8865 30.7937 25.2807 29.7154 24.2024C28.6371 23.124 28.0312 21.6615 28.0312 20.1365ZM14.4613 28.7615C14.4613 27.2365 15.0671 25.774 16.1454 24.6956C17.2237 23.6173 18.6863 23.0115 20.2113 23.0115C21.7362 23.0115 23.1988 23.6173 24.2771 24.6956C25.3554 25.774 25.9612 27.2365 25.9612 28.7615C25.9612 30.2865 25.3554 31.749 24.2771 32.8274C23.1988 33.9057 21.7362 34.5115 20.2113 34.5115C18.6863 34.5115 17.2237 33.9057 16.1454 32.8274C15.0671 31.749 14.4613 30.2865 14.4613 28.7615ZM41.7392 28.7615C41.7392 27.2365 42.3451 25.774 43.4234 24.6956C44.5017 23.6173 45.9643 23.0115 47.4892 23.0115C49.0142 23.0115 50.4768 23.6173 51.5551 24.6956C52.6334 25.774 53.2392 27.2365 53.2392 28.7615C53.2392 30.2865 52.6334 31.749 51.5551 32.8274C50.4768 33.9057 49.0142 34.5115 47.4892 34.5115C45.9643 34.5115 44.5017 33.9057 43.4234 32.8274C42.3451 31.749 41.7392 30.2865 41.7392 28.7615Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur eius velit sed, consectetur nihil omnis.",
      image: (
        <svg
          width="69"
          height="69"
          viewBox="0 0 69 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-4"
        >
          <path
            d="M62.5312 29.1094H37.7344V24.7969H38.8125C39.5204 24.7969 40.2214 24.6574 40.8754 24.3865C41.5294 24.1156 42.1237 23.7186 42.6242 23.218C43.1248 22.7174 43.5219 22.1232 43.7928 21.4692C44.0637 20.8151 44.2031 20.1142 44.2031 19.4062V10.7812C44.2031 10.0733 44.0637 9.37237 43.7928 8.71835C43.5219 8.06433 43.1248 7.47007 42.6242 6.9695C42.1237 6.46894 41.5294 6.07187 40.8754 5.80096C40.2214 5.53006 39.5204 5.39062 38.8125 5.39062H30.1875C28.7578 5.39062 27.3867 5.95856 26.3758 6.9695C25.3648 7.98044 24.7969 9.35157 24.7969 10.7812V19.4062C24.7969 20.1142 24.9363 20.8151 25.2072 21.4692C25.4781 22.1232 25.8752 22.7174 26.3758 23.218C27.3867 24.2289 28.7578 24.7969 30.1875 24.7969H31.2656V29.1094H6.46875C5.61094 29.1094 4.78826 29.4501 4.1817 30.0567C3.57514 30.6633 3.23438 31.4859 3.23438 32.3438C3.23438 33.2016 3.57514 34.0242 4.1817 34.6308C4.78826 35.2374 5.61094 35.5781 6.46875 35.5781H14.0156V42.0469H12.9375C11.5078 42.0469 10.1367 42.6148 9.12575 43.6258C8.11481 44.6367 7.54688 46.0078 7.54688 47.4375V56.0625C7.54688 57.4922 8.11481 58.8633 9.12575 59.8742C10.1367 60.8852 11.5078 61.4531 12.9375 61.4531H21.5625C22.9922 61.4531 24.3633 60.8852 25.3742 59.8742C26.3852 58.8633 26.9531 57.4922 26.9531 56.0625V47.4375C26.9531 46.0078 26.3852 44.6367 25.3742 43.6258C24.3633 42.6148 22.9922 42.0469 21.5625 42.0469H20.4844V35.5781H48.5156V42.0469H47.4375C46.0078 42.0469 44.6367 42.6148 43.6258 43.6258C42.6148 44.6367 42.0469 46.0078 42.0469 47.4375V56.0625C42.0469 57.4922 42.6148 58.8633 43.6258 59.8742C44.6367 60.8852 46.0078 61.4531 47.4375 61.4531H56.0625C57.4922 61.4531 58.8633 60.8852 59.8742 59.8742C60.8852 58.8633 61.4531 57.4922 61.4531 56.0625V47.4375C61.4531 46.0078 60.8852 44.6367 59.8742 43.6258C58.8633 42.6148 57.4922 42.0469 56.0625 42.0469H54.9844V35.5781H62.5312C63.3891 35.5781 64.2117 35.2374 64.8183 34.6308C65.4249 34.0242 65.7656 33.2016 65.7656 32.3438C65.7656 31.4859 65.4249 30.6633 64.8183 30.0567C64.2117 29.4501 63.3891 29.1094 62.5312 29.1094ZM31.2656 11.8594H37.7344V18.3281H31.2656V11.8594ZM20.4844 54.9844H14.0156V48.5156H20.4844V54.9844ZM54.9844 54.9844H48.5156V48.5156H54.9844V54.9844Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  const works = [
    {
      id: 1,
      title: "Project 1",
      tagline: "Starter site",
      image: imgwork1,
    },
    {
      id: 2,
      title: "Project 2",
      tagline: "Starter site",
      image: imgwork2,
    },
    {
      id: 3,
      title: "Project 3",
      tagline: "Starter site",
      image: imgwork3,
    },
    {
      id: 4,
      title: "Project 4",
      tagline: "Starter site",
      image: imgwork4,
    },
    {
      id: 5,
      title: "Project 5",
      tagline: "Starter site",
      image: imgwork5,
    },
    {
      id: 6,
      title: "Project 6",
      tagline: "Starter site",
      image: imgwork6,
    },
  ];

  const blog = [
    {
      id: 1,
      title: "Consulted admitting wooded is power acuteness.",
      description : "There are many variations of passages of Lorem Ipsum available...",
      image: imgblog,
      date: 20,
      month: "Jan",
      jurnalist: "Coding Creator",
    },
    {
      id: 2,
      title: "Consulted admitting wooded is power acuteness.",
      description : "There are many variations of passages of Lorem Ipsum available...",
      image: imgblog,
      date: 20,
      month: "Jan",
      jurnalist: "Coding Creator",
    },
    {
      id: 3,
      title: "Consulted admitting wooded is power acuteness.",
      description : "There are many variations of passages of Lorem Ipsum available...",
      image: imgblog,
      date: 20,
      month: "Jan",
      jurnalist: "Coding Creator",
    },
  ]

  return (
    <Layout>
      {/* <!-- Hero Section --> */}
      <section className="relative min-h-screen min-w-7xl">
        {/* <!-- Background hero --> */}
        <img
          src={bghero}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* <!-- Tagline --> */}
        <div className="relative flex flex-col items-center justify-center text-center min-h-screen z-10">
          <h1 className="mb-5 text-5xl font-bold max-w-7xl">
            Innovative Digital Solutions to Drive the Future of Your Business
          </h1>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* <!-- About Us img --> */}
          <div className="flex justify-center">
            <img
              src={imgabout}
              alt="About Us"
              className="w-[550px] h-[550px]"
            />
          </div>

          {/* <!-- About Us text --> */}
          <div>
            <h3 className="text-sm font-bold uppercase text-red-500">About Us</h3>
            <h1 className="text-3xl font-semibold text-white mt-4">
              Find out more about our business consulting
            </h1>
            <p className="text-gray-300 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              consequatur eius velit sed, consectetur nihil omnis...
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Services --> */}
      <section id="services" className="py-16 px-8 text-center">
        <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase text-red-500">
              Latest Blog
            </h3>
            <h1 className="text-3xl font-bold text-white mt-2">
              Latest News & Articles
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* <!-- sv 1 --> */}
            {services &&
              services.map((service) => (
                <div
                  key={service.id}
                  className="card bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                >
                  {/* <!-- Icon --> */}
                  <div className="flex">{service.image}</div>

                  {/* <!-- Divider --> */}
                  <div className="w-14 h-1 bg-red-600 mx-auto mb-4"></div>

                  {/* <!-- Title --> */}
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  {/* <!-- Description --> */}
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* <!-- Works --> */}
      <section id="works" className="py-16 px-8">
        <div className="container mx-auto max-w-7xl">
          {/* <!-- Judul Bagian --> */}
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold uppercase text-red-500">
              Our Product
            </h3>
            <h1 className="text-3xl font-bold text-white mt-2">
              Let's Check Our Best Works
            </h1>
          </div>

          {/* <!-- Menu Produk --> */}
          <div className="mb-10">
            <div className="justify-between lg:flex">
              <div className="flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                  <li>
                    <button className="hover:bg-yellow-200 active:bg-yellow-300 focus:bg-yellow-500 text-white rounded px-4 py-2 transition">
                      ALL
                    </button>
                  </li>
                  <li>
                    <button className="hover:bg-yellow-200 active:bg-yellow-300 focus:bg-yellow-500 rounded px-4 py-2 transition">
                      E-COMMERCE
                    </button>
                  </li>
                  <li>
                    <button className="hover:bg-yellow-200 active:bg-yellow-300 focus:bg-yellow-500 rounded px-4 py-2 transition">
                      DESIGN
                    </button>
                  </li>
                  <li>
                    <button className="hover:bg-yellow-200 active:bg-yellow-300 focus:bg-yellow-500 rounded px-4 py-2 transition">
                      LOGO
                    </button>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="cursor-pointer hover:bg-yellow-200 active:bg-yellow-300 focus:bg-yellow-500 rounded px-4 py-2 transition">
                        SHOW MORE
                      </summary>
                      <ul className="p-2 bg-base-100 rounded-box shadow">
                        <li>
                          <button className="hover:bg-yellow-200 active:bg-yellow-300 focus:bg-yellow-500 rounded px-4 py-2 transition">
                            Submenu 1
                          </button>
                        </li>
                        <li>
                          <button className="hover:bg-yellow-200 active:bg-yellow-300 focus:bg-yellow-500 rounded px-4 py-2 transition">
                            Submenu 2
                          </button>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>

              <div className="flex">
                <button>
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1251 3C11.4308 3.00014 9.76115 3.40546 8.25539 4.18212C6.74963 4.95878 5.45144 6.08427 4.46912 7.46469C3.4868 8.84511 2.84884 10.4404 2.60846 12.1176C2.36808 13.7947 2.53226 15.505 3.0873 17.1057C3.64233 18.7065 4.57213 20.1513 5.79912 21.3197C7.02611 22.488 8.5147 23.346 10.1407 23.822C11.7667 24.298 13.483 24.3783 15.1463 24.0561C16.8097 23.734 18.3719 23.0187 19.7026 21.97L24.2676 26.535C24.5033 26.7627 24.8191 26.8887 25.1468 26.8858C25.4746 26.883 25.7881 26.7515 26.0198 26.5198C26.2516 26.288 26.3831 25.9745 26.3859 25.6467C26.3888 25.319 26.2628 25.0033 26.0351 24.7675L21.4701 20.2025C22.7051 18.6358 23.474 16.753 23.6889 14.7697C23.9039 12.7863 23.5561 10.7825 22.6854 8.98762C21.8146 7.19271 20.4562 5.67919 18.7654 4.62029C17.0747 3.56138 15.12 2.99987 13.1251 3ZM5.00007 13.625C5.00007 11.4701 5.8561 9.40349 7.37983 7.87976C8.90356 6.35602 10.9702 5.5 13.1251 5.5C15.28 5.5 17.3466 6.35602 18.8703 7.87976C20.394 9.40349 21.2501 11.4701 21.2501 13.625C21.2501 15.7799 20.394 17.8465 18.8703 19.3702C17.3466 20.894 15.28 21.75 13.1251 21.75C10.9702 21.75 8.90356 20.894 7.37983 19.3702C5.8561 17.8465 5.00007 15.7799 5.00007 13.625Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Tata Letak Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Item Kartu 1 --> */}
            {works &&
              works.map((Works) => (
                <div key={Works.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-2">
                  {/* <!-- Gambar --> */}
                  <div className="w-full h-auto">
                    <img
                      src={Works.image}
                      alt="Work 1"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* <!-- Konten di Bawah Gambar --> */}
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-white">
                      {Works.title}
                    </h4>
                    <p className="text-sm text-gray-300 mt-2">
                      {Works.tagline}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {/* <!-- Tombol Load More --> */}
          <div className="text-center mt-8">
            <Button>LOAD MORE</Button>
          </div>
        </div>
      </section>

      {/* <!-- Blog --> */}
      <section id="blog" className="py-16 px-8">
        <div className="container mx-auto">
          {/* <!-- Judul Bagian --> */}
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase text-red-500">
              Latest Blog
            </h3>
            <h1 className="text-3xl font-bold text-white mt-2">
              Latest News & Articles
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Item Blog 1 --> */}
            {blog && blog.map((Blog) => (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              {/* <!-- Tanggal --> */}
              <div className="flex absolute top-5 left-5">
                <div className="bg-red-500 text-white text-center p-2">
                  <span className="text-md font-semibold">{Blog.date}</span>
                </div>
                <div className="bg-white text-black text-center p-2">
                  <span className="text-md font-semibold">{Blog.month}</span>
                </div>
              </div>
              {/* <!-- Gambar --> */}
              <img
                src={Blog.image}
                alt="Blog Image"
                className="w-full h-auto object-cover"
              />
              {/* <!-- Konten Blog --> */}
              <div className="p-4">
                <span className="text-sm text-gray-600">
                  {Blog.jurnalist}
                </span>
                <h4 className="text-lg font-bold text-gray-800">
                  {Blog.title}
                </h4>
                <p className="text-gray-600 mt-2">
                  {Blog.description}
                </p>
                <button className="text-black font-semibold mt-4 flex justify-center items-center gap-2">
                  Read More
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2139 8.13867C16.4248 7.9043 16.5303 7.63477 16.5303 7.33008C16.5303 7.02539 16.4248 6.75586 16.2139 6.52148L10.5889 0.896484C10.3545 0.685547 10.085 0.580078 9.78027 0.580078C9.47559 0.580078 9.20605 0.685547 8.97168 0.896484C8.76074 1.13086 8.65527 1.40039 8.65527 1.70508C8.65527 2.00977 8.76074 2.2793 8.97168 2.51367L12.6982 6.20508H1.90527C1.57715 6.20508 1.30762 6.31055 1.09668 6.52148C0.885742 6.73242 0.780273 7.00195 0.780273 7.33008C0.780273 7.6582 0.885742 7.92773 1.09668 8.13867C1.30762 8.34961 1.57715 8.45508 1.90527 8.45508H12.6982L8.97168 12.1465C8.76074 12.3809 8.65527 12.6504 8.65527 12.9551C8.65527 13.2598 8.76074 13.5293 8.97168 13.7637C9.20605 13.9746 9.47559 14.0801 9.78027 14.0801C10.085 14.0801 10.3545 13.9746 10.5889 13.7637L16.2139 8.13867Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
            ))}
          </div>

          {/* <!-- Tombol Load More --> */}
          <div className="text-center mt-8">
            <Button>LOAD MORE</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

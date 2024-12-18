import React from "react";
import { Layout } from "../layout/Layout";
import imghero from "../assets/img/unsplash_1bRWLqA1PB0.png";
import imgblog from "../assets/img/blog-2.png.png";
import imgblogLite from "../assets/img/unsplash__Zua2hyvTBk.png";

export const Blog = () => {
  const blogLite = [
    {
      id: 1,
      title: "Bluehost vs WordPress.com: Which Is Better for Your Website?",
      image: imgblogLite,
    },
    {
      id: 2,
      title: "Bluehost vs WordPress.com: Which Is Better for Your Website?",
      image: imgblogLite,
    },
    {
      id: 3,
      title: "Bluehost vs WordPress.com: Which Is Better for Your Website?",
      image: imgblogLite,
    },
  ];

  const blog = [
    {
      id: 1,
      title: "Consulted admitting wooded is power acuteness.",
      description:
        "There are many variations of passages of Lorem Ipsum available...",
      image: imgblog,
      date: 20,
      month: "Jan",
      jurnalist: "Coding Creator",
    },
    {
      id: 2,
      title: "Consulted admitting wooded is power acuteness.",
      description:
        "There are many variations of passages of Lorem Ipsum available...",
      image: imgblog,
      date: 20,
      month: "Jan",
      jurnalist: "Coding Creator",
    },
    {
      id: 3,
      title: "Consulted admitting wooded is power acuteness.",
      description:
        "There are many variations of passages of Lorem Ipsum available...",
      image: imgblog,
      date: 20,
      month: "Jan",
      jurnalist: "Coding Creator",
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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

        {/* <!-- Tagline --> */}
        <div className="items-centr relative -top-28 z-10 flex min-h-screen flex-col justify-center text-center">
          <h1 className="text-5xl font-bold">Blog</h1>
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
            <span className="text-sm text-yellow-400">BLOG</span>
          </div>
        </div>
      </section>

      {/* <!-- Blog --> */}
      <section className="relative -top-56 px-8 py-16">
        {/* <!-- Featured Section --> */}
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Blog & Insight
          </h2>
          <div className="mb-10 bg-gray-800 p-20">
            <h3 className="text-md mb-4 w-min bg-gradient-to-br from-yellow-400/95 to-transparent p-2 font-semibold">
              Featured
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-11">
              {/* <!-- Featured Cards --> */}
              {blogLite &&
                blogLite.map((blogLite) => (
                  <div key={blogLite.id} className="flex space-x-2">
                    <img
                      src={blogLite.image}
                      alt="Featured Image"
                      className="w-auto"
                    />
                    <span className="text-sm font-medium">
                      {blogLite.title}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* <!-- Main Content Section --> */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
            {/* <!-- Blog Posts --> */}
            <div className="lg:col-span-3">
              {/* <!-- Search Bar --> */}
              <form className="mb-6 flex items-center bg-gray-800 justify-between p-4">
                <input type="search" placeholder="Search by keywords" />
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1251 3C11.4308 3.00014 9.76115 3.40546 8.25539 4.18212C6.74963 4.95878 5.45144 6.08427 4.46912 7.46469C3.4868 8.84511 2.84884 10.4404 2.60846 12.1176C2.36808 13.7947 2.53226 15.505 3.0873 17.1057C3.64233 18.7065 4.57213 20.1513 5.79912 21.3197C7.02611 22.488 8.5147 23.346 10.1407 23.822C11.7667 24.298 13.483 24.3783 15.1463 24.0561C16.8097 23.734 18.3719 23.0187 19.7026 21.97L24.2676 26.535C24.5033 26.7627 24.8191 26.8887 25.1468 26.8858C25.4746 26.883 25.7881 26.7515 26.0198 26.5198C26.2516 26.288 26.3831 25.9745 26.3859 25.6467C26.3888 25.319 26.2628 25.0033 26.0351 24.7675L21.4701 20.2025C22.7051 18.6358 23.474 16.753 23.6889 14.7697C23.9039 12.7863 23.5561 10.7825 22.6854 8.98762C21.8146 7.19271 20.4562 5.67919 18.7654 4.62029C17.0747 3.56138 15.12 2.99987 13.1251 3ZM5.00007 13.625C5.00007 11.4701 5.8561 9.40349 7.37983 7.87976C8.90356 6.35602 10.9702 5.5 13.1251 5.5C15.28 5.5 17.3466 6.35602 18.8703 7.87976C20.394 9.40349 21.2501 11.4701 21.2501 13.625C21.2501 15.7799 20.394 17.8465 18.8703 19.3702C17.3466 20.894 15.28 21.75 13.1251 21.75C10.9702 21.75 8.90356 20.894 7.37983 19.3702C5.8561 17.8465 5.00007 15.7799 5.00007 13.625Z"
                    fill="white"
                  />
                </svg>
              </form>

              {/* <!-- Button Category Blog --> */}
              <div className="mb-10">
                <div className="justify-between lg:flex">
                  <div className="flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                      <li>
                        <button className="rounded px-4 py-2 text-white transition hover:bg-yellow-200 focus:bg-yellow-500 active:bg-yellow-300">
                          ALL
                        </button>
                      </li>
                      <li>
                        <button className="rounded px-4 py-2 text-white transition hover:bg-yellow-200 focus:bg-yellow-500 active:bg-yellow-300">
                          CODING CREATOR
                        </button>
                      </li>
                      <li>
                        <button className="rounded px-4 py-2 text-white transition hover:bg-yellow-200 focus:bg-yellow-500 active:bg-yellow-300">
                          INSIGHT
                        </button>
                      </li>
                      <li>
                        <button className="rounded px-4 py-2 text-white transition hover:bg-yellow-200 focus:bg-yellow-500 active:bg-yellow-300">
                          TECHNOLOGY
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- blog --> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Item Blog 1 --> */}
                {blog &&
                  blog.map((Blog) => (
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                      {/* <!-- Tanggal --> */}
                      <div className="flex absolute top-5 left-5">
                        <div className="bg-red-500 text-white text-center p-2">
                          <span className="text-md font-semibold">
                            {Blog.date}
                          </span>
                        </div>
                        <div className="bg-white text-black text-center p-2">
                          <span className="text-md font-semibold">
                            {Blog.month}
                          </span>
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
                        <p className="text-gray-600 mt-2">{Blog.description}</p>
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
            </div>

            {/* <!-- Sidebar --> */}
            <div>
              <div className="mb-6 rounded-lg bg-gray-800 p-6">
                <h4 className="mb-4 text-lg font-semibold">Popular Category</h4>
                <ul className="text-sm text-gray-400">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Web Development
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      UI/UX Design
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Digital Marketing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Cyber Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-800 p-6">
                <h4 className="mb-4 text-lg font-semibold">
                  Keyword Favorites
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm">
                    Design
                  </span>
                  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm">
                    Technology
                  </span>
                  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm">
                    Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

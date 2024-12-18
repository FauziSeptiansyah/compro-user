import React from 'react'
import { Layout } from '../layout/Layout'
import imghero from "../assets/img/unsplash_1bRWLqA1PB0(3).png";
import imgproduct from "../assets/img/Figure → img-31.png.png";
import imgwork1 from "../assets/img/Link.png";
import imgwork2 from "../assets/img/Link(1).png";
import imgwork3 from "../assets/img/Link(2).png";
import imgwork4 from "../assets/img/Link(3).png";
import imgwork5 from "../assets/img/Link(4).png";
import imgwork6 from "../assets/img/Link(5).png";

export const Product = () => {

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
      <div
        className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
      ></div>

      {/* <!-- Tagline --> */}
      <div
        className="items-centr relative -top-28 z-10 flex min-h-screen flex-col justify-center text-center"
      >
        <h1 className="text-5xl font-bold">Product</h1>
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
          <span className="text-sm text-yellow-400">PRODUCT</span>
        </div>
      </div>
    </section>

    {/* <!-- About Product --> */}
    <section className="relative -top-52">
      <div className="relative flex justify-center">
        <div className="mx-auto grid grid-cols-2 items-center gap-4">
          {/* <!-- Image Section --> */}
          <div className="relative -top-28 flex items-center justify-center">
            <img
              src={imgproduct}
              alt="People working"
              className="h-full w-full object-cover"
            />
          </div>

          {/* <!-- Text Section --> */}
          <div className="relative flex items-center justify-center px-8 -top-48">
            <div className="items-center text-center">
              <h3 className="text-sm font-bold uppercase text-red-500">
                OUR PRODUCT
              </h3>
              <h1 className="text-3xl font-bold">
                projects that we have made so far
              </h1>
              <p className="mt-2 leading-relaxed text-gray-300">
                Projects that we have made so far showcase our commitment to
                quality and innovation. From creating dynamic websites and
                immersive user interfaces to designing unique, memorable logos,
                each project reflects our dedication to delivering impactful
                digital solutions tailored to our clients' needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Works --> */}
    <section id="works" className="relative py-16 px-8 -top-56">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
        </div>
      </section>    
    </Layout>
  )
}

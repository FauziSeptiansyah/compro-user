import React from "react";
import { Layout } from "../layout/Layout";
import imghero from "../assets/img/unsplash_1bRWLqA1PB0(1).png";
import imgmap from "../assets/img/Basemap image.png";

export const Contact = () => {

  const contactEmail = [
    {id: 1, 
     division: "Presales Consultant",
     email: "b0cGK@example.com",
     hour: "9am - 10pm",
    },
    {id: 2, 
     division: "Sales Consultant",
     email: "b0cGK@example.com",
     hour: "9am - 10pm",
    },
    {id: 3, 
     division: "Customer Support",
     email: "b0cGK@example.com",
     hour: "9am - 10pm",
    },
  ]

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
          <h1 className="text-5xl font-bold">Contact Us</h1>
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
            <span className="text-sm text-yellow-400">HELP</span>
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
            <span className="text-sm text-yellow-400">CONTACT US</span>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section className="relative -top-56 py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* <!-- Section Title --> */}
          <h2 className="mb-6 text-center text-4xl font-bold text-teal-400">
            Reach Out – We’re Ready to Help!
          </h2>

          {/* <!-- Sub Header --> */}
          <div className="bg-yellow-500 py-2 text-center font-semibold text-gray-900">
            Support hours: Monday - Friday, 9:00 AM - 5:00 PM WIB
          </div>

          {/* <!-- Content Map Section --> */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* <!-- Map Section --> */}
            <div className="flex items-center justify-center">
              {/* <!-- Placeholder for Map --> */}
              <img src={imgmap} alt="Map" className="w-auto" />
            </div>

            {/* <!-- Address Section --> */}
            <div className="my-auto flex flex-col items-center space-y-6">
              {/* <!-- Address --> */}
              <div className="text-center">
                <h3 className="text-2xl font-bold">Address</h3>
                <p>Jl. Tanah Baru, Kota Depok Nusa 16425, Indonesia</p>
              </div>

              {/* <!-- Phone --> */}
              <div className="text-center">
                <h3 className="text-xl font-bold">Phone</h3>
                <p>+123-456-7892</p>
              </div>
            </div>
          </div>

          {/* <!-- Contact Tabel --> */}
          <div className="p-6 mt-10">
            <div className="mb-4 flex items-center space-x-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.4545 8.90816C26.1296 8.90816 26.7771 9.17635 27.2545 9.65374C27.7318 10.1311 28 10.7786 28 11.4537V16.5449C28 17.22 27.7318 17.8675 27.2545 18.3449C26.7771 18.8223 26.1296 19.0905 25.4545 19.0905H24.1029C23.7929 21.5513 22.5954 23.8143 20.7352 25.4547C18.8751 27.0952 16.4801 28.0002 14 28V25.4544C16.0253 25.4544 17.9676 24.6498 19.3997 23.2177C20.8318 21.7855 21.6364 19.8431 21.6364 17.8177V10.1809C21.6364 8.15556 20.8318 6.21312 19.3997 4.78096C17.9676 3.34879 16.0253 2.54421 14 2.54421C11.9747 2.54421 10.0324 3.34879 8.60028 4.78096C7.16818 6.21312 6.36364 8.15556 6.36364 10.1809V19.0905H2.54545C1.87036 19.0905 1.22291 18.8223 0.745546 18.3449C0.268181 17.8675 0 17.22 0 16.5449V11.4537C0 10.7786 0.268181 10.1311 0.745546 9.65374C1.22291 9.17635 1.87036 8.90816 2.54545 8.90816H3.89709C4.20768 6.44772 5.40537 4.18518 7.26546 2.54507C9.12554 0.904957 11.5202 0 14 0C16.4798 0 18.8745 0.904957 20.7345 2.54507C22.5946 4.18518 23.7923 6.44772 24.1029 8.90816H25.4545ZM8.60364 18.8168L9.95273 16.6582C11.1657 17.4182 12.5686 17.8201 14 17.8177C15.4314 17.8201 16.8343 17.4182 18.0473 16.6582L19.3964 18.8168C17.7791 19.8303 15.9085 20.3664 14 20.3633C12.0915 20.3664 10.2209 19.8303 8.60364 18.8168Z"
                  fill="white"
                />
              </svg>
              <span className="text-lg">For other needs:</span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border-gray-700">
                <thead>
                  <tr className="text-gray-900">
                    <th></th>
                    <th></th>
                    <th className="bg-yellow-500 px-6 py-3 text-sm text-center font-medium">
                      Operation Hour
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-gray-800">
                  { contactEmail && contactEmail.map((Data) => ( 
                  <tr key={Data.id}>
                    <td className="px-6 py-4 text-sm">{Data.division}</td>
                    <td className="px-6 py-4 text-sm">{Data.email}</td>
                    <td className="bg-blue-950 px-6 py-4 text-center text-sm">
                      {Data.hour}
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

import React from 'react'
import { Layout } from '../layout/Layout'
import imghero from "../assets/img/tower.png";
import imgEngineer from "../assets/img/engineering.png.png";
import { useParams } from 'react-router-dom';

export const DetailJobs = () => {
    const { slug } = useParams();
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
        <h1 className="text-5xl font-bold">Carrer</h1>
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
          <span className="text-sm text-yellow-400">JOBS FOR YOU</span>
        </div>
      </div>
    </section>

    {/* <!-- Jobs Detail --> */}
    <section className="relative -top-52">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-44 text-center text-3xl font-bold">Jobs For You</h1>
        <div className="relative items-center justify-center bg-black">
          <div className="grid grid-cols-2 items-center gap-4">
            {/* <!-- Image --> */}
            <div className="relative -top-28 flex items-center justify-center">
              <img
                src={imgEngineer}
                alt="People working"
                className="h-auto w-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Web Developer</h2>
              <p className="text-sm text-gray-400">Posted on: 28/11/2024</p>
            </div>

            {/* <!-- Job Details --> */}
            <div className="w-full space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Job Description</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque eu erat lacus, vel congue mauris. Fusce in odio
                  at tortor euismod aliquet non nec lacus...
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Requirements</h3>
                <ul className="ml-5 list-disc text-sm text-gray-300">
                  <li>
                    Experience in frontend technologies like HTML, CSS, and
                    JavaScript.
                  </li>
                  <li>Knowledge of Tailwind CSS is a plus.</li>
                  <li>Proven ability to collaborate in a team setting.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Compensation & Benefits</h3>
                <p className="text-sm text-gray-300">
                  Competitive salary, health insurance, and remote-friendly
                  policies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Application Steps</h3>
                <p className="text-sm text-gray-300">
                  Submit your CV and portfolio through our application portal.
                  Shortlisted candidates will be contacted for an interview.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-gray-900 text-white p-6 sm:p-10 rounded-lg max-w-4xl mx-auto">
      {/* <!-- Header --> */}
      <div className="flex items-center space-x-4">
        <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
          <img
                src="../assets/img/engineering.png.png"
                alt="People working"
                className="h-auto w-auto object-cover"
              />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Web Developer</h2>
          <p className="text-sm text-gray-400">Posted on: 28/11/2024</p>
        </div>
      </div>
    
      {/* <!-- Job Details --> */}
      <div className="mt-6">
        <p className="text-gray-400">Location: Indonesia - Hybrid/Office</p>
      </div>
    
      {/* <!-- Job Description --> */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Deskripsi Pekerjaan:</h3>
        <p className="text-gray-300 mt-2">
          Anda akan bertanggung jawab untuk membuat, memperbarui, dan memastikan desain serta fitur website sesuai dengan kebutuhan klien. Anda juga akan berkolaborasi dengan tim untuk memastikan standar kualitas terpenuhi.
        </p>
      </div>
    
      {/* <!-- Responsibilities --> */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Tanggung Jawab Utama:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Mengembangkan dan memelihara website yang user-friendly dan responsif.</li>
          <li>Berkoordinasi dengan tim desain untuk menghasilkan tampilan UI/UX yang optimal.</li>
          <li>Memastikan kompatibilitas antar browser dan perangkat.</li>
          <li>Melakukan pengujian dan debugging untuk meningkatkan performa.</li>
        </ul>
      </div>
    
      {/* <!-- Requirements --> */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Persyaratan:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Pendidikan minimal S1 bidang terkait.</li>
          <li>Memiliki pengalaman minimal 2 tahun sebagai Web Developer.</li>
          <li>Menguasai HTML, CSS, JavaScript, dan framework seperti React atau Vue.</li>
          <li>Mampu bekerja dalam tim serta memiliki komunikasi yang baik.</li>
        </ul>
      </div>
    
      {/* <!-- Benefits --> */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Keuntungan yang Ditawarkan:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Gaji kompetitif sesuai pengalaman.</li>
          <li>Kesempatan untuk berkembang dengan pelatihan dan seminar.</li>
          <li>Lingkungan kerja yang kolaboratif dan inovatif.</li>
        </ul>
      </div>
    </div>
    </Layout>
  )
}

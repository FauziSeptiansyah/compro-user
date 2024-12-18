import React from "react";
import { Layout } from "../layout/Layout";
import imghero from "../assets/img/unsplash_1bRWLqA1PB0(2).png";

export const FAQ = () => {
  const [dataQuestion, setDataQuestion] = React.useState([]);
  const categoryFaq = [
    {
      id: 1,
      title: "General Question",
      category: "general-question",
      image: (
        <svg
          width="96"
          height="92"
          viewBox="0 0 96 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.9999 0C21.9639 0 0.159912 18.6944 0.159912 42.32C0.159912 53.4704 5.16103 63.4726 13.0399 70.9541C12.0819 73.4576 10.7221 75.7882 9.01399 77.8541C6.75004 80.6001 4.24905 83.1417 1.53991 85.4496C0.945652 85.9264 0.514015 86.5758 0.304569 87.3083C0.0951234 88.0408 0.118195 88.8203 0.370599 89.5392C0.623003 90.258 1.0923 90.8808 1.71371 91.3216C2.33513 91.7624 3.07804 91.9994 3.83991 92C11.9911 92 17.8534 91.908 23.1599 90.5059C27.9071 89.2474 31.9882 86.6125 36.154 82.9141C39.9444 83.823 43.8562 84.64 47.9999 84.64C74.0359 84.64 95.8399 65.9456 95.8399 42.32C95.8399 18.6944 74.0359 0 47.9999 0ZM47.9999 7.36C70.5399 7.36 88.4799 23.2576 88.4799 42.32C88.4799 61.3824 70.5399 77.28 47.9999 77.28C43.9924 77.28 39.8303 76.5882 36.0399 75.5541C35.4338 75.4017 34.7988 75.4062 34.1949 75.5671C33.5909 75.7281 33.038 76.0402 32.5881 76.4741C28.4481 80.4448 25.3974 82.2958 21.3199 83.3741C19.4431 83.8709 15.822 83.7531 13.2681 83.9518C13.7833 83.3704 14.2654 83.0613 14.7658 82.4541C17.6583 78.9213 20.2969 75.1861 21.0918 70.9541C21.2012 70.3188 21.1419 69.6659 20.9198 69.0608C20.6976 68.4556 20.3204 67.9194 19.8258 67.5059C12.1162 61.1395 7.51991 52.2155 7.51991 42.32C7.51991 23.2576 25.4599 7.36 47.9999 7.36ZM40.9858 21.7341C40.3381 21.8795 39.7417 22.1973 39.2599 22.6541L33.7399 27.8318L38.6858 33.2341L43.054 29.0941H51.9081L55.3599 33.0096V38.4155L45.9281 44.7378C45.4239 45.0811 45.013 45.5443 44.7323 46.0858C44.4516 46.6273 44.3099 47.2301 44.3199 47.84V55.2H51.6799V49.9082L61.1118 43.5859C61.6164 43.2423 62.0277 42.7784 62.3084 42.2362C62.5891 41.694 62.7306 41.0905 62.7199 40.48V31.6259C62.7151 30.7365 62.3882 29.8789 61.7999 29.2118L56.2799 23C55.9364 22.6048 55.5125 22.2874 55.0366 22.0691C54.5606 21.8508 54.0435 21.7366 53.5199 21.7341H41.7881C41.5215 21.7048 41.2524 21.7048 40.9858 21.7341ZM44.3199 58.88V66.24H51.6799V58.88H44.3199Z"
            fill="white"
          />
        </svg>
      ),
      description: "Learn more about our company, address, and guidelines.",
    },
    {
      id: 2,
      title: "About Product",
      category: "about-product",
      image: (
        <svg
          width="94"
          height="94"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77.2143 70.5H89.8036C90.0262 70.5 90.2397 70.5884 90.3971 70.7458C90.5545 70.9032 90.6429 71.1167 90.6429 71.3393V73.8571C90.6429 75.712 85.7834 77.2143 83.9286 77.2143H10.0715C8.21664 77.2143 3.35718 75.712 3.35718 73.8571V71.3393C3.35718 71.1167 3.4456 70.9032 3.603 70.7458C3.7604 70.5884 3.97387 70.5 4.19646 70.5H16.7857C15.005 70.5 13.2972 69.7926 12.038 68.5334C10.7789 67.2742 10.0715 65.5664 10.0715 63.7857V23.5C10.0715 21.7193 10.7789 20.0114 12.038 18.7523C13.2972 17.4931 15.005 16.7857 16.7857 16.7857H77.2143C78.9951 16.7857 80.7029 17.4931 81.962 18.7523C83.2212 20.0114 83.9286 21.7193 83.9286 23.5V63.7857C83.9286 65.5664 83.2212 67.2742 81.962 68.5334C80.7029 69.7926 78.9951 70.5 77.2143 70.5ZM16.7857 25.1786V62.1071C16.7857 62.5523 16.9626 62.9793 17.2774 63.2941C17.5922 63.6089 18.0191 63.7857 18.4643 63.7857H75.5358C75.9809 63.7857 76.4079 63.6089 76.7227 63.2941C77.0375 62.9793 77.2143 62.5523 77.2143 62.1071V25.1786C77.2143 24.7334 77.0375 24.3064 76.7227 23.9916C76.4079 23.6768 75.9809 23.5 75.5358 23.5H18.4643C18.0191 23.5 17.5922 23.6768 17.2774 23.9916C16.9626 24.3064 16.7857 24.7334 16.7857 25.1786ZM40.2858 68.8214C39.8406 68.8214 39.4136 68.9983 39.0988 69.3131C38.784 69.6278 38.6072 70.0548 38.6072 70.5C38.6072 70.9452 38.784 71.3721 39.0988 71.6869C39.4136 72.0017 39.8406 72.1786 40.2858 72.1786H53.7143C54.1595 72.1786 54.5865 72.0017 54.9013 71.6869C55.216 71.3721 55.3929 70.9452 55.3929 70.5C55.3929 70.0548 55.216 69.6278 54.9013 69.3131C54.5865 68.9983 54.1595 68.8214 53.7143 68.8214H40.2858Z"
            fill="white"
          />
        </svg>
      ),
      description: "Learn more about our product range and details.",
    },
    {
      id: 3,
      title: "About Services",
      category: "about-services",
      image: (
        <svg
          width="92"
          height="91"
          viewBox="0 0 92 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4853 16.945C16.8838 12.5456 22.7834 9.97242 29.0002 9.74176C35.217 9.51109 41.2911 11.64 46.0036 15.7013C50.7119 11.6468 56.7779 9.52025 62.9873 9.74749C69.1966 9.97472 75.091 12.5389 79.4903 16.9268C83.8897 21.3146 86.4693 27.2023 86.7128 33.411C86.9563 39.6197 84.8457 45.6913 80.8035 50.4102L51.3612 79.9473C50.0085 81.3005 48.1943 82.0923 46.2823 82.164C44.3704 82.2357 42.5019 81.5821 41.0517 80.3341L40.6346 79.9511L11.1961 50.4102C7.15602 45.6954 5.04441 39.6294 5.28342 33.425C5.52243 27.2206 8.09445 21.335 12.4853 16.945ZM17.8467 22.3064C14.746 25.4079 12.9587 29.5843 12.8556 33.9687C12.7525 38.3531 14.3416 42.6088 17.2931 45.8526L17.8467 46.4366L45.9998 74.5897L66.107 54.4749L52.7035 41.0751L48.6843 45.0943C46.5514 47.2282 43.6582 48.4274 40.6411 48.4281C37.624 48.4289 34.7302 47.231 32.5963 45.0981C30.4623 42.9652 29.2631 40.072 29.2624 37.0549C29.2617 34.0378 30.4596 31.144 32.5925 29.0101L40.5625 21.0362C37.391 18.504 33.4208 17.1853 29.3645 17.3166C25.3083 17.4479 21.4317 19.0208 18.4306 21.7528L17.8467 22.3064ZM50.0228 33.0292C50.7338 32.3184 51.698 31.9191 52.7035 31.9191C53.7089 31.9191 54.6731 32.3184 55.3842 33.0292L71.4684 49.1135L74.1529 46.4366C77.3055 43.2862 79.1003 39.0273 79.1535 34.5708C79.2067 30.1142 77.514 25.8137 74.4374 22.5891C71.3608 19.3644 67.1446 17.4715 62.6905 17.3152C58.2364 17.159 53.8979 18.7517 50.6029 21.7528L50.0228 22.3064L37.9577 34.3715C37.3005 35.0282 36.9073 35.9035 36.8528 36.831C36.7982 37.7585 37.0862 38.6738 37.6619 39.403L37.9577 39.7329C38.6144 40.3901 39.4897 40.7833 40.4172 40.8378C41.3447 40.8923 42.26 40.6044 42.9892 40.0286L43.3191 39.7329L50.0228 33.0292Z"
            fill="white"
          />
        </svg>
      ),
      description: "Explore our range of services and customer support.",
    },
    {
      id: 4,
      title: "Technology",
      category: "technology",
      image: (
        <svg
          width="69"
          height="69"
          viewBox="0 0 69 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M62.5312 29.1094H37.7344V24.7969H38.8125C39.5204 24.7969 40.2214 24.6574 40.8754 24.3865C41.5294 24.1156 42.1237 23.7186 42.6242 23.218C43.1248 22.7174 43.5219 22.1232 43.7928 21.4692C44.0637 20.8151 44.2031 20.1142 44.2031 19.4062V10.7812C44.2031 10.0733 44.0637 9.37237 43.7928 8.71835C43.5219 8.06433 43.1248 7.47007 42.6242 6.9695C42.1237 6.46894 41.5294 6.07187 40.8754 5.80096C40.2214 5.53006 39.5204 5.39062 38.8125 5.39062H30.1875C28.7578 5.39062 27.3867 5.95856 26.3758 6.9695C25.3648 7.98044 24.7969 9.35157 24.7969 10.7812V19.4062C24.7969 20.1142 24.9363 20.8151 25.2072 21.4692C25.4781 22.1232 25.8752 22.7174 26.3758 23.218C27.3867 24.2289 28.7578 24.7969 30.1875 24.7969H31.2656V29.1094H6.46875C5.61094 29.1094 4.78826 29.4501 4.1817 30.0567C3.57514 30.6633 3.23438 31.4859 3.23438 32.3438C3.23438 33.2016 3.57514 34.0242 4.1817 34.6308C4.78826 35.2374 5.61094 35.5781 6.46875 35.5781H14.0156V42.0469H12.9375C11.5078 42.0469 10.1367 42.6148 9.12575 43.6258C8.11481 44.6367 7.54688 46.0078 7.54688 47.4375V56.0625C7.54688 57.4922 8.11481 58.8633 9.12575 59.8742C10.1367 60.8852 11.5078 61.4531 12.9375 61.4531H21.5625C22.9922 61.4531 24.3633 60.8852 25.3742 59.8742C26.3852 58.8633 26.9531 57.4922 26.9531 56.0625V47.4375C26.9531 46.0078 26.3852 44.6367 25.3742 43.6258C24.3633 42.6148 22.9922 42.0469 21.5625 42.0469H20.4844V35.5781H48.5156V42.0469H47.4375C46.0078 42.0469 44.6367 42.6148 43.6258 43.6258C42.6148 44.6367 42.0469 46.0078 42.0469 47.4375V56.0625C42.0469 57.4922 42.6148 58.8633 43.6258 59.8742C44.6367 60.8852 46.0078 61.4531 47.4375 61.4531H56.0625C57.4922 61.4531 58.8633 60.8852 59.8742 59.8742C60.8852 58.8633 61.4531 57.4922 61.4531 56.0625V47.4375C61.4531 46.0078 60.8852 44.6367 59.8742 43.6258C58.8633 42.6148 57.4922 42.0469 56.0625 42.0469H54.9844V35.5781H62.5312C63.3891 35.5781 64.2117 35.2374 64.8183 34.6308C65.4249 34.0242 65.7656 33.2016 65.7656 32.3438C65.7656 31.4859 65.4249 30.6633 64.8183 30.0567C64.2117 29.4501 63.3891 29.1094 62.5312 29.1094ZM31.2656 11.8594H37.7344V18.3281H31.2656V11.8594ZM20.4844 54.9844H14.0156V48.5156H20.4844V54.9844ZM54.9844 54.9844H48.5156V48.5156H54.9844V54.9844Z"
            fill="white"
          />
        </svg>
      ),
      description: "Discover the technology we use to innovate solutions.",
    },
  ];

  const question  = [
    {
      id: 1,
      question: "What is your company about?",
      category: "general-question",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "What is your company about?",
      category: "about-product",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      question: "What is your company about?",
      category: "about-services",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },  
    {
      id: 4,
      question: "What is your company about?",
      category: "technology",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  const changeCategory = (category) => {
    const fix = question.filter((item) => item.category === category);
    setDataQuestion(fix);
  }

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
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
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
            <span className="text-sm text-yellow-400">FAQ</span>
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
          </div>
        </div>
      </section>

      {/* <!-- FAQ Section --> */}
      <section className="relative -top-64 z-10">
        <div className="py-16">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-4xl font-bold uppercase">FAQ</h1>
            <p className="mt-2 text-lg">How can we help you?</p>
          </div>

          {/* <!-- Card Section --> */}
          <div className="container mx-auto mt-12 grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Card 1 --> */}
            { categoryFaq && categoryFaq.map((categoryFaq) => (
            <button key={categoryFaq.id} className="transform rounded-lg p-6 text-center bg-gray-800 text-white shadow-md transition hover:scale-105" onClick={() => changeCategory(categoryFaq.category)}>
              <div className="flex items-center justify-center p-8">
                {categoryFaq.image}
              </div>
              <h3 className="text-xl font-bold">{categoryFaq.title}</h3>
              <p className="mt-2 text-sm">
                {categoryFaq.description}
              </p>
            </button>
            ))}
          </div>
        </div>

        {/* <!-- General Question Section --> */}
        <div className="bg-gray-900 py-12 text-white">
          <div className="container mx-auto px-6">
            <h2 className="mb-8 text-center text-2xl font-bold">
              General Question
            </h2>
            <div className="space-y-4">
              {/* <!-- Question 1 --> */}
              {dataQuestion && dataQuestion.map((question) => (  
              <button key={question.id} className="flex h-auto w-full items-center justify-between rounded-lg bg-gray-800 p-4">
                <span className="text-sm">
                  {question.question}
                </span>
              </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

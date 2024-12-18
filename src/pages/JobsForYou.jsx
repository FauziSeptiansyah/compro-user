import React, { useEffect, useState } from "react";
import { Layout } from "../layout/Layout";
import imghero from "../assets/img/tower.png";
import imgEngineer from "../assets/img/engineering.png.png";
import { Link, useParams } from "react-router-dom";

export const JobsForYou = () => {
  const category = useParams();

  const jobs = [
    {
      id: 1,
      title: "Engineer",
      slug: "engineer",
      category: "engineer",
      image: imgEngineer,
      date: "Post on: 23/10/2024",
      type: "Full Time",
      experience: "Work experience: 1 Year",
      taskask: "Product development",
      location: "Depok - Head Office",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus excepturi ex et placeat cumque. Ratione, eum quo, enim laudantium eveniet, in quidem id temporibus nostrum repellat eligendi libero? Aliquam vero voluptate recusandae aspernatur dolorem impedit, numquam molestias et labore, aliquid esse exercitationem debitis iusto perferendis officia nostrum quidem rerum veritatis porro assumenda placeat quis ipsam quos eum! Sapiente, iure, natus veniam provident quis eaque ut, rerum quas voluptates unde deserunt obcaecati aliquid voluptas eos pariatur nemo consequatur quae. Ratione, rem eligendi aliquam ad tempore laudantium. Iure iusto sunt hic, alias expedita minus architecto earum, porro impedit et odio tenetur eligendi, natus est repellendus dolores animi similique reiciendis? Necessitatibus odio quo similique aut ea perferendis atque minus quam sapiente nesciunt nobis, nostrum fuga iure facilis iusto quidem, excepturi rerum animi aliquid! Alias, exercitationem veniam? Assumenda, voluptate aliquam error deleniti cum dolore similique corporis fuga laborum magni harum sed nisi! Numquam ratione officia magni fuga saepe quas, fugiat eligendi quidem dolorum inventore laboriosam aperiam blanditiis debitis vitae natus aspernatur nesciunt voluptate cupiditate et fugit nihil nemo repudiandae velit rerum. Facere eius asperiores error natus nostrum deserunt quia ab mollitia, laboriosam nobis officia sed, recusandae corrupti reprehenderit ipsa similique explicabo? Ipsam, vitae odio eos quos ad incidunt modi dolore labore ipsum, aut amet. Expedita perspiciatis dicta cupiditate ipsam facilis, dolorem, veniam excepturi, beatae officiis totam odit at iusto. Itaque voluptatum voluptas aliquam nam architecto numquam corporis at omnis excepturi vero! Autem reprehenderit modi delectus, iusto aliquam sunt eos cupiditate maiores cum nisi dignissimos doloribus, id officiis? Nostrum, soluta molestias? Molestias quam, consectetur a temporibus, pariatur assumenda earum neque esse optio, tenetur doloremque odio? Eos, velit quae nostrum a alias ipsam natus nobis quis doloribus aliquid minima praesentium rerum sit aspernatur odit! Saepe eius quisquam odio harum hic facere. Consequatur deleniti corporis ut eaque eveniet consequuntur similique asperiores, ex officia temporibus quos aspernatur voluptatibus nobis quisquam! Magnam nam laborum nemo temporibus earum voluptatum exercitationem placeat amet, facere suscipit iusto natus dolores sunt voluptatem fugit! Quidem consequatur soluta, accusamus eaque, expedita magni recusandae tempore cupiditate sed dolor nemo nihil modi vitae vel earum amet, officia eum? Vero laborum ipsum laudantium? Blanditiis officiis minus praesentium ab quaerat incidunt dolor cumque adipisci accusantium mollitia! Suscipit quasi autem, aliquid praesentium velit quia quam ut dolor tempore est earum ratione itaque, sit nobis hic. Saepe ullam quam doloribus rem officia rerum voluptatibus qui, totam labore recusandae quae, natus voluptate quos, corrupti consequatur in aperiam tenetur. Dignissimos provident nihil, voluptatum id, itaque temporibus unde saepe eligendi suscipit magni quas consectetur nisi quam quae repudiandae distinctio accusamus optio. Tenetur beatae error molestiae alias enim optio sapiente asperiores, amet expedita aliquam, facilis cumque, ipsum suscipit laudantium dolorum modi atque natus labore! Ratione obcaecati neque rerum consequuntur mollitia rem? Voluptatum recusandae aliquam deleniti nam facilis amet libero eum a itaque, adipisci provident iure hic nesciunt error similique iste rerum molestias animi tenetur illo. Similique quo fugit tempore ea nihil optio dolor veritatis maxime. Quisquam animi ipsam pariatur commodi quod ullam sapiente in.",
    },
    {
      id: 2,
      title: "Human Capital",
      slug: "human-capital",
      category: "human-capital",
      image: imgEngineer,
      date: "Post on: 23/10/2024",
      type: "Full Time",
      experience: "Work experience: 1 Year",
      taskask: "Product development",
      location: "Depok - Head Office",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus excepturi ex et placeat cumque. Ratione, eum quo, enim laudantium eveniet, in quidem id temporibus nostrum repellat eligendi libero? Aliquam vero voluptate recusandae aspernatur dolorem impedit, numquam molestias et labore, aliquid esse exercitationem debitis iusto perferendis officia nostrum quidem rerum veritatis porro assumenda placeat quis ipsam quos eum! Sapiente, iure, natus veniam provident quis eaque ut, rerum quas voluptates unde deserunt obcaecati aliquid voluptas eos pariatur nemo consequatur quae. Ratione, rem eligendi aliquam ad tempore laudantium. Iure iusto sunt hic, alias expedita minus architecto earum, porro impedit et odio tenetur eligendi, natus est repellendus dolores animi similique reiciendis? Necessitatibus odio quo similique aut ea perferendis atque minus quam sapiente nesciunt nobis, nostrum fuga iure facilis iusto quidem, excepturi rerum animi aliquid! Alias, exercitationem veniam? Assumenda, voluptate aliquam error deleniti cum dolore similique corporis fuga laborum magni harum sed nisi! Numquam ratione officia magni fuga saepe quas, fugiat eligendi quidem dolorum inventore laboriosam aperiam blanditiis debitis vitae natus aspernatur nesciunt voluptate cupiditate et fugit nihil nemo repudiandae velit rerum. Facere eius asperiores error natus nostrum deserunt quia ab mollitia, laboriosam nobis officia sed, recusandae corrupti reprehenderit ipsa similique explicabo? Ipsam, vitae odio eos quos ad incidunt modi dolore labore ipsum, aut amet. Expedita perspiciatis dicta cupiditate ipsam facilis, dolorem, veniam excepturi, beatae officiis totam odit at iusto. Itaque voluptatum voluptas aliquam nam architecto numquam corporis at omnis excepturi vero! Autem reprehenderit modi delectus, iusto aliquam sunt eos cupiditate maiores cum nisi dignissimos doloribus, id officiis? Nostrum, soluta molestias? Molestias quam, consectetur a temporibus, pariatur assumenda earum neque esse optio, tenetur doloremque odio? Eos, velit quae nostrum a alias ipsam natus nobis quis doloribus aliquid minima praesentium rerum sit aspernatur odit! Saepe eius quisquam odio harum hic facere. Consequatur deleniti corporis ut eaque eveniet consequuntur similique asperiores, ex officia temporibus quos aspernatur voluptatibus nobis quisquam! Magnam nam laborum nemo temporibus earum voluptatum exercitationem placeat amet, facere suscipit iusto natus dolores sunt voluptatem fugit! Quidem consequatur soluta, accusamus eaque, expedita magni recusandae tempore cupiditate sed dolor nemo nihil modi vitae vel earum amet, officia eum? Vero laborum ipsum laudantium? Blanditiis officiis minus praesentium ab quaerat incidunt dolor cumque adipisci accusantium mollitia! Suscipit quasi autem, aliquid praesentium velit quia quam ut dolor tempore est earum ratione itaque, sit nobis hic. Saepe ullam quam doloribus rem officia rerum voluptatibus qui, totam labore recusandae quae, natus voluptate quos, corrupti consequatur in aperiam tenetur. Dignissimos provident nihil, voluptatum id, itaque temporibus unde saepe eligendi suscipit magni quas consectetur nisi quam quae repudiandae distinctio accusamus optio. Tenetur beatae error molestiae alias enim optio sapiente asperiores, amet expedita aliquam, facilis cumque, ipsum suscipit laudantium dolorum modi atque natus labore! Ratione obcaecati neque rerum consequuntur mollitia rem? Voluptatum recusandae aliquam deleniti nam facilis amet libero eum a itaque, adipisci provident iure hic nesciunt error similique iste rerum molestias animi tenetur illo. Similique quo fugit tempore ea nihil optio dolor veritatis maxime. Quisquam animi ipsam pariatur commodi quod ullam sapiente in.",
    },
    {
      id: 3,
      title: "Bussiness",
      slug: "bussiness",
      category: "bussiness",
      image: imgEngineer,
      date: "Post on: 23/10/2024",
      type: "Full Time",
      experience: "Work experience: 1 Year",
      taskask: "Product development",
      location: "Depok - Head Office",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus excepturi ex et placeat cumque. Ratione, eum quo, enim laudantium eveniet, in quidem id temporibus nostrum repellat eligendi libero? Aliquam vero voluptate recusandae aspernatur dolorem impedit, numquam molestias et labore, aliquid esse exercitationem debitis iusto perferendis officia nostrum quidem rerum veritatis porro assumenda placeat quis ipsam quos eum! Sapiente, iure, natus veniam provident quis eaque ut, rerum quas voluptates unde deserunt obcaecati aliquid voluptas eos pariatur nemo consequatur quae. Ratione, rem eligendi aliquam ad tempore laudantium. Iure iusto sunt hic, alias expedita minus architecto earum, porro impedit et odio tenetur eligendi, natus est repellendus dolores animi similique reiciendis? Necessitatibus odio quo similique aut ea perferendis atque minus quam sapiente nesciunt nobis, nostrum fuga iure facilis iusto quidem, excepturi rerum animi aliquid! Alias, exercitationem veniam? Assumenda, voluptate aliquam error deleniti cum dolore similique corporis fuga laborum magni harum sed nisi! Numquam ratione officia magni fuga saepe quas, fugiat eligendi quidem dolorum inventore laboriosam aperiam blanditiis debitis vitae natus aspernatur nesciunt voluptate cupiditate et fugit nihil nemo repudiandae velit rerum. Facere eius asperiores error natus nostrum deserunt quia ab mollitia, laboriosam nobis officia sed, recusandae corrupti reprehenderit ipsa similique explicabo? Ipsam, vitae odio eos quos ad incidunt modi dolore labore ipsum, aut amet. Expedita perspiciatis dicta cupiditate ipsam facilis, dolorem, veniam excepturi, beatae officiis totam odit at iusto. Itaque voluptatum voluptas aliquam nam architecto numquam corporis at omnis excepturi vero! Autem reprehenderit modi delectus, iusto aliquam sunt eos cupiditate maiores cum nisi dignissimos doloribus, id officiis? Nostrum, soluta molestias? Molestias quam, consectetur a temporibus, pariatur assumenda earum neque esse optio, tenetur doloremque odio? Eos, velit quae nostrum a alias ipsam natus nobis quis doloribus aliquid minima praesentium rerum sit aspernatur odit! Saepe eius quisquam odio harum hic facere. Consequatur deleniti corporis ut eaque eveniet consequuntur similique asperiores, ex officia temporibus quos aspernatur voluptatibus nobis quisquam! Magnam nam laborum nemo temporibus earum voluptatum exercitationem placeat amet, facere suscipit iusto natus dolores sunt voluptatem fugit! Quidem consequatur soluta, accusamus eaque, expedita magni recusandae tempore cupiditate sed dolor nemo nihil modi vitae vel earum amet, officia eum? Vero laborum ipsum laudantium? Blanditiis officiis minus praesentium ab quaerat incidunt dolor cumque adipisci accusantium mollitia! Suscipit quasi autem, aliquid praesentium velit quia quam ut dolor tempore est earum ratione itaque, sit nobis hic. Saepe ullam quam doloribus rem officia rerum voluptatibus qui, totam labore recusandae quae, natus voluptate quos, corrupti consequatur in aperiam tenetur. Dignissimos provident nihil, voluptatum id, itaque temporibus unde saepe eligendi suscipit magni quas consectetur nisi quam quae repudiandae distinctio accusamus optio. Tenetur beatae error molestiae alias enim optio sapiente asperiores, amet expedita aliquam, facilis cumque, ipsum suscipit laudantium dolorum modi atque natus labore! Ratione obcaecati neque rerum consequuntur mollitia rem? Voluptatum recusandae aliquam deleniti nam facilis amet libero eum a itaque, adipisci provident iure hic nesciunt error similique iste rerum molestias animi tenetur illo. Similique quo fugit tempore ea nihil optio dolor veritatis maxime. Quisquam animi ipsam pariatur commodi quod ullam sapiente in.",
    },
    {
      id: 4,
      title: "Web Developer",
      slug: "web-developer",
      category: "web-developer",
      image: imgEngineer,
      date: "Post on: 23/10/2024",
      type: "Full Time",
      experience: "Work experience: 1 Year",
      taskask: "Product development",
      location: "Depok - Head Office",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus excepturi ex et placeat cumque. Ratione, eum quo, enim laudantium eveniet, in quidem id temporibus nostrum repellat eligendi libero? Aliquam vero voluptate recusandae aspernatur dolorem impedit, numquam molestias et labore, aliquid esse exercitationem debitis iusto perferendis officia nostrum quidem rerum veritatis porro assumenda placeat quis ipsam quos eum! Sapiente, iure, natus veniam provident quis eaque ut, rerum quas voluptates unde deserunt obcaecati aliquid voluptas eos pariatur nemo consequatur quae. Ratione, rem eligendi aliquam ad tempore laudantium. Iure iusto sunt hic, alias expedita minus architecto earum, porro impedit et odio tenetur eligendi, natus est repellendus dolores animi similique reiciendis? Necessitatibus odio quo similique aut ea perferendis atque minus quam sapiente nesciunt nobis, nostrum fuga iure facilis iusto quidem, excepturi rerum animi aliquid! Alias, exercitationem veniam? Assumenda, voluptate aliquam error deleniti cum dolore similique corporis fuga laborum magni harum sed nisi! Numquam ratione officia magni fuga saepe quas, fugiat eligendi quidem dolorum inventore laboriosam aperiam blanditiis debitis vitae natus aspernatur nesciunt voluptate cupiditate et fugit nihil nemo repudiandae velit rerum. Facere eius asperiores error natus nostrum deserunt quia ab mollitia, laboriosam nobis officia sed, recusandae corrupti reprehenderit ipsa similique explicabo? Ipsam, vitae odio eos quos ad incidunt modi dolore labore ipsum, aut amet. Expedita perspiciatis dicta cupiditate ipsam facilis, dolorem, veniam excepturi, beatae officiis totam odit at iusto. Itaque voluptatum voluptas aliquam nam architecto numquam corporis at omnis excepturi vero! Autem reprehenderit modi delectus, iusto aliquam sunt eos cupiditate maiores cum nisi dignissimos doloribus, id officiis? Nostrum, soluta molestias? Molestias quam, consectetur a temporibus, pariatur assumenda earum neque esse optio, tenetur doloremque odio? Eos, velit quae nostrum a alias ipsam natus nobis quis doloribus aliquid minima praesentium rerum sit aspernatur odit! Saepe eius quisquam odio harum hic facere. Consequatur deleniti corporis ut eaque eveniet consequuntur similique asperiores, ex officia temporibus quos aspernatur voluptatibus nobis quisquam! Magnam nam laborum nemo temporibus earum voluptatum exercitationem placeat amet, facere suscipit iusto natus dolores sunt voluptatem fugit! Quidem consequatur soluta, accusamus eaque, expedita magni recusandae tempore cupiditate sed dolor nemo nihil modi vitae vel earum amet, officia eum? Vero laborum ipsum laudantium? Blanditiis officiis minus praesentium ab quaerat incidunt dolor cumque adipisci accusantium mollitia! Suscipit quasi autem, aliquid praesentium velit quia quam ut dolor tempore est earum ratione itaque, sit nobis hic. Saepe ullam quam doloribus rem officia rerum voluptatibus qui, totam labore recusandae quae, natus voluptate quos, corrupti consequatur in aperiam tenetur. Dignissimos provident nihil, voluptatum id, itaque temporibus unde saepe eligendi suscipit magni quas consectetur nisi quam quae repudiandae distinctio accusamus optio. Tenetur beatae error molestiae alias enim optio sapiente asperiores, amet expedita aliquam, facilis cumque, ipsum suscipit laudantium dolorum modi atque natus labore! Ratione obcaecati neque rerum consequuntur mollitia rem? Voluptatum recusandae aliquam deleniti nam facilis amet libero eum a itaque, adipisci provident iure hic nesciunt error similique iste rerum molestias animi tenetur illo. Similique quo fugit tempore ea nihil optio dolor veritatis maxime. Quisquam animi ipsam pariatur commodi quod ullam sapiente in.",
    },
  ];

  const [data, setData] = useState(jobs);

  useEffect(() => {
    const jobsFix = jobs.filter((job) => job.category === category.slug);
    setData(jobsFix);
  }, [category.slug]);

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

      {/* <!-- Jobs Section --> */}
      <section className="relative -top-64 z-10">
        <div className="mx-auto max-w-7xl px-4">
          {/* <!-- Section Title --> */}
          <div className="item-center mb-8 justify-center text-center">
            <h2 className="text-sm font-bold text-red-500">JOBS FOR YOU</h2>
            <h3 className="mt-4 text-3xl font-semibold">Jobs For You</h3>
          </div>

          {/* <!-- Job Cards Container --> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* <!-- Job Card 1 --> */}
            {data &&
              data.map((jobs) => (
                <Link
                  to={`/DetailJobs/${jobs.slug}`}
                  key={jobs.id}
                  className="flex items-center space-x-4 rounded-lg bg-gray-800 p-6 shadow-lg"
                >
                  <img
                    src={jobs.image}
                    alt="Job Image"
                    className="h-auto w-auto rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{jobs.title}</h3>
                    <p className="text-sm text-gray-400">{jobs.date}</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-300">
                      <li>{jobs.type}</li>
                      <li>{jobs.experience}</li>
                      <li>{jobs.task}</li>
                      <li>{jobs.location}</li>
                    </ul>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

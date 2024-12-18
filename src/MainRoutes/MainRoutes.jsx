import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Career } from "../pages/Career";
import { JobsForYou } from "../pages/JobsForYou";
import { DetailJobs } from "../pages/DetailJobs";
import { Contact } from "../pages/Contact";
import { FAQ } from "../pages/FAQ";
import { Product } from "../pages/Product";
import { Blog } from "../pages/Blog";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/JobsForYou/:slug" element={<JobsForYou />} />
        <Route path="/DetailJobs/:slug" element={<DetailJobs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

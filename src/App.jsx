import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainProvider } from "./context/mainContext";
import { Blogs, Contact, Customers, Home, Shop } from "./pages/index";
import { Collection } from "./components/index";
import "./framework/framework.css";
import QuickSearchs from "./pages/home/services/QuickSearchs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Collection show={<Home />} />} />
          <Route
            path="/services"
            element={<Collection show={<QuickSearchs />} />}
          />
          <Route path="/about" element={<Collection show={<Customers />} />} />
          <Route path="/blog" element={<Collection show={<Blogs />} />} />
          <Route path="/shop" element={<Collection show={<Shop />} />} />
          <Route path="/contact" element={<Collection show={<Contact />} />} />
          <Route path="*" element={<Collection show={<ErrorPage />} />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
};

export default App;

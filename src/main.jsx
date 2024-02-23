import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import CarRepair from "./components/Galary/CarRepair.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="galary" element={<CarRepair />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

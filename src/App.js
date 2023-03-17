import "./App.css";
import AboutUs from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
import Workshops from "./Pages/Workshops/Workshops";
import Contact from "./Pages/Contact/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/workshops",
    element: <Workshops />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;

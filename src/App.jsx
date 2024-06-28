import React, { useContext, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import BuildPc from "./Components/BuildPc/BuildPc";
import Benchmark from "./Components/Benchmark/Benchmark";
import Contact from "./Components/Contact/Contact";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AuthBanner from "./Components/AuthBanner/AuthBanner";
import PCTable from "./Components/BuildPCTable/PCTable";
import { TokenContext } from "./Context/Token";
import BuildTable from "./Components/BuildTable/BuildTable";
import Preference from "./Components/RecomendationHome/Preference";
import BuildTableRecommendation from "./Components/RecomendationHome/BuildTableRecommendation";
import ComparisonTable from "./Components/Comparison/ComparisonTable";
import Comparison from "./Components/Comparison/Comparison";

function App() {
  // Define your router configuration
  const router = createBrowserRouter([
    {
      path: "/", // Root path
      element: <Layout />, // Main layout component
      children: [
        { index: true, element: <Home /> }, // Index route (e.g., /)
        { path: "/buildPc", element: <BuildPc /> }, // Build PC route
        { path: "/benchmark", element: <Benchmark /> }, // Benchmark route
        { path: "/comparison", element: <Comparison /> }, // Comparison route
        { path: "/compare/:model", element: <ComparisonTable /> }, // Comparison table route with dynamic model parameter
        { path: "/contact", element: <Contact /> }, // Contact route
        { path: "/register", element: <Register /> }, // Register route
        { path: "/login", element: <Login /> }, // Login route
        { path: "/pc-table/:model", element: <PCTable /> }, // PC table route with dynamic model parameter
        { path: "/recomendation", element: <Preference /> }, // Recommendation route
        { path: "/build-table", element: <BuildTable /> }, // Build table route
        {
          path: "/build-table-recommendation",
          element: <BuildTableRecommendation />, // Build table recommendation route
        },
      ],
    },
  ]);

  // Access TokenContext and setToken function
  const { setToken } = useContext(TokenContext);

  // Effect to set token from localStorage on component mount
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [setToken]); // Dependency array ensures useEffect runs only once

  // Render RouterProvider with configured router
  return <RouterProvider router={router} />;
}

export default App;

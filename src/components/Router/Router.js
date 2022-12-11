import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactForm/ContactForm";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import DetailsCard from "../Projects/DetailsCard";
import Projects from "../Projects/Projects";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Navbar></Navbar>,
      },
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/",
        element: <Projects></Projects>,
        loader: () => fetch("product.json"),
      },
      {
        path: "/projects/:id",
        element: <DetailsCard></DetailsCard>,
        loader: ({ params }) =>
          fetch(`https://portfolio-server-nu.vercel.app/${params.id}`),
      },
      {
        path: "/",
        element: <ContactForm></ContactForm>,
      },
    ],
  },
]);

export default router;

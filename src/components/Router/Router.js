import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactForm/ContactForm";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Servieces from "../Servieces/Servieces";

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
   {
    path:'/',
    element:<Layout></Layout>,
    children: [
        {
            path:'/',
            element:<Navbar></Navbar>
        },
        {
            path:'/',
            element:<Header></Header>
        },
        {
            path:'/',
            element:<AboutMe></AboutMe>
        },
        {
            path:'/',
            element:<Servieces></Servieces>
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        },
        {
            path:'/contact',
            element:<ContactForm></ContactForm>
        },
    ]
   }
  ]);

  export default router;
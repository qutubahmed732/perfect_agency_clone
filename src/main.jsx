import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Components/Layout.jsx'
import App from './App.jsx'
import PrivacyPolicy from './Components/PrivacyPolicy.jsx'
import TermsAndConditions from './Components/TermsAndConditions.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Header from "./Components/Header";
import AdvisingSection from "./Components/AdvisingSection";
import Marketing from "./Components/Marketing";
import Cta_section from "./Components/Cta_section";
import Records from "./Components/Records.jsx";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // yeh header/footer wala layout hai
    children: [
      {
        index: true,
        element: <App /> // home page content only
      }
    ]
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy /> // alag page, no layout
  },
  {
    path: "/termsandconditions",
    element: <TermsAndConditions />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Layout from './Components/Layout.jsx'
// import App from './App.jsx'
// import PrivacyPolicy from './Components/PrivacyPolicy.jsx'
// import TermsAndConditions from './Components/TermsAndConditions.jsx'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import ScrollToTop from './Components/ScrollToTop.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // yeh header/footer wala layout hai
//     children: [
//       {
//         index: true,
//         element: <App /> // home page content only
//       }
//     ]
//   },
//   {
//     path: "/privacypolicy",
//     element: <PrivacyPolicy /> // alag page, no layout
//   },
//   {
//     path: "/termsandconditions",
//     element: <TermsAndConditions />
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}>
//       <ScrollToTop />
//     </RouterProvider >
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Components/Layout";
import App from "./App";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path: "termsandconditions",
        element: <TermsAndConditions />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

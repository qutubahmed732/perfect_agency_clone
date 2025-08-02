// import { Outlet } from "react-router-dom"

// function Layout() {
//   return (
//     <div className="w-full">
      
//       <Outlet />
//     </div>
//   )
// }

// export default Layout

import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
    </>
  );
}

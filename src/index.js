 import React from 'react';
 import ReactDOM from 'react-dom';

 //import ReactDOM from 'react-dom/client';
 import './index.css';
 import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This assumes you have a <div id="root"></div> in your HTML
);


// const AppLayout = () => (
//   <>
//   <Header />
//   <Home/>
//   <Footer/>
//     {/* <Navbar />
//     <Outlet /> */}
//   </>
// );

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "products",
//         element: <Products />,
//       },
//       {
//         path: "reports",
//         element: <Reports />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
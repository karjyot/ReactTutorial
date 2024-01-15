import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './App';
import Dashboard from './components/features/dashboard/dashboard';
import Login from './components/features/login/login.component';
import ForgotPassword from './components/features/forgot-password/forgot-password.component';
import Users from './../src/components/features/Users/users.component'
import "./app.css";
import { Provider } from 'react-redux';
import  store  from './store' 
import interceptor from './interceptors/http-interceptor';
export default function Routing() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route index element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
      </Provider>
    </BrowserRouter>
    
  );


} 
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Routing />);
//     const routesConfig = [
//         {
          
//           path: "/login",
//           element: <Login />,
//         },
//         {
//           path: "/forgot-password",
//           element: <ForgotPassword />,
//         },
//         {
//           element: <AppLayout />,
//           children: [
//             {
//               path: "/dashboard",
//               element: <Dashboard />,
//             },
//           ],
//         },
//       ];
//       const router = createBrowserRouter(routesConfig);
//       return <RouterProvider router={router} />;

// }

// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<Provider store={store}><Routing /></Provider>);
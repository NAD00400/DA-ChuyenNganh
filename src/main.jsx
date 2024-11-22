import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { App } from './App.jsx';
import { About } from './Component/About/About.jsx';
import { AdminPage } from './Component/Admin/adminPage.jsx';
import { Event } from './Component/Event/Event.jsx';
import { HomePage } from './Component/Home/home.jsx';
import ErrorPage from './page/errorPage.jsx';
import { LoginPage } from './page/loginPage.jsx';
// import { AuthWrapper } from './Component/authentication/auth.context.jsx';
import { EventManagement } from './Component/Admin/EventManagement.jsx';
import { ProgramsManagement } from './Component/Admin/ProgramsManagement.jsx';
import { UserManagement } from './Component/Admin/UserManagement.jsx';
import './style/global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children :[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path:"/new",
        element: <Event/>
      },
      {
        path:"/about",
        element: <About/>
      },
    ] 
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/admin",
    element: <AdminPage/>,
    errorElement: <ErrorPage/>,
    children :[
      {
        index: "/usermanagement",
        element: <UserManagement/>
      },
      {
        path:"/eventrmanagement",
        element: <EventManagement/>
      },
      {
        path:"/programsmanagement",
        element: <ProgramsManagement/>
      },
    ] 
  },
]);
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router ={router} />
  // /* </AuthWrapper> */
)

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { App } from './App.jsx';
import { About } from './Component/About/About.jsx';

import { Event } from './Component/Event/Event.jsx';
import { HomePage } from './Component/Home/home.jsx';
import ErrorPage from './page/errorPage.jsx';
import { LoginPage } from './page/loginPage.jsx';


import { EventManagement } from './Component/Admin/EventManagement.jsx';
import { ProgramsManagement } from './Component/Admin/ProgramsManagement.jsx';
import { UserManagement } from './Component/Admin/UserManagement.jsx';
import { Programs } from './Component/Program/Programs.jsx';
import { AuthWrapper } from './Component/context/auth.context.jsx';
import { AdminPage } from './page/AdminPage.jsx';
import './style/global.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/new",
        element: <Event />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/programs",
        element: <Programs />
      },
      
    ]
  },{
    path: "/login",
    element: <LoginPage />
  }
  ,{
    path: "/admin",
    element: <AdminPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProgramsManagement/>
      },
      {
        path: "userManagement",
        element: <UserManagement/>
      },
      {
        path: "eventManagement",
        element: <EventManagement/>
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthWrapper>
    <RouterProvider router={router}/>,
  </AuthWrapper>
);
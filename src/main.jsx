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


import {  EventMm } from './Component/Admin/EvenMm.jsx';
import { ProgramsMm } from './Component/Admin/ProgramsMm.jsx';
import { UserMm } from './Component/Admin/UserMm.jsx';
import { CatMn } from './Component/Admin/CatMm.jsx';

import { Programs } from './Component/Program/Programs.jsx';
import { AuthWrapper } from './Component/context/auth.context.jsx';
import { AdminPage } from './page/AdminPage.jsx';
import './style/global.css';
import { ProgramDetail } from './Component/Program/ProgramDetail.jsx';

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
        element: <Programs />,
        children: [
          {
            path: "program-detail/:id",  // Thêm id vào đường dẫn
            element: <ProgramDetail />
          },
        ]
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
        
        element: <UserMm/>
      },
      {
        path: "programs-Management",
        element: <ProgramsMm/>
      },
      {
        path: "event-Management",
        element: <EventMm/>
      },
      {
        path: "categories-Management",
        element: <CatMn/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthWrapper>
    <RouterProvider router={router} future={{ v7_startTransition: true}} />,
  </AuthWrapper>
);
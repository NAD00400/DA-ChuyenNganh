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




import { Programs } from './Component/Program/Programs.jsx';
import { AuthWrapper } from './Component/context/auth.context.jsx';
import { AdminPage } from './page/AdminPage.jsx';
import './style/global.css';
import { ProgramDetail } from './Component/Program/ProgramDetail.jsx';
import { Leaning } from './Component/Learning/Learning.jsx';
import { LearningMm } from './Component/Admin/LearningMm/LeaningMm.jsx';
import { CatMn } from './Component/Admin/catMm/CatMm.jsx';
import { EventMm } from './Component/Admin/EventMm/EvenMm.jsx';
import { ProgramsMm } from './Component/Admin/programsMm/ProgramsMm.jsx';
import { UserMm } from './Component/Admin/UserMm/UserMm.jsx';
import { CoursesVideoMn } from './Component/Admin/CoursesVideoMm/CoursesVideoMn.jsx';

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
      },
      {
        path:"/program-detail/:idP",
        element: <ProgramDetail/>
      },
      {
        path:"/learning",
        element: <Leaning/>
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
      {
        path: "learning-Management",
        element: <LearningMm/>
      },
      {
        path: "courseVideo-Management",
        element: <CoursesVideoMn/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthWrapper>
    <RouterProvider router={router} future={{ v7_startTransition: true}} />,
  </AuthWrapper>
);
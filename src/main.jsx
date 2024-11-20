import  { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {App} from './App.jsx'

import ErrorPage from './page/errorPage.jsx';
import { Event} from './Component/Event/Event.jsx';
import { LoginPage } from './page/loginPage.jsx';
import { HomePage } from './Component/Home/home.jsx';
import { About } from './Component/About/About.jsx';


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

]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router ={router}/>
)

import  { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {App} from './App.jsx'
import { HomePage } from './component/Home/home.jsx';
import ErrorPage from './page/errorPage.jsx';
import { NewI4 } from './Component/New/new.jsx';


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
        element: <NewI4/>
      },
    ] 
  },
  // {
  //   path: "/login",
  //   element: <LoginPage/>
  // },
  // {
  //   path: "/register",
  //   element: <><PrivateRoute><RegisterPage/></PrivateRoute>
  //   </>
  // },
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router ={router}/>
)

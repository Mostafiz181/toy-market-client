import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUP.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import AllToy from './components/AllToy/AllToy.jsx';
import PrivateRoute from './components/Routs/PrivateRoute.jsx';
import AddToy from './components/AddToy/AddToy.jsx';
import MyToy from './components/MyToy/MyToy.jsx';
import UpdateToy from './components/UpdateToy/UpdateToy.jsx';
import SingleToy from './components/SingleToy/SingleToy.jsx';
import Shop from './components/Shop/Shop.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>
       
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      
      {
        path:'/signUp',
        element:<SignUp></SignUp>,

      },
      {
        path:'/allToy',
        element:<AllToy></AllToy>,
        

      },
      {
        path:"/AddToy",
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>,

      },
      {
        path:'updateToy/:id',
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader:({params})=> fetch(`https://simple-toy-server.vercel.app/toys/${params.id}`)
      }
      ,
      {
        path:'/mytoy',
        element:<PrivateRoute><MyToy></MyToy></PrivateRoute>,

      },
      {
        path:'/singleToy/:id',
        element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader:({params})=>fetch(`https://simple-toy-server.vercel.app/toys/${params.id}`)
      },
      {
        path:'/shop',
        element:<Shop></Shop>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)

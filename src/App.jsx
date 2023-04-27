import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './LayOut/LayOut';
import Home from "./components/Home";
import About from "./components/About";
import Gallary from "./components/Gallary";

 const router = createBrowserRouter([
  {path:'/',element:<LayOut/> , children:[
    {path:'/home',element:<Home/>},
    {path:'/about',element:<About/>},
    {path: '/gallary', element:<Gallary/>}
  ]}
 ])

function App(){
  return(
  <>
  <RouterProvider router={router}/>
  </>
  );
}
export default App;
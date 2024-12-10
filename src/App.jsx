import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/shared/Navbar'
import Information from './Components/Information/Information'
import Contact from './Components/Contact/Contact'
import RootLayout from './Layout/RootLayout'
import TravelPoint from './Components/Tickets/RouteDetails/RouteDetails'
import RouteDetails from './Components/Tickets/RouteDetails/RouteDetails'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout></RootLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="information" element={<Information></Information>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="tickets/:from/:to" element={<RouteDetails></RouteDetails>}></Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

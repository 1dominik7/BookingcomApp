import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom'
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import TypeHotels from './pages/typeHotels/TypeHotels';
import FlightHome from './pages/flightHome/FlightHome';
import AttractionsHome from './pages/attractionsHome/AttractionsHome';
import AirportTaxis from './pages/airportTaxis/AirportTaxis';
import FlightList from './pages/flightList/FlightList';
import Flight from './components/flight/Flight';
import Navbar from './components/navbar/Navbar';
import CarRentalsHome from './pages/carRentalsHome/CarRentalsHome';
import CarRentalsList from './pages/carRentalsList/CarRentalsList';
import Car from './pages/car/Car';
import ReserveCar from './components/reserveCar/ReserveCar';
import AttractionsList from './pages/attractionsList/AttractionsList';
import Attractions from './pages/attractions/Attractions';
import ReserveAttraction from './components/reserveAttraction/ReserveAttraction';
import TaxiList from './pages/taxiList/TaxiList';
import Taxi from './pages/taxi/Taxi';
import Register from './pages/register/Register';
import HeadLine from './components/headline/HeadLine';
import './App.scss'
import ManageAccount from './pages/manageAccount/ManageAccount';
import TripsAccount from './pages/tripsAccount/TripsAccount';
import GeniusAccount from './pages/geniusAccount/GeniusAccount';
import RewardsnWallet from './pages/rewardsnwallet/Rewards&Wallet';
import MyWishList from './pages/myWishList/MyWishList';
import { useEffect, useState } from 'react';


const Layout = () => {

  const location = useLocation()
  let path = location.pathname

  const [selected, setSelected] = useState(JSON.parse(sessionStorage.getItem("selected")))
  const [openLang, setOpenLang] = useState(false)
  const [language, setLanguage] = useState(JSON.parse(localStorage.getItem("selectedFlag")) || 1)

  const userNavbar = () => {
    if(path === '/manageAccount' || path === '/myReservation' || path === '/genius' || path === '/rewardsnWallet' || path === '/myWishList')
      return true
  }

  useEffect(() => {
    window.localStorage.setItem("selectedFlag", language);
    window.sessionStorage.setItem("selected", selected);
  }, [language,selected]);

  return (
    <div className='app'>
      {
        (path === '/login' || path === '/register') ?
          <HeadLine language={language} setLanguage={setLanguage} openLang={openLang} setOpenLang={setOpenLang}/> :
          <Navbar userNavbar={userNavbar()} selected={selected} setSelected={setSelected} language={language} setLanguage={setLanguage} openLang={openLang} setOpenLang={setOpenLang} />}
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/hotels",
        element: <List/>
      },
      {
        path: "/hotels/:id",
        element: <Hotel/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/hotels/type/:type",
        element: <TypeHotels/>
      },
      {
        path: "/flights",
        element: <FlightHome/>
      },
      {
        path: "/flights/flightList",
        element: <FlightList/>
      },
      {
        path: "/flights/flightList/:id",
        element: <Flight/>
      },
      {
        path: "/carRentals",
        element: <CarRentalsHome/>
      },
      {
        path: "/carRentals/carRentalsList",
        element: <CarRentalsList/>
      },
      {
        path: "/carRentals/:id",
        element: <Car/>
      },
      {
        path: "/carRentals/:id",
        element: <ReserveCar/>
      },
      {
        path: "/attractions",
        element: <AttractionsHome/>
      },
      {
        path: "/attractions/attractionsList",
        element: <AttractionsList/>
      },
      {
        path: "/attractions/:id",
        element: <Attractions/>
      },
      {
        path: "/attractions/:id",
        element: <ReserveAttraction/>
      },
      {
        path: "/taxi",
        element: <AirportTaxis/>
      },
      {
        path: "/taxi/taxiList",
        element: <TaxiList/>
      },
      {
        path: "/taxi/:id",
        element: <Taxi/>
      },
      {
        path: "/manageAccount",
        element: <ManageAccount/>
      },
      {
        path: "/myReservation",
        element: <TripsAccount/>
      },
       {
        path: "/genius",
        element: <GeniusAccount/>
      },
      {
        path: "/rewardsnWallet",
        element: <RewardsnWallet/>
      },
      {
        path: "/myWishList",
        element: <MyWishList/>
      },
    ]
    }
])


function App() {
  return (
    <div >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingCartProvider } from "../../Context"
import { Home } from "../Home"
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import { NotFound } from "../NotFound"
import { SignIn } from "../SignIn"
import { Navbar } from "../../Components/Navbar"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"
import { initializeLocalStorage } from "../../Context"
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/office', element: <Home /> },
    { path: '/jewelry', element: <Home /> },
    { path: '/bags', element: <Home /> },
    { path: '/shoes', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

const App = () => {
  
  initializeLocalStorage()

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
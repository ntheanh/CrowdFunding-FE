import "./App.css"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login/Login"
import Register from "./pages/Login/Register/Register"
import ProductDetails from "./component/ProductDetails/ProductDetails"
import Shop from "./pages/Shop/Shop"
import Collection from "./pages/Collection/Collection"
import CategoryPage from "./pages/Collection/CategoryPage"
import Profile from "./pages/Profile/Profile"
import ProfileDetail from "./pages/Profile/component/ProfileDetail"
import Order from "./pages/Profile/component/Order"
import OrderDetail from "./pages/Profile/component/OrderDetail"
import AboutUs from "./pages/AboutUs/AboutUs"
import DonateHopeFund from "./pages/DonateHopeFund/DonateHopeFund"
import SuccessDonate from "./pages/SuccessDonate/SuccessDonate"
import { useEffect } from "react"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="collection/:id" element={<Collection />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="du-an" element={<Shop />} />
          <Route path="ve-chung-toi" element={<AboutUs />} />
          <Route path="ung-ho-hopefund" element={<DonateHopeFund />} />
          <Route path="ung-ho-thanh-cong" element={<SuccessDonate />} />

          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="user" element={<Profile />}>
            <Route path="profile" element={<ProfileDetail />} />
            <Route path="order" element={<Order />} />
            <Route path="order/:id" element={<OrderDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default App

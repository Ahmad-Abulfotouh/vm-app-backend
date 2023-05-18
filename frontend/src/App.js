import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// pages
import Home from './pages/Home'

import OrderList from './pages/OrderList'
import Wallet from './pages/Wallet'
import Order from './pages/Order'

import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

import History from "./pages/History";

// components
import TopNav from './components/TopNav'
import LowerNav from './components/LowerNav'

function App() {
  return (
    <>
    <AppProvider>
      <UserProvider>
        <BrowserRouter>
          <TopNav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/order" element={<Order />} />
              <Route path="/order-list" element={<OrderList />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </main>
          <LowerNav />
        </BrowserRouter>
      </UserProvider>
    </AppProvider>
    <ToastContainer />
    </>
  );
}

export default App;

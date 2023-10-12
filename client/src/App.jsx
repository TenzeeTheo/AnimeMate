import {Route,Routes} from "react-router-dom"


import Home from "./pages/Home"

import Layout from "./components/Layout/Layout"

// import './styles/custom.css'
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Dashboard from './pages/auth/Dashboard'
import NotFound from './pages/NotFound'

import PrivateRoutes from './components/layout/PrivateRoutes';

// {/* my idea */}
import Cart from './pages/page/Cart'
import BestSeller from "./pages/page/Best-Seller"
import PopularSeries from "./pages/page/Popular-Series"
// {/* my extra */}

function App(){
  return(
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="login" element={< Login />} />
            <Route path="signup" element={< SignUp />} />
          {/* AUTH */}
          <Route path="Cart" element= {<Cart/>}/>
            <Route path="best-seller" element={ <BestSeller/>}/>
            <Route path="popular-series" element={<PopularSeries/>}/>
            {/* my extra */}

        {/* PRIVATE AUTH ROUTES */}
          <Route element={<PrivateRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
          </Route>  
          <Route path="*" element={<NotFound />} /> 

        </Route>
      </Routes>
    </div>
  )
}
export default App
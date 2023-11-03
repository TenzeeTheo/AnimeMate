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
import Cart from './components/utils/Cart'
import MangaCollection from "./pages/manga/MangaCollection"
import BestSeller from "./pages/manga/Best-Seller"
import PopularSeries from "./pages/manga/Popular-Series"
// {/* my extra */}


function App(){
  return(
    <div  >
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>

          {/* AUTH */}
            <Route path="login" element={< Login />} />
            <Route path="signup" element={< SignUp />} />

            {/* my extra */}
          <Route path="Cart" element= {<Cart/>}/>

           

        {/* PRIVATE AUTH ROUTES */}
          <Route element={<PrivateRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
          </Route>  

          {/* Manga Collection */}
          <Route path="store">
            <Route path="manga" element={ <MangaCollection/>}/>
            <Route path="best-seller" element={ <BestSeller/>}/>
            <Route path="popular-series" element={<PopularSeries/>}/>
          </Route>  

          <Route path="*" element={<NotFound />} /> 

        </Route>
      </Routes>
    </div>
  )
}
export default App
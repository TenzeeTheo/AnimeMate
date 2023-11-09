import {Route,Routes} from "react-router-dom"


import Home from "./pages/Home"

import Layout from "./components/Layout/Layout"

// import './styles/custom.css'
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/Signup"
import Dashboard from './pages/auth/Dashboard'
import NotFound from './pages/NotFound'

import PrivateRoutes from './components/layout/PrivateRoutes';
import MangaAdd from "./pages/manga/MangaAdd"
// {/* my idea */}
import Cart from './components/use/Cart'
import MangaCollection from "./pages/manga/MangaCollection"
// import BestSeller from "./pages/manga/Best-Seller"
// import PopularSeries from "./pages/manga/Popular-Series"
import MangaDetail from "./pages/manga/MangaDetail"
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
              <Route path="profile" element={<Dashboard />} />
          </Route>  

          {/* Manga Collection */}
          <Route path="store">
                <Route path="mangas" element={ <MangaCollection/>}/>
                {/* <Route path="best-seller" element={ <BestSeller/>}/> */}
                {/* <Route path="popular-series" element={<PopularSeries/>}/> */}
            <Route path="manga">
              {/* NEW:MANGA DETAILS PAGE */}
              <Route path=":id" element={<MangaDetail/>}/>
              <Route element= {<PrivateRoutes/>} >
                <Route path="add" element = {<MangaAdd/>}/>
              </Route>
            </Route>
          </Route>  

          <Route path="*" element={<NotFound />} /> 

        </Route>
      </Routes>
    </div>
  )
}
export default App
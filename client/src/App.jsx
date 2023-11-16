import {Route,Routes} from "react-router-dom"


import Home from "./pages/Home"

import Layout from "./components/Layout/Layout"

// import './styles/custom.css'
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/Signup"
import Dashboard from './pages/auth/Dashboard'
import NotFound from './pages/NotFound'

import PrivateRoutes from './components/layout/PrivateRoutes';
// {/* my idea */}
import Cart from './components/use/Cart'
import MangaCollection from "./pages/manga/MangaCollection"
import MangaAdd from "./pages/manga/MangaAdd"
import MangaDetail from "./pages/manga/MangaDetail"
import MangaEdit from "./pages/manga/MangaEdit"
// {/* my extra */}
import MangaSale from "./pages/manga/MangaSale"


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
            <Route path="manga">
              {/* NEW:MANGA DETAILS PAGE */}
              <Route path=":id" element={<MangaDetail/>}/>
              <Route element= {<PrivateRoutes/>} >
                <Route path="add" element = {<MangaAdd/>}/>
                <Route path="OnSale" element={ <MangaSale/>}/>
                <Route path="edit/:id" element = {<MangaEdit/>}/>
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
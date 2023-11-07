
import { useState, useEffect, useRef } from 'react';
import productService from '../../services/productService';
import List from '../../components/feature/Manga/List'
import Container from "react-bootstrap/Container";
import TuLoader from '../../components/common/Loader/TuLoader'

import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';


const MangaCollection = () => {
  const {user} =useAuth();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);

  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      fetchData();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        effectRan.current = true;
      }
    }
  }, []);

  async function fetchData (){
    try {
     const res = await productService.getAll()
     const data = await res.data;      
     console.log(data);
     setData(data)
    } catch (err) {
      console.log(err?.response);
      setError(true); 
      
    }
  }


   
     // CONDITIONAL LOAD: ERROR
     if (error) {
      return (
        <Container className="text-center mt-4">
          <p>Error page......</p>
        </Container>
      )
    }
  
    // CONDITIONAL LOAD: LOADING
    if (loading) {
      return (
        <Container className="text-center mt-4">
          <TuLoader />
        </Container>
      )
    }
   

  return (
    <Container className="text-center mt-4">
      <h1> SHOP FOR AUSTRALIA'S MOST LOVED MANGA TITLES!</h1>


      {/* Admin Section Add Manga */}

      {user && <div className='py-5'>
        <button> <Link to='/store/manga/add'>Add Manga</Link> </button> </div>}




      <List products={data}/>
    </Container>
  )
}

export default MangaCollection
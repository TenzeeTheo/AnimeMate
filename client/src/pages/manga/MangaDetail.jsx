import {useState,useEffect,useRef} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { Container, Table ,Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import * as styles from "./MangaDetail.css";
import productService from '../../services/productService';
import { priceFormatter } from '../../utils/readUtils';
import TuLoader from '../../components/common/Loader/TuLoader';
import DeleteBtn from '../../components/common/Button/Delete/DeleteBtn';
import Edit from '../../components/common/Button/Edit/Edit';




const MangaDetail = () => {
  const {user} = useAuth();
    const params =useParams();
    const navigate = useNavigate();

    const [mangaData, setMangaData] = useState({
        id: params.id,
        name: "",
        description: "",
        author: "",
        price: 0,
        page: "",
        releaseDate: "",
        onSale: true,
        isAvailable: true,
        image: ""
    });
    const [loading , setLoading]= useState(true);
    const [error, setError] = useState(false);
      // Destructure data state nested object properties
  const { id, name, description, author, price, page, releaseDate, isAvailable, image } = mangaData;

  const effectRan = useRef(false);

  useEffect(()=>{
    if(effectRan.current === false){
        fetchManga();
        setLoading(false)

        // Clean Up 
        return() =>{
            effectRan.current = true
        }

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  // Format timestamp to a human-readable date
  const formattedReleaseDate = new Date(releaseDate._seconds * 1000 + releaseDate._nanoseconds / 1e6);




    async function fetchManga(){
        try {
            const response = await productService.getById(id)
            const fetchManga = await response.data;
            console.log(fetchManga)

            setMangaData(productOnMount =>({
                ...productOnMount,
                ...fetchManga
            }));

            
        } catch (error) {
            console.log(error?.response);
            setError(true)
        }
    }
      // [2] DELETION OF MANGA
    const handleDelete = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        // Call API - must match server route + pass id to route
        const response = await productService.del(id);
        console.log(response);
        // onSuccess - Redirect
        setLoading(false);
        navigate('/store/mangas');

      } catch (err) {
        console.log(err?.response);
        setError(true);
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }
    };

      // CONDITIONAL LOAD: ERROR
      if (error) {
        return (
          <Container className="text-center mt-4">
            <p>Error page......</p>
          </Container>
        )
      }
    
      // CONDITIONAL LOAD: LOADING
      if (loading && effectRan.current ===false) {
        return (
          <Container className="text-center mt-4">
            <TuLoader />
          </Container>
        )
      }
  return (

<Container>
  
  {/* MAIN PRODUCT SECTION */}
  <div className={styles.productBox}>
    {/* IMAGE BOX: LEFT */}
    <div >
      <img  src={image} alt={name} />
    </div>
    
    {/* TEXT & PURCHASE AREA: RIGHT */}
    <div className={styles.productBoxRight}>
    <div className={styles.buttonsContainer}>
    {user.isAdmin && (
      <div className={styles.button}>
        <Edit onClick={() => navigate(`/store/manga/edit/${id}`)}>Edit</Edit>
      </div>
    )}

    {user.isAdmin && (
      <div className={styles.button}>
        <DeleteBtn
          variant="dark"
          size="m"
          className="rounded-circle inner-shadow"
          onClick={handleDelete}
        />
      </div>
    )}
  </div>
      <div className={styles.productHeroContainer}>
        <Table >
      <thead>
        <tr>
          <th><h5>Name:</h5></th>
          <th><h5>{name}</h5></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Author: </td>
          <td>{author}</td>
         
        </tr>
        <tr>
          <td>Page:</td>
          <td>{page}</td>
         
        </tr>
        <tr>
          <td>Release Date :</td>
          <td>{formattedReleaseDate.toDateString()} </td>
        </tr>
        <tr>
          <td>Available :</td>
          <td> {isAvailable ? 'Yes' : 'No'} </td>
        </tr>
        <tr>
          <td>Price :</td>
          <td> {priceFormatter(price)} </td>
        </tr>
      </tbody>
    </Table>
      <h4>Story goes like this:</h4>
        <p>{description}</p>
      </div>
    
    </div>
  </div>
</Container>

  )
}

export default MangaDetail
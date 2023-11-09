import {useState,useEffect,useRef} from 'react'
import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';

import * as styles from "./MangaDetail.css";
import productService from '../../services/productService';
import { priceFormatter } from '../../utils/readUtils';
import TuLoader from '../../components/common/Loader/TuLoader';


const MangaDetail = () => {
    const params =useParams();
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
//      <Container>
//     {/* MAIN PRODUCT SECTION */}
//     <div className={styles.productBox}>
//       {/* IMAGE BOX: LEFT */}
//       <div className={styles.productBoxLeft}>
//         <img className={styles.productWindow} src={image} alt={name} />
//       </div>
//       {/* TEXT & PURCHASE AREA: RIGHT */}
//       <div className={styles.productBoxRight}>
//         {/* HERO BOX */}
//         <div className={styles.productHeroContainer}>
//           <h2>{name}</h2>
//           <p>{priceFormatter(price)}</p>
//           <p>description:{description}</p>
//           <p>author: {author}</p>
//           <p>page: {page}</p>
//           <p>isAvailable: {isAvailable ? 'Yes' : 'No'}</p>
//                     {/* <p>releaseDate: {releaseDate}</p> */}
//           <p>releaseDate: {formattedReleaseDate.toDateString()}</p>
//         </div>
//       </div>
//     </div>
//   </Container>
<Container>
  {/* MAIN PRODUCT SECTION */}
  <div className={styles.productBox}>
    {/* IMAGE BOX: LEFT */}
    <div className={styles.productBoxLeft}>
      <img className={styles.productWindow} src={image} alt={name} />
    </div>
    {/* TEXT & PURCHASE AREA: RIGHT */}
    <div className={styles.productBoxRight}>
      {/* HERO BOX */}
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
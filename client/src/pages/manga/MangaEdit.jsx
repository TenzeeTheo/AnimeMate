import { useState,useEffect,useRef } from "react"
import {  useNavigate,useParams } from "react-router-dom";
import{Form,InputGroup,Row, Col, Spinner,Container} from 'react-bootstrap'

import productService from '../../services/productService';
import {getFileFromUrl} from '../../utils/writeUtils'
import Card from '../../components/common/Card/Card'
import MyBtn from '../../components/common/Button/MyBtn'
import TuLoader from "../../components/common/Loader/TuLoader";

const MangaEdit = () => {

    const params = useParams()
    const navigate = useNavigate()

    const [mangaData,setMangaData] = useState({
        id: params.id,
        name: "",
        description: "",
        author: "",
        price: 0,
        page: "",
        releaseDate: "",
        onSale: false,
        isAvailable: true,
        image: ""

    });
    const [loading, setLoading] = useState(true)
    const [error, setError] =useState(false)

    const [preview, setPreview] = useState(true);
    const [uploadedFile, setUploadedFile] = useState("");

    const { id, name, description, author, price, page, releaseDate, onSale, isAvailable,image } = mangaData;

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

    // form Function 
    // Fetch Manga
    async function fetchManga(){
        try {
            // (i) API FETCH CALL
            const response = await productService.getById(id)
            const dbManga = await response.data;
            console.log(dbManga)

            const timestamp = {
                _nanoseconds: 758000000,
                _seconds: 1680530400,
              };
            const releaseDate = new Date(timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000);
             // Convert releaseDate to the "yyyy-MM-dd" format
             const formattedReleaseDate = releaseDate.toISOString().split('T')[0];

            // (ii) UPDATING STATE DATA OBJECT
            setMangaData(productOnMount =>({
                ...productOnMount,
                ...dbManga,
                releaseDate: formattedReleaseDate,
            }));
            // *NEW* SAVE uploaded file  string to state
            if(!dbManga.image){
                console.log("No downlodUrl provided by DB")
            }else{
                const fileGlob =getFileFromUrl(dbManga.image);
                setUploadedFile(fileGlob)
            }
         // (iii) CLEANUP FUNCTIONS
        } catch (error) {
            console.log(error?.response);
            setError(true)
        }
    }

    // [1] handleTextChange will handle change in state value event for TEXT data
const handleTextChange = (e) => {
    const { name, value } = e.target;
    setMangaData({ ...mangaData, [name]: value });
  }
// [2] handleFileChange will handle change in state for FILE data
 const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMangaData({ ...mangaData, image: file });
    setPreview(false);
  }  
// [3] handleSubmit will control form submission event

const handleSubmit = async (e) =>{
    e.preventDefault();      
    setLoading(true);
    try {
        const response = await productService.put(id, mangaData, uploadedFile);
        console.log(response);
        navigate('/store/mangas');

        
    } catch (err) {
        console.log(err?.response)
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {setLoading(false)}, 1000);
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
    <Card title=" Edit Manga">
        <Form onSubmit={handleSubmit}>
        <Form.Label >Name</Form.Label>

            {/* GROUP 1: NAME */}
                <Form.Group className="mb-3">
                        <Form.Control 
                            type="text"
                            placeholder="Enter Manga name" 
                            name="name"
                            value={name}
                            onChange={ handleTextChange }                    
                        />
                </Form.Group>
                <Form.Label >Story Line</Form.Label>

            {/* GROUP 2: DESCRIPTION */}
                <Form.Group className="mb-3">
                        <Form.Control 
                            type="text" 
                            as='textarea' 
                            placeholder="Enter manga description" 
                            name="description" 
                            value={description}
                            onChange={ handleTextChange }
                            />
                </Form.Group>

            {/* GROUP 3: Author */}
            <Form.Label >Author</Form.Label>

                <Form.Group className="mb-3">
                        <Form.Control 
                            type='text'
                            placeholder='author'
                            name='author'
                            value={author}
                            onChange={ handleTextChange }
                        >
                        
                        </Form.Control>
                </Form.Group>

            {/* GROUP 4: PRODUCT DETAILS */}
                
                <Form.Group className="mb-3">
                    <Row>
                            {/* 4A: PRICE */}
                            <Col lg={4} md={4} sm={12}>
                            <Form.Label>Product price</Form.Label>
                            <InputGroup>          
                                <InputGroup.Text id="price-dollar">$</InputGroup.Text>
                                <Form.Control 
                                    type="number" 
                                    aria-describedby="price-dollar" 
                                    id="price-input" name="price" 
                                    placeholder="0"
                                    value={price}
                                    onChange={ handleTextChange }
                                    />
                            </InputGroup>
                            </Col>

                            {/* 4B: Page */}
                            <Col lg={4} md={4} sm={12}>
                            <Form.Label> Pages</Form.Label>
                            <Form.Control 
                                type='number'
                                name='page'
                                value={page}
                                onChange={ handleTextChange }

                            >
                            </Form.Control>
                            </Col>

                            {/* 4c: ON SALE */}
                            <Col lg={4} md={4} sm={12}>
                            <Form.Label> Sale status</Form.Label>
                    <Form.Control 
                        as='select'
                        name='onSale'
                        value={onSale}
                        onChange={ handleTextChange }

                    >
                        <option value={false}>Standard</option>
                        <option value={true}>On Sale</option>
                    </Form.Control>
                        
                            </Col>
                        {/* END OF PRODUCT DETAILS ROW */}
                    </Row>
                </Form.Group>


            {/* GROUP 5: PRODUCT SALE DETAILS */}
                <Form.Group className="mb-3">
                <Row>
                    {/* 5A: Release Date */}

                    <Col lg={6} md={6} sm={12}>
                    <Form.Label>Release Date:</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="releaseDate"
                                value={releaseDate}
                                onChange={ handleTextChange }
                                />
                    </Col>

                    {/* 5B: IS AVAILABLE */}
                    <Col lg={6} md={6} sm={12}>
                    <Form.Label>Manga availability</Form.Label>
                    <Form.Control 
                        as='select'
                        name='isAvailable'
                        value={isAvailable}
                        onChange={ handleTextChange }

                    >
                        <option value={true}>In Stock</option>
                        <option value={false}>Out of Stock</option>
                    </Form.Control>
                    </Col>
                {/* END OF PRODUCT SALE DETAILS ROW */}
                </Row>
                </Form.Group>

                {/* Priview Image */}
                { preview && !loading ? <div>
                  <h5>Current Image</h5>
                  <img style={{ width: "20%", margin: "1rem auto", opacity: 0.7 }} src={image} alt="preview"/>
                  </div> :null}


            {/* GROUP 6: Manga Cover */}
                <Form.Group className="mb-2" controlId="image">
                <Form.Label >Manga Cover</Form.Label>
                <Form.Control 
                    type="file"
                    className="mb-4"
                    onChange={ handleFileChange }

                />
                </Form.Group>

        
            {/* SUBMIT BUTTON */}
                <MyBtn loadingState={loading} >
                {loading ? <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />: 'submit'}
                </MyBtn>
                

        </Form>
    </Card>
  )
}

export default MangaEdit  
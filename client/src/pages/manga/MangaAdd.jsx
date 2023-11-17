import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import{Form,InputGroup,Row, Col, Spinner} from 'react-bootstrap'

import productService from '../../services/productService';
import Card from '../../components/common/Card/Card'
import MyBtn from '../../components/common/Button/MyBtn'




const MangaAdd = () => {
    const navigate = useNavigate()
    const [mangaData,setMangaData] = useState({
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
    const [loading, setLoading] = useState(false)

    const { name, description, author, price, page, releaseDate, onSale, isAvailable } = mangaData;


    // [1] handleTextChange will handle change in state value event for TEXT data
const handleTextChange = (e) => {
    const { name, value } = e.target;
    // const parsedValue = value === 'true';
    setMangaData({ ...mangaData, [name]: value });
  }
// [2] handleFileChange will handle change in state for FILE data
 const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMangaData({ ...mangaData, image: file });
  }  
// [3] handleSubmit will control form submission event

const handleSubmit = async (e) =>{
    e.preventDefault();      
    setLoading(true);
    try {
        const response =await productService.post(mangaData);
        console.log(response)
        navigate('/store/mangas');

        
    } catch (err) {
        console.log(err?.response)
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {setLoading(false)}, 1000);
    }
}

  return (
    <Card title=" Add Manga">
        <Form onSubmit={handleSubmit}>

            {/* GROUP 1: NAME */}
            <Form.Label >Name</Form.Label>
                <Form.Group className="mb-3">
                        <Form.Control 
                            type="text"
                            placeholder="Enter Manga name" 
                            name="name"
                            value={name}
                            onChange={ handleTextChange }                    
                        />
                </Form.Group>
              
            {/* GROUP 2: DESCRIPTION */}
            <Form.Label >Story Line</Form.Label>

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

            {/* GROUP 3: AUTHOR */}
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

            {/* GROUP 4: Price  */}
                
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

export default MangaAdd
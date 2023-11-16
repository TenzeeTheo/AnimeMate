import  { useState, useEffect } from 'react';
import productService from '../../services/productService';
import * as styles from './MangaSale.css'
import Item from '../../components/feature/Manga/Item';

function MangaSale(products) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // HOOK: ON-LOAD SIDE EFFECTS
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productService.getAllSale();
        const data = await response.data;
        console.log(response)

        // SUCCESS: Set data state with on-sale items
        setData(data);
       
      } catch (error) {
        // console.log(error?.response);
        setError(true)

      }
    }

    fetchData();
  }, []); // Empty dependency array to execute only once on mount

  return (
    <div >
  
      <h1>On Sale Items</h1>
      <div className={styles.gridContainer}>
      <div className={`${styles.listGrid} `}>
        {/* Map through the on-sale items and render each item using the Item component */}
        {data.length > 0 &&
          data.map((data) => (
          
            <Item
            key={data.id}
            id={data.id}
            name={data.name}
            image={data.image}
            price={data.price}
            onSale={data.onSale}
            // Pass other necessary props here
          />
           
          ))
          }
      </div>
      </div>
    </div>
  );
}

export default MangaSale;

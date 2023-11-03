import * as styles from './List.css'
import Item from "./Item"

function List({ products }) {
  return (
    <div className={styles.gridContainer} >
      <div className={`${styles.listGrid} ${styles.listGridSmallScreen}`}>
        {products.length === 0 && <p>No Manga Listed...</p>}
        {products.length > 0 && products.map(product => 
          <Item 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            onSale={product.onSale}
            isAvailable={product.isAvailable}
            image={product.image}
            price={product.price}
            author={product.author}
            page={product.page}
            releaseDate={product.releaseDate}

          />
        )}
      </div>
    </div>
  )
}

export default List
import * as styles from './Item.css'
import { Link } from 'react-router-dom';




function Item(props) {
  const priceClassName = props.onSale ? styles.onSalePrice : styles.productCardContent;

  return (
    <div>
    <Link className={styles.productLink} to={`/store/manga/${props.id}`}>
      <div className={styles.productCard}>
        <img src={props.image} alt={props.name} className={styles.itemImage} />
          <h2 className={styles.productCardTitle}>{props.name}</h2>
        <div className={priceClassName}>
          <p>${props.price}</p>
        </div>
      </div>
    </Link>
  </div>
  );
}

export default Item;

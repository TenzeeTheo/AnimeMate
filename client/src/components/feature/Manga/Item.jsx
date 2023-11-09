import * as styles from './Item.css'
import { Link } from 'react-router-dom';



function Item(props) {

  return (
     <Link className={styles.productLink} to={`/store/manga/${props.id}`}>
      <div className={styles.productCard}>
          <img src={props.image} alt={props.name} className={styles.itemImage} />
          <div className={styles.productCardContent}>
            <h2 className={styles.productCardTitle}>{props.name}</h2>
            <p>${props.price}</p>
          </div>
        </div>
    </Link>
  );
}

export default Item;

import styles from "../styles/Dish.module.css";

function Dish({ data }) {
  const { tittelen, pris, ingredienser, kateogri } = data;
  return (
    <article className={styles.dish}>
      <header className="styles.header">
        <h3>{tittel}</h3>
        <span className={styles.price}>{pris}</span>
      </header>
      <p className="styles.ingredients">{ingredienser}</p>
      <small className={styles.category}>{kategori}</small>
    </article>
  );
}

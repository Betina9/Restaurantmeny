import styles from "../styles/Dish.module.css";

function Dish({ data }) {
  const { tittel, pris, ingredienser, kategori } = data; // ← hent ut feltene
  return (
    <article className={styles.dish}>
      <header className="styles.header">
        <h3>{tittel}</h3>
        <span className={styles.price}>{pris}</span>
      </header>
      <p className="styles.ingredients">{ingredienser}</p>
      <small className={styles.category} data-category={kategori}>
        {kategori}
      </small>
    </article>
  );
}

export default Dish;

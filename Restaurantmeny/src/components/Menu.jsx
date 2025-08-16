import styles from "../styles/Menu.module.css";

function Menu({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((rett) => (
        <Dish key={rett.id} data={rett} />
      ))}
    </div>
  );
}

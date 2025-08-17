import styles from "../styles/Menu.module.css";
import Dish from "./Dish";

function Menu({ items }) {
  const kategorier = ["Forrett", "Hovedrett", "Dessert"];

  return (
    <div className={styles.columns}>
      {kategorier.map((kategori) => {
        const filtrert = items.filter((rett) => rett.kategori === kategori);

        return (
          <section key={kategori} className={styles.kategoriKolonne}>
            <h2 className={styles.kategoriTittel}>{kategori}</h2>
            <div className={styles.liste}>
              {filtrert.map((rett) => (
                <Dish key={rett.id} data={rett} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Menu;

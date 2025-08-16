import { useState } from "react";
import "./App.css";
import { meny } from './data/meny';

function App() {
  const [count, setCount] = useState(0);

  return (
    function Menu({ items}) {
      return (
      <div className={styles.grid}>
        {items.map((rett) => (
          <Dish key={rett.id} data={rett} />
  ))}
  /</div>
      )
    }
return <Menu items={meny} />
    <>
      <h1>Restaurant meny</h1>
      

export default App;

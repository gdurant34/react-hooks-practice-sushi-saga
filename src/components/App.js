import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [wallet, setWallet] = useState(100);

  console.log(sushis)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushis => setSushis(sushis))
  }, []);
  

  function handleEaten(eatenSushi) {
    if(wallet >= eatenSushi.price) {
      const updatedSushi = sushis.map(sushi => {
        if (sushi.id === eatenSushi.id) {
          return {...sushi, eaten: true}
        } else {
          return sushi;
        }
      });

      setSushis(updatedSushi);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("need more");
    }
  };

  const eatenSushi = sushis.filter(sushi => sushi.eaten);


  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEaten} />
      <Table wallet={wallet} plates={eatenSushi} />
    </div>
  );
}

export default App;

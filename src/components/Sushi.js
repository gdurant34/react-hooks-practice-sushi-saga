import React from "react";

function Sushi({ sushi, onEatSushi }) {
  const { name, price, img_url, eaten } = sushi;

  function onClickEaten () {
    if (!eaten) {
      onEatSushi(sushi);
    } else {
      alert("Can't wait an empty plate, bud");
    }
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={onClickEaten}>
        {eaten ? null : (
          <img
            src={img_url ? img_url : null}
            alt={name ? name : "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

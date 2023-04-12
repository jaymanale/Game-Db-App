import { useState } from "react";

const UpdateStateExercise = () => {
  const [games, setGames] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });

  const [pizza, setPizza] = useState({
    name: "spicy peri peri",
    toppings: ["paneer"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });

  const handleUpdate = () => {
    setGames({ ...games, player: { ...games.player, name: "Bob" } });
  };

  const handlePizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "pineapple"] });
  };

  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return (
    <>
      <button onClick={handleUpdate}>update game</button>
      <button onClick={handlePizza}>Update Pizza</button>
      <button onClick={handleCart}>Update Pizza</button>
    </>
  );
};

export default UpdateStateExercise;

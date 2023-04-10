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

  const handleUpdate = () => {
    setGames({ ...games, player: { ...games.player, name: "Bob" } });
  };

  const handlePizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "pineapple"] });
  };

  return (
    <>
      <button onClick={handleUpdate}>update game</button>
      <button onClick={handlePizza}>Update Pizza</button>
    </>
  );
};

export default UpdateStateExercise;

import { useState } from "react";

const UpdateState = () => {
  const [fruit, setFruit] = useState({
    title: "apple",
    price: 10,
  });

  const handleClick = () => {
    console.log(fruit);
    // const update = {
    //     title:'banana',
    //     price: 30
    // };

    setFruit({ ...fruit, price: 40 });
    console.log(fruit);
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default UpdateState;

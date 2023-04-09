import { useState } from "react";

const UpdateState = () => {
  const [fruit, setFruit] = useState({
    title: "apple",
    price: 10,
  });

  const [deeplyNestedProperty, setDeeplyNestedProperty] = useState({
    name: "jay",
    address: {
      city: "Pune",
      pincode: 123456,
    },
  });

  const handleDeeplyNested = () => {
    setDeeplyNestedProperty({
      ...deeplyNestedProperty,
      address: { ...deeplyNestedProperty.address, pincode: 678954 },
    });
    console.log(deeplyNestedProperty);
  };

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
      <button onClick={handleClick}>object property update</button>

      <button onClick={handleDeeplyNested}>
        Deeply nested property update
      </button>
    </div>
  );
};

export default UpdateState;

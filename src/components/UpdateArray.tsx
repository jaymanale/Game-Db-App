import { useState } from "react";

const UpdateArray = () => {
  const [tags, setTags] = useState(["happy", "sad"]);

  const handleUpdateOnClick = () => {
    // add
    setTags([...tags, "excited"]);

    // Remove
    setTags(tags.filter((tag) => tag != "happy"));

    // Update
    setTags(tags.map((tag) => (tag == "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      <button onClick={handleUpdateOnClick}>Update Array</button>
      <p>{tags}</p>
    </div>
  );
};

export default UpdateArray;

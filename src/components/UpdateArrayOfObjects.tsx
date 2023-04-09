import { useState } from "react";

const UpdateArrayOfObject = () => {
  const [bugs, setBugs] = useState([
    { id: 1, name: "nullPointer", fixed: false },
    { id: 2, name: "indexOutOfBound", fixed: false },
  ]);

  const updateArrayOfObjects = () => {
    setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, fixed: true } : bug)));
    console.log(bugs);
  };

  return (
    <div>
      <button onClick={updateArrayOfObjects}> Update Array Of Object</button>
      <p>{bugs.toString()}</p>
    </div>
  );
};

export default UpdateArrayOfObject;

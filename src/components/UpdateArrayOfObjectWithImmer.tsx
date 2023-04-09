import { useState } from "react";
import { Produced } from "immer/dist/internal";
import produce from "immer";

const UpdateArrayOfObjectWithImmer = () => {
  const [bugs, setBugs] = useState([
    { id: 1, name: "nullPointer", fixed: false },
    { id: 2, name: "indexOutOfBound", fixed: false },
  ]);

  const updateArrayOfObjects = () => {
    // setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id == 1);
        if (bug) bug.fixed = true;
      })
    );
    console.log(bugs);
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.name} {bug.fixed ? "- fixed" : "- new"}
        </p>
      ))}
      <button onClick={updateArrayOfObjects}>
        {" "}
        Update Array Of Object with immer
      </button>
      <p>{bugs.toString()}</p>
    </div>
  );
};

export default UpdateArrayOfObjectWithImmer;

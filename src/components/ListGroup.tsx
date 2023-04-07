import { useState } from "react";

function ListGroup() {
  let states = ["Maharashtra", "Delhi", "UP", "MP", "Goa"];

  // Using Constant value
  let checkIfStateEmptyMessage =
    states.length === 0 ? <p>No State found.</p> : null;

  // Using function
  function checkIfStateEmptyMessageFunction() {
    return states.length === 0 ? <p>No State found.</p> : "";
  }

  let [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectedState = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>List</h1>
      {/* {checkIfStateEmptyMessage} */}
      {/* Following is much concise approach for conditional rendering. */}
      {states.length == 0 && <p>No State found.</p>}
      <ul className="list-group">
        {states.map((state, index) => (
          <li
            key={state}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              handleSelectedState(index);
            }}
          >
            {state}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import { MouseEvent } from "react";

function ListGroup() {
  let states = ["Maharashtra", "Delhi", "UP", "MP", "Goa"];

  // Using Constant value
  let checkIfStateEmptyMessage =
    states.length === 0 ? <p>No State found.</p> : null;

  // Using function
  function checkIfStateEmptyMessageFunction() {
    return states.length === 0 ? <p>No State found.</p> : "";
  }

  // Handle click event
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {/* {checkIfStateEmptyMessage} */}
      {/* Following is much concise approach for conditional rendering. */}
      {states.length == 0 && <p>No State found.</p>}
      <ul className="list-group">
        {states.map((state, index) => (
          <li key={state} className="list-group-item" onClick={handleClick}>
            {state}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

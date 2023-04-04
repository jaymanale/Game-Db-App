function ListGroup() {
  let states = ["Maharashtra", "Delhi", "UP", "MP", "Goa"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {states.map((state) => (
          <li key={state} className="list-group-item">
            {state}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

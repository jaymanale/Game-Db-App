import ListGroup from "./components/ListGroup";

function App() {
  let states = ["Maharashtra", "Delhi", "UP", "MP", "Goa"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={states}
        heading="States"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;

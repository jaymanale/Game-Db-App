import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let states = ["Maharashtra", "Delhi", "UP", "MP", "Goa"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={states}
          heading="States"
          onSelectItem={handleSelectedItem}
        />
      </div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button onButtonClick={() => console.log("CLICKED")} heading="Click Me" />
    </>
  );
}

export default App;

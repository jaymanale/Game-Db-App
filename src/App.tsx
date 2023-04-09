import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  let states = ["Maharashtra", "Delhi", "UP", "MP", "Goa"];

  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const handleHideAlert = () => {
    setAlertVisible(!alertVisible);
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
      {alertVisible && (
        <Alert onClose={handleHideAlert}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}

      <Button onButtonClick={handleHideAlert} heading="Click Me" />
      <Like initialState={false} onLikeClick={() => console.log("Clicked")} />
    </>
  );
}

export default App;

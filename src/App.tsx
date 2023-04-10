import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import ReactState from "./components/ReactState";
import UpdateState from "./components/UpdateStates";
import UpdateArray from "./components/UpdateArray";
import UpdateArrayOfObject from "./components/UpdateArrayOfObjects";
import UpdateArrayOfObjectWithImmer from "./components/UpdateArrayOfObjectWithImmer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  let states = ["Maharashtra", "Delhi", "UP", "MP", "Goa"];
  let [products, setProducts] = useState(["apple", "banana", "pineapple"]);

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
      <ReactState />
      <UpdateState />
      <UpdateArray />
      <UpdateArrayOfObject />
      <UpdateArrayOfObjectWithImmer />
      <NavBar cartItemCount={products.length} />
      <Cart onClear={() => setProducts([])} items={products} />
    </>
  );
}

export default App;

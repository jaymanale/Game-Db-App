import { useState } from "react";

// 1. React update state asynchronously
// 2. STate is stored outside of component
// 3. Use Hooks at the top level of component

const ReactState = () => {
  // All the State update done in asynchronous manner - in the future
  // This is to improve the improve the performance of application
  // React takes all of the updates , patched them and applied to them later time after handleClick completes
  // AT that time react applies all the updates at once and re-render the component once
  const [isVisible, setVisible] = useState(false);
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  // Common State combine in one use state
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const handleClick = () => {
    setVisible(true);
    console.log(isVisible); // false - Update did not applied immediately
  }; // end of updates
  return (
    <div>
      <button onClick={handleClick}>React State Button click me</button>
    </div>
  );
};

export default ReactState;

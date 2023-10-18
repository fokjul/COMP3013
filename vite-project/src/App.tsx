import Viewer from "./components/Viewer";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
function App() {
  const cities: string[] = ["Vancouver", "Paris", "London"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Viewer cityName={cities[0]} />
      <ListGroup
        cities={cities}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
}

export default App;

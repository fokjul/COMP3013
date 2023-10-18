import { useState } from "react";
import Viewer from "./components/Viewer";
import ListGroup from "./components/ListGroup";

interface Props {
  cities: string[];
  setSelectedIndex: () => void;
}

function App() {
  const cities: string[] = ["Vancouver", "Paris", "London"];
  const [state, setState] = useState({cityIndex: -1, cityName:"There are no cities selected"});
  const cityIndex = state.cityIndex;
  const cityName = state.cityName; 

  return (
    <>
      <Viewer 
      cityName = {cityName} 
      />

      <ListGroup 
        cities = {cities} 
        cityIndex = {cityIndex} 
        cityName = {cityName}  
        setState ={setState}/>
    </>
  );
}

export default App;

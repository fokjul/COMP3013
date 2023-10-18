import ListItem from "./ListItem";

function ListGroup({cities, cityIndex, cityName, setState}) {
  const handleClick = (index: number, city: string) => {
    setState({cityIndex: index, cityName: city});
  };


  return (
    <>
    <ul className="list-group">
      {cities.map((city, index) => (
        <li
          onClick={() => handleClick(index, city)}
          className={
            cityIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {city}
        </li>
        
      ))}
    </ul>
    </>
    
  );
}

export default ListGroup;




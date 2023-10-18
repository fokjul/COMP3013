import { useState } from "react";
import ListItem from "./ListItem";

type Props = {
  cities: string[];
  selectedIndex: number;
  setSelectedIndex: (i: number) => void;
};

type MyListItemProps = {
  index: number;
  selectedIndex: number;
  setSelectedIndex: (i: number) => void;
  children: React.ReactNode;
};

function MyListItem({
  selectedIndex,
  setSelectedIndex,
  index,
  children,
}: MyListItemProps) {
  return (
    <li
      onClick={() => setSelectedIndex(index)}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
    >
      {children}
    </li>
  );
}

function ListGroup({ selectedIndex, setSelectedIndex, cities }: Props) {
  return (
    <ul className="list-group">
      {cities.map((city, index) => (
        <MyListItem
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          index={index}
        >
          {city}
        </MyListItem>
      ))}
    </ul>
  );
}

<ul>
  <li>Vancouver</li>
</ul>;

export default ListGroup;

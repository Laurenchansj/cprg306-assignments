"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  return (
    <main className="bg-blue-100 pt-2 pb-2">
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <ul>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
        </ul>
      </div>
    </main>
  );
}

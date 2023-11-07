"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData.map((item) => ({ ...item })));
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }
  // function handleItemSelect(selectedItemName) {
  //   setSelectedItemName("");
  // }
  const handleItemSelect = (item) => {
    let itemName;
    let cleanName;
    if (item.name.includes(",")) {
      itemName = item.name.split(",");
      cleanName = itemName[0].trim();
    } else {
      cleanName = item.name.replace(/\p{Emoji}/gu, " ").trim();
    }
    setSelectedItemName(cleanName);
  };

  return (
    <main className="bg-blue-100 pt-2 pb-2">
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <div className="flex flex-column">
          <ul>
            <ItemList
              items={items}
              //value={selectedItemName}
              onItemSelect={handleItemSelect}
              //onClick={handleItemSelect}
            />
          </ul>
          <div className="ml-2 p-2 w-2/6 bg-slate-50 ">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}

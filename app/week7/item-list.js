"use client";
import { useState } from "react";
import Item from "../week5/item";

export default function ItemList({ items, onSelect, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  let condition = true; // if true, show Item component, if false, show unique category list
  let uniqueCategory = [];

  if (sortBy === "name") {
    condition = true;
    items.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  if (sortBy === "category") {
    condition = true;
    items.sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  if (sortBy === "listOfCategory") {
    condition = false;
    uniqueCategory = items.reduce((uniqueList, item) => {
      if (!uniqueList.includes(item.category)) {
        uniqueList.push(item.category);
      }
      return uniqueList.sort();
    }, []);
  }

  return (
    <div className="p-4 bg-yellow-50">
      <label className="ml-4">Sort By: </label>
      <button
        onClick={(e) => setSortBy(e.target.value)}
        value="name"
        className="ml-4 m-1 px-2 border-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-900"
      >
        Name
      </button>
      <button
        onClick={(e) => setSortBy(e.target.value)}
        value="category"
        className="m-1 px-2 border-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-900"
      >
        Category
      </button>
      <button
        onClick={(e) => setSortBy(e.target.value)}
        value="listOfCategory"
        className="m-1 px-2 border-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-900"
      >
        List of Category
      </button>
      <div>
        {condition ? (
          <div>
            {items.map((item) => (
              <Item
                key={item.id}
                item={item}
                onSelect={() => onItemSelect(item)}
              />
            ))}
          </div>
        ) : (
          <div className="m-4">
            {uniqueCategory.map((category) => (
              <ul key={category} className="ml-4">
                <p className="font-bold">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </p>
                {items
                  .filter((item) => category === item.category)
                  .map((item) => (
                    <Item
                      key={item.id}
                      item={item}
                      onSelect={() => onItemSelect(item.name)}
                    />
                    // <li className="ml-4" key={item.id}>
                    //   <Item key={item.id} item={item} />
                    // </li>
                  ))}
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

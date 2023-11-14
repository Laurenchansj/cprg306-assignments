"use client";
import { useState } from "react";
// import Item from "../week3/item";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const random = Math.floor(Math.random() * 1000000000000000);
  const [id, setId] = useState(random);

  const handleSubmit = (event) => {
    event.preventDefault();

    const Item = {
      name: name,
      quantity: quantity,
      category: category,
      id: id,
    };

    onAddItem(Item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="h-72 w-96 justify-center">
      <form onSubmit={handleSubmit} className="m-5">
        <div>
          <label className="w-full max-w-sm border-gray-500 rounded">
            Name:
          </label>
          <input
            type="text"
            onChange={handleNameChange}
            value={name}
            required={true}
            className="w-full max-w-sm border-2 border-gray-500 rounded mb-2.5"
          />
          <label className="w-full max-w-sm">Quantity:</label>
          <input
            type="number"
            onChange={handleQuantityChange}
            value={quantity}
            min="1"
            max="99"
            required={true}
            className="w-full max-w-sm border-2 border-gray-500 rounded mb-2.5"
          />
          <label className="w-full max-w-sm">Category:</label>
          <select
            onChange={handleCategoryChange}
            value={category}
            className="w-full max-w-sm border-2 border-gray-500 rounded mb-2.5"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded my-2.5 hover:bg-blue-800 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

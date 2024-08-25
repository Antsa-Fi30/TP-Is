import React, { useState } from "react";
import { createItem, updateItem } from "../App";

function ItemForm({ item, onSave }) {
  const [name, setName] = useState(item ? item.name : "");
  const [description, setDescription] = useState(item ? item.description : "");
  const [quantity, setQuantity] = useState(item ? item.quantity : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, description, quantity };

    if (item) {
      updateItem(item._id, newItem).then(() => onSave());
    } else {
      createItem(newItem).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default ItemForm;

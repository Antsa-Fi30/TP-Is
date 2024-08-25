import React, { useState, useEffect } from "react";
import { fetchItems, deleteItem } from "../App";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then((res) => setItems(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteItem(id).then(() => {
      setItems(items.filter((item) => item._id !== id));
    });
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

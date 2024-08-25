import axios from "axios";
import React, { useState } from "react";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";

const API_URL = "http://localhost:5000/App/items";

function App() {
  const [editingItem, setEditingItem] = useState(null);

  const handleSave = () => {
    setEditingItem(null);
  };

  return (
    <div className="App">
      <ItemList />
      <ItemForm item={editingItem} onSave={handleSave} />
    </div>
  );
}

export const fetchItems = () => axios.get(API_URL);
export const fetchItem = (id) => axios.get(`${API_URL}/${id}`);
export const createItem = (item) => axios.post(API_URL, item);
export const updateItem = (id, item) => axios.put(`${API_URL}/${id}`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPerson from "./pages/AddPerson";
import Persons from "./pages/Persons";
import EditPerson from "./pages/EditPerson";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddPerson />} />
          <Route path="/edit/:id" element={<EditPerson />} />
          <Route path="/" element={<Persons />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

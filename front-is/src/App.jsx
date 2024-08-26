import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddPerson from "./pages/Persons/AddPerson";
import Persons from "./pages/Persons/Persons";
import EditPerson from "./pages/Persons/EditPerson";
import Dashboard from "./pages/Dashboard/Dashboard";
import ItemList from "./pages/Items/ItemList";
import ItemForm from "./pages/Items/ItemForm";
import EditItem from "./pages/Items/EditItem";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-1">
            <aside className="bg-gray-800 text-white w-60 p-4">
              <nav>
                <ul>
                  <li className="mb-2">
                    <Link
                      to="/"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Tableau de bord
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/unite"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Unite
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/persons"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Personnes
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/items"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Adresses
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <main className="flex-1 p-4 bg-gray-100">
              {/* <h2 className="text-2xl font-semibold mb-4">{}</h2> */}
              <div className="w-content">
                <div className="bg-gray-100 p-4 rounded shadow">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/editperson/:id" element={<EditPerson />} />
                    <Route path="/addperson" element={<AddPerson />} />
                    <Route path="/persons" element={<Persons />} />
                    <Route path="/items" element={<ItemList />} />
                    <Route path="/editItem/:id" element={<EditItem />} />
                    <Route path="/addItem" element={<ItemForm />} />
                  </Routes>
                </div>
              </div>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

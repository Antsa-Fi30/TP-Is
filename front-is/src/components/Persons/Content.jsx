// src/components/Table.js
import { useState } from "react";
import "./Content.css";
import { useNavigate } from "react-router-dom";

const initialData = [
  {
    id: 1,
    name: "RAKOTONANDRANANDRA Alikasaka kisoaOmby henamantahenamasaka",
    role: "20/20/20",
  },
  {
    id: 2,
    name: "RAKOTONANDRANANDRA Alikasaka kisoaOmby henamantahenamasaka",
    role: "20/20/20",
  },
  {
    id: 3,
    name: "RAKOTONANDRANANDRA Alikasaka kisoaOmby henamantahenamasaka",
    role: "20/20/20",
  },
];

const Content = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);

  const handleDelete = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  return (
    <div>
      <div className="mb-4">
        <button id="bottone1" onClick={() => navigate("/add")}>
          <strong>Ajouter une personne</strong>
        </button>
      </div>
      <table className="min-w-full bg-transparent rounded-">
        <thead>
          <tr>
            <th className="py-2 px-4 ">Nom</th>
            <th className="py-2 px-4 ">Qualité</th>
            <th className="py-2 px-4 ">Date de naissance</th>
            <th className="py-2 px-4 ">Date de départ</th>
            <th className="py-2 px-4 ">Date d'arrivé</th>
            <th className="py-2 px-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-2 ">{item.name}</td>
              <td className="py-2 px-4 ">{item.role}</td>
              <td className="py-2 px-4 ">{item.role}</td>
              <td className="py-2 px-4 ">{item.role}</td>
              <td className="py-2 px-4 ">{item.role}</td>
              <td className="py-2 px-4  ">
                <button
                  onClick={() => navigate("/edit")}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg m-2 duration-200 transition-all hover:bg-yellow-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg m-2 duration-200 transition-all hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;

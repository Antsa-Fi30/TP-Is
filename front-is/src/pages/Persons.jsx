// src/App.js

import Content from "../components/Persons/Content";

function Persons() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* <aside className="bg-gray-800 text-white w-60 p-4">
          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Profile
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Settings
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </aside> */}
        <main className="flex-1 p-4 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Persons</h2>
          <div className="w-content">
            <div className="bg-gray-100 p-4 rounded shadow">
              <Content />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Persons;

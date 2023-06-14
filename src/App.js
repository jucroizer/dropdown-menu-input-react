import "./App.css";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

/** App function
 *
 * @description App function to render the dropdown menu
 * @returns {JSX.Element} App component
*/

function App() {

  const [state, setState] = useState("");
 
  const data = [
    {
      id: 1,
      name: "Communication",
    },
    {
      id: 2,
      name: "Community",
    },
    {
      id: 3,
      name: "Development",
    },
    {
      id: 4,
      name: "Marketing",
    },
    {
      id: 5,
      name: "Sales",
    },
  ];

  return (
      <div className="dropdown-container">
        <Dropdown
          result={(value) => {
            setState(value);
          }}
          options={data}
        />
      </div>
  );
}

export default App;

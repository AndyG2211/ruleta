import { useState } from "react";
import CubeSpinner from "./components/CubeSpinner";
import InputList from "./components/InputList";
import "./App.css"

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="flex flex-col bg-white items-center justify-center gap-4 p-8 min-h-screen">
      
      <h1 className="text-4xl text-blue-950 font-extrabold py-10">Ruleta</h1>
      {/* Ruleta */}
      <div className="w-full md:w-2/3 flex justify-center">
        <CubeSpinner items={items} />
      </div>
      
      {/* Panel de entrada */}
      <div className="w-full md:w-1/3 flex flex-col items-center">
        <h1 className="text-2xl text-blue-800 font-bold mb-4">Elementos:</h1>
        <InputList onUpdateItems={setItems} />
      </div>

      
    </div>
  );
}

export default App;

import { useState } from "react";
import CubeSpinner from "./components/CubeSpinner";
import InputList from "./components/InputList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="grid grid-cols-2 gap-2">
      {/* Panel de entrada */}
      <div className=" p-2">
        <h1 className="text-2xl font-bold mb-4">Elementos:</h1>
        <InputList onUpdateItems={setItems} />
      </div>

      {/* Ruleta */}
      <div className=" p-2">
        <CubeSpinner items={items} />
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
</div>
    </div>
  );
}

export default App;

import { useState } from "react";

const InputList = ({ onUpdateItems }) => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputValue.trim()) return;
    const newItems = [...items, inputValue.trim()];
    setItems(newItems);
    onUpdateItems(newItems);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xs">
      <ul className="mb-4 w-full">
        {items.map((item, index) => (
          <li key={index} className="bg-gray-200 p-2 rounded-md flex justify-between mt-2">
            <span>{item}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md"
              onClick={() => {
                const filtered = items.filter((_, i) => i !== index);
                setItems(filtered);
                onUpdateItems(filtered);
              }}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 w-full">
        <input
          type="text"
          className="border p-2 rounded-md flex-1"
          placeholder="Escribe un elemento..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default InputList;

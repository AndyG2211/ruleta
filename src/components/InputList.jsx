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
    <div className="">
      <ul className="md:overflow-scroll max-h-44">
        {items.map((item, index) => (
          <li key={index} className=" max-w-dvw bg-gray-200 text-black p-2 rounded-md flex justify-between mt-2">
            <span>{item}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
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

      <div className="flex gap-2 w-full py-5 overflow-y-auto">
        <input
          type="text"
          className="bg-gray-100 text-black border p-2 rounded-md flex-1"
          placeholder="Agregar un elemento..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer shadow-lg">
        ✚
        </button>
      </div>
    </div>
  );
};

export default InputList;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CubeSpinner = ({ items }) => {
  const [displayedItems, setDisplayedItems] = useState(["?", "?", "?"]);
  const [colors, setColors] = useState([getRandomColor(), getRandomColor(), getRandomColor()]);
  const [spinning, setSpinning] = useState(false);
  const [finalItem, setFinalItem] = useState(null);

  useEffect(() => {
    if (items.length >= 3) {
      setDisplayedItems([items[0], items[1], items[2]]);
    }
  }, [items]);

  const spinCubes = () => {
    if (items.length < 3 || spinning) return;

    setSpinning(true);
    let spins = 0;
    let speed = 100;
    
    const interval = setInterval(() => {
      spins++;

      setDisplayedItems((prev) => {
        const newOrder = [...prev];
        newOrder.unshift(newOrder.pop()); // Mueve el último al frente
        return newOrder;
      });

      setColors([getRandomColor(), getRandomColor(), getRandomColor()]);

      if (spins >= 23) speed += 50; // Reduce velocidad después de 11 giros
      
      if (speed >= 500) { // Cuando la velocidad llega a 500ms, detenemos
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * items.length);
        
        // Asegurar que el elegido queda en el centro
        const finalList = [
          items[(finalIndex - 1 + items.length) % items.length],
          items[finalIndex],
          items[(finalIndex + 1) % items.length],
        ];
        
        setDisplayedItems(finalList);
        setFinalItem(items[finalIndex]);
        setSpinning(false);
      }
    }, speed);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Cubos */}
      <div className="flex gap-4">
        {displayedItems.map((item, index) => (
          <motion.div
            key={index}
            className="w-30 h-24 max-h-24 flex items-center justify-center p-2 text-white font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap rounded-lg shadow-lg"
            style={{ backgroundColor: colors[index],
              opacity: index === 1 ? 1 : 0.3,
             }}
            animate={{ scale: index === 1 ? 1.2 : 1 }} // El del centro se ve más grande
            transition={{ duration: 0.1 }}
            
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* Botón para girar */}
      <button
        onClick={spinCubes}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg cursor-pointer shadow-lg"
        disabled={spinning}
      >
        {spinning ? "⥁" : "▶"}
      </button>

      {/* Resultado final */}
      {finalItem && <p className="text-black font-bold text-lg">Seleccionado: {finalItem}</p>}
    </div>
  );
};

export default CubeSpinner;

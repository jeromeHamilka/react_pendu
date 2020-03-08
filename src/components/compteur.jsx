import React, { useState } from 'react';

function Compteur() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(10);

  return (
    <div>
      <p>il vous reste {count} essais</p>
      <button onClick={() => setCount(count - 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default Compteur;
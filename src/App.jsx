import { useState } from "react";
import Modal from "../src/components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Contenu de la modale</p>
        <button onClick={() => setIsOpen(false)}>Fermer</button>
      </Modal>
    </div>
  );
}

export default App;

import React, {useRef} from 'react';
import FamilyTree from "./features/familyTree/FamilyTree.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Family Tree
      </header>
      <main>
        <FamilyTree />
      </main>
    </div>
  );
}

export default App;

import React, {useRef} from 'react';
import FamilyTree from "./features/familyTree/FamilyTree/FamilyTree.component";
import {GordeevaMockData} from "./features/familyTree/FamilyTree/FamilyTree.mock";

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <main>
                <FamilyTree data={{root: GordeevaMockData}}
                />
            </main>
        </div>
    );
}

export default App;

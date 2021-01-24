import React, {useCallback, useState} from 'react';
import FamilyTree from "./features/familyTree/FamilyTree/FamilyTree.component";
import {GordeevaMockData} from "./features/familyTree/FamilyTree/FamilyTree.mock";
import {initTree} from "./features/familyTree/treeOperations/initTree";
import {expandBranch} from "./features/familyTree/treeOperations/expandBranch";

const init = initTree(GordeevaMockData);

function App() {

    const [root, setRoot] = useState(init);

    // @ts-ignore
    const expandBranchCallback = useCallback((id: string) => {
        setRoot(expandBranch(root, id))
    }, [root])

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <main>
                <FamilyTree root={root} expandBranch={expandBranchCallback}
                />
            </main>
        </div>
    );
}

export default App;

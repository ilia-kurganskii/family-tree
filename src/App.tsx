import React, { useCallback, useState } from "react";
import FamilyTree from "./features/familyTree/FamilyTree/FamilyTree.component";
import { GordeevaMockData } from "./features/familyTree/FamilyTree/FamilyTree.mock";
import { initTree } from "./features/familyTree/treeOperations/initTree";
import { expandBranch } from "./features/familyTree/treeOperations/expandBranch";
import Info from "./features/common/Header/Header.component";
import "./App.scss";
import Header from "./features/common/Header/Header.component";

const init = initTree(GordeevaMockData);

function App() {
  const [root, setRoot] = useState(init);

  const expandBranchCallback = useCallback(
    (id: string) => {
      setRoot(expandBranch(root, id));
    },
    [root]
  );

  return (
    <>
      <Header />

      <main className="main">
        <h2 className="main_info typography__secondary">
          <span className="main_info_firstLine">
            Здравствуйте, Eсли вы сюда попали, значит это ваша родословная.
          </span>
          Мы собираем информацию о нашем древо. Если вы хотите дополнить,
          прислать фотографии, написать пару строчек о себе или о близком
          человеке напишите нам в «обратную связь», мы с удвольствием ответим и
          дополним.
        </h2>
        <FamilyTree
          className="main_familyTree"
          root={root}
          expandBranch={expandBranchCallback}
        />
      </main>
    </>
  );
}

export default App;

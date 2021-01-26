import React, { useCallback, useState } from "react";
import FamilyTree from "./features/family-tree/components/familty-tree/family-tree.component";
import { GordeevaMockData } from "./features/family-tree/components/familty-tree/family-tree.model.mock";
import { initTree } from "./features/family-tree/tree-operations/init-tree";
import { expandBranch } from "./features/family-tree/tree-operations/expand-branch";
import "./app.scss";
import Header from "./features/common/header/header.component";

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
            Здравствуйте, Если вы сюда попали, значит это ваша родословная.
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

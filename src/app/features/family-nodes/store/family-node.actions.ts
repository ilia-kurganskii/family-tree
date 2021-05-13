// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace FamilyTreeActions {
  export class LoadTrees {
    static readonly type = '[FamilyTree] Load Trees';
  }

  export class CreateTree {
    static readonly type = '[FamilyTree] Create Tree';

    constructor(public payload: { treeId: string }) {}
  }

  export class LoadNodesByTreeId {
    static readonly type = '[FamilyTree] Load Nodes';

    constructor(public payload: { treeId: string }) {}
  }
}

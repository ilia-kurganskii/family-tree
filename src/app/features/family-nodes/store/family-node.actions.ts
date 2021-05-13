// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace FamilyNodeActions {
  export class LoadNodesByTreeId {
    static readonly type = '[FamilyTree] Load Nodes';

    constructor(public payload: { treeId: string }) {}
  }
}

export interface ResponseNodeModel {
  id: string;
  firstname: string;
  lastname: string;
  treeId: string;
  parentIds: string[];
  childrenIds: string[];
}

export interface ResponseNodesModel {
  nodes: ResponseNodeModel[];
}

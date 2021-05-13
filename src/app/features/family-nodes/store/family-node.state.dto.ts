import { FamilyNode } from './models/family-node.model';
import { ResponseNodeModel } from '../services/family-node/models/response.model';

export function mapServiceToStateFamilyModel(
  input: ResponseNodeModel
): FamilyNode {
  return {
    ...input,
  };
}

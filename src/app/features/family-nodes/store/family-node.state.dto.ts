import { FamilyNode } from './models/family-node.model';
import { NodeOutputDtoModel } from '../../api/models/node-output-dto.model';

export function mapServiceToStateFamilyModel(
  input: NodeOutputDtoModel
): FamilyNode {
  return {
    ...input,
  };
}

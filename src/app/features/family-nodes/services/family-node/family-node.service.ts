import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../../app.const';
import { EnvironmentModel } from '../../../shared/models/environment.model';
import { CreateNodeInputDtoModel } from '../../../api/models/create-node-input-dto.model';
import { NodeOutputDtoModel } from '../../../api/models/node-output-dto.model';
import { NodesOutputDtoModel } from '../../../api/models/nodes-output-dto.model';

@Injectable()
export class FamilyNodeService {
  private readonly host = this.env.backendHost;

  constructor(
    private readonly http: HttpClient,
    @Inject(ENVIRONMENT) private readonly env: EnvironmentModel
  ) {}

  createNodeInTree(
    treeId: string,
    payload: CreateNodeInputDtoModel
  ): Observable<NodeOutputDtoModel> {
    return this.http.post<NodeOutputDtoModel>(
      `${this.host}/family-tree/${treeId}/node`,
      payload
    );
  }

  loadNodesByTree(treeId: string): Observable<NodesOutputDtoModel> {
    return this.http.get<NodesOutputDtoModel>(
      `${this.host}/family-tree/trees/${treeId}/nodes`
    );
  }
}

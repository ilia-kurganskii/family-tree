import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../../app.const';
import { EnvironmentModel } from '../../../shared/models/environment.model';
import { RequestCreateNodeModel } from './models/request.model';
import { ResponseNodeModel, ResponseNodesModel } from './models/response.model';

@Injectable()
export class FamilyNodeService {
  private readonly host = this.env.backendHost;

  constructor(
    private readonly http: HttpClient,
    @Inject(ENVIRONMENT) private readonly env: EnvironmentModel
  ) {}

  createNodeInTree(
    treeId: string,
    payload: RequestCreateNodeModel
  ): Observable<ResponseNodeModel> {
    return this.http.post<ResponseNodeModel>(
      `${this.host}/family-tree/${treeId}/node`,
      payload
    );
  }

  loadNodesByTree(treeId: string): Observable<ResponseNodesModel> {
    return this.http.get<ResponseNodesModel>(
      `${this.host}/family-tree/trees/${treeId}/nodes`
    );
  }
}

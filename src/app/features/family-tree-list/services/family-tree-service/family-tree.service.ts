import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../../app.const';
import { EnvironmentModel } from '../../../shared/models/environment.model';
import {
  ResponseTreeListModel,
  ResponseTreeModel,
} from './models/response.model';
import { RequestCreateTreeModel } from './models/request.model';

@Injectable()
export class FamilyTreeService {
  private readonly host = this.env.backendHost;

  constructor(
    private readonly http: HttpClient,
    @Inject(ENVIRONMENT) private readonly env: EnvironmentModel
  ) {}

  loadTrees(): Observable<ResponseTreeListModel> {
    return this.http.get<ResponseTreeListModel>(
      `${this.host}/family-tree/trees`
    );
  }

  createTree(payload: RequestCreateTreeModel): Observable<ResponseTreeModel> {
    return this.http.post<ResponseTreeModel>(
      `${this.host}/family-tree/trees`,
      payload
    );
  }
}

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../../app.const';
import { EnvironmentModel } from '../../../shared/models/environment.model';
import { TreesOutputDtoModel } from '../../../api/models/trees-output-dto.model';
import { CreateTreeInputDtoModel } from '../../../api/models/create-tree-input-dto.model';
import { TreeOutputDtoModel } from '../../../api/models/tree-output-dto.model';

@Injectable()
export class FamilyTreeService {
  private readonly host = this.env.backendHost;

  constructor(
    private readonly http: HttpClient,
    @Inject(ENVIRONMENT) private readonly env: EnvironmentModel
  ) {}

  loadTrees(): Observable<TreesOutputDtoModel> {
    return this.http.get<TreesOutputDtoModel>(
      `${this.host}/family-tree/trees`,
      { withCredentials: true }
    );
  }

  createTree(payload: CreateTreeInputDtoModel): Observable<TreeOutputDtoModel> {
    return this.http.post<TreeOutputDtoModel>(
      `${this.host}/family-tree/trees`,
      payload
    );
  }
}

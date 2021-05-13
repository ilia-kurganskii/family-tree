import { TestBed } from '@angular/core/testing';

import { FamilyNodeService } from './family-node.service';

describe('FamilyTreeService', () => {
  let service: FamilyNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

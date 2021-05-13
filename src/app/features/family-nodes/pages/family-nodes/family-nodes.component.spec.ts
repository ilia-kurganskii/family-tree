import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyNodesComponent } from './family-nodes.component';

describe('FamilyTreeComponent', () => {
  let component: FamilyNodesComponent;
  let fixture: ComponentFixture<FamilyNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamilyNodesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

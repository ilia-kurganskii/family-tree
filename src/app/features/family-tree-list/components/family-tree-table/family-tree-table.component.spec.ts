import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeTableComponent } from './family-tree-table.component';

describe('FamilyTreeTableComponent', () => {
  let component: FamilyTreeTableComponent;
  let fixture: ComponentFixture<FamilyTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamilyTreeTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

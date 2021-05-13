import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeListPageComponent } from './family-tree-list-page.component';

describe('FamilyTreeListPageComponent', () => {
  let component: FamilyTreeListPageComponent;
  let fixture: ComponentFixture<FamilyTreeListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamilyTreeListPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyTreeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

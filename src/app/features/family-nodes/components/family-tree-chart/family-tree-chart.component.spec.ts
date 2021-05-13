import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeChartComponent } from './family-tree-chart.component';

describe('FamilyTreeChartComponent', () => {
  let component: FamilyTreeChartComponent;
  let fixture: ComponentFixture<FamilyTreeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamilyTreeChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyTreeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

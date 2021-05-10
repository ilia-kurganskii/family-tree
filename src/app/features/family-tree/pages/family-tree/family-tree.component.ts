import { Component, OnInit } from '@angular/core';
import { SAMPLE } from '../../components/family-tree-chart/models/family-tree-builder.model.mock';

@Component({
  selector: 'ft-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss'],
})
export class FamilyTreeComponent implements OnInit {
  mock = SAMPLE;

  onstructor() {}

  ngOnInit(): void {}
}

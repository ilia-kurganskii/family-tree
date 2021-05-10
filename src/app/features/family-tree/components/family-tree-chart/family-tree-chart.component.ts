import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { D3FamilyTreeNodeModel } from './models/d3-family-tree-node.model';
import {
  NODE_HEIGHT,
  NODE_WIDTH,
  X_GAP,
  Y_GAP,
} from './family-tree-chart.const';
import {
  addNewNodes,
  removeOldNodes,
  updateCurrentNodes,
} from './helpers/node-helper';
import { addNewLinks, removeLinks, updateLinks } from './helpers/link-helper';
import { SAMPLE } from './models/family-tree-builder.model.mock';

@Component({
  selector: 'ft-family-tree-chart',
  templateUrl: './family-tree-chart.component.html',
  styleUrls: ['./family-tree-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FamilyTreeChartComponent implements OnChanges {
  @Output() expandBranch = new EventEmitter<string>();
  @Input() root!: D3FamilyTreeNodeModel;

  private svg!: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  private tree!: d3.TreeLayout<D3FamilyTreeNodeModel>;

  constructor(private elRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.root) {
      if (changes.root.firstChange) {
        this.initSVG();
      }
      this.updateD3(this.root);
    }
  }

  onExpand(id: string) {
    this.expandBranch.emit(id);
  }

  private initSVG() {
    this.svg = d3.select(this.elRef.nativeElement).append('svg');
    this.tree = d3
      .tree<D3FamilyTreeNodeModel>()
      .nodeSize([NODE_WIDTH + X_GAP, NODE_HEIGHT + Y_GAP]);
    this.svg.append('g');
  }

  private updateD3(rootNode: D3FamilyTreeNodeModel) {
    const root = this.tree(d3.hierarchy<D3FamilyTreeNodeModel>(rootNode));

    const nodes = root.descendants();
    const links = root.links();

    this.updateSvgSize(root);
    this.updateLinks(links);
    this.updateNodes(nodes);
  }

  /**
   * Update SVG size
   * Calculate new height and width and update svg attributes
   *
   * @param root
   * @private
   */
  private updateSvgSize(
    root: d3.HierarchyPointNode<D3FamilyTreeNodeModel>
  ): void {
    const marginBottom = 10;
    const marginLeft = 10;
    const marginRight = 10;
    const marginTop = 10;

    let left = root.x;
    let right = root.x;
    let bottom = root.y;
    let top = root.y;

    const nodes = root.descendants();
    nodes.forEach((node) => {
      left = Math.min(node.x, left);
      right = Math.max(node.x, right);
      bottom = Math.min(node.y, bottom);
      top = Math.max(node.y, top);
    });

    const width = right - left + NODE_WIDTH + marginLeft + marginRight;
    const height = top - bottom + NODE_HEIGHT + marginBottom + marginTop;

    this.svg
      .attr(
        'viewBox',
        [left - marginLeft, bottom - marginBottom, width, height].toString()
      )
      .attr('width', width + 'px')
      .attr('height', height + 'px')
      .attr('xmlns', 'http://www.w3.org/2000/svg');
  }

  /**
   * Added new nodes and remove old
   *
   * @param nodes
   * @private
   */
  private updateNodes(
    nodes: d3.HierarchyPointNode<D3FamilyTreeNodeModel>[]
  ): void {
    const node = this.svg.selectAll('.node-wrapper').data(nodes, (d: any) => {
      return d.data.id;
    });

    const nodeEnter = node.enter();

    addNewNodes(nodeEnter, this.onExpand);
    updateCurrentNodes(node);
    removeOldNodes(node);
  }

  /**
   * Add new links and remove old
   *
   * @param links
   * @private
   */
  private updateLinks(
    links: d3.HierarchyPointLink<D3FamilyTreeNodeModel>[]
  ): void {
    const link = this.svg.selectAll('path.link').data(links, (d: any) => {
      return d.target.data.id;
    });

    const linkEnter = link.enter();
    addNewLinks(linkEnter);
    updateLinks(link);
    removeLinks(link);
  }
}

import * as d3 from "d3";
import React from "react";
import "./family-tree-builder.scss";
import { D3FamilyTreeNodeModel } from "../../models/d3-family-tree-node.model";
import {
  NODE_HEIGHT,
  NODE_WIDTH,
  X_GAP,
  Y_GAP,
} from "./family-tree-builder.const";
import { addNewLinks, removeLinks, updateLinks } from "./helpers/link-helper";
import {
  addNewNodes,
  removeOldNodes,
  updateCurrentNodes,
} from "./helpers/node-helper";

export interface FamilyTreeProps {
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginTop?: number;
  className?: string;
  onExpandBranch: (id: string) => void;
  root: D3FamilyTreeNodeModel;
}

export default class FamilyTreeBuilderComponent extends React.PureComponent<FamilyTreeProps> {
  private ref = React.createRef<HTMLDivElement>();
  private svg!: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  private tree!: d3.TreeLayout<D3FamilyTreeNodeModel>;

  constructor(props: FamilyTreeProps) {
    super(props);
    this.updateD3 = this.updateD3.bind(this);
    this.onExpand = this.onExpand.bind(this);
    this.updateLinks = this.updateLinks.bind(this);
    this.updateSvgSize = this.updateSvgSize.bind(this);
  }

  componentDidMount(): void {
    this.initSVG();
    this.updateD3(this.props);
  }

  componentDidUpdate(): void {
    this.updateD3(this.props);
  }

  private onExpand(id: string) {
    this.props.onExpandBranch(id);
  }

  private initSVG() {
    this.svg = d3.select(this.ref.current).append("svg");
    this.tree = d3
      .tree<D3FamilyTreeNodeModel>()
      .nodeSize([NODE_WIDTH + X_GAP, NODE_HEIGHT + Y_GAP]);
    this.svg.append("g");
  }

  private updateD3(props: FamilyTreeProps) {
    const root = this.tree(d3.hierarchy<D3FamilyTreeNodeModel>(props.root));

    const nodes = root.descendants();
    const links = root.links();

    this.updateSvgSize(root);
    this.updateLinks(links);
    this.updateNodes(nodes);
  }

  /**
   * Update SVG size
   * Calculate new height and width and update svg attributes
   * @param root
   * @private
   */
  private updateSvgSize(
    root: d3.HierarchyPointNode<D3FamilyTreeNodeModel>
  ): void {
    const {
      marginBottom = 10,
      marginLeft = 10,
      marginRight = 10,
      marginTop = 10,
    } = this.props;

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
        "viewBox",
        [left - marginLeft, bottom - marginBottom, width, height].toString()
      )
      .attr("width", width + "px")
      .attr("height", height + "px")
      .attr("xmlns", "http://www.w3.org/2000/svg");
  }

  /**
   * Added new nodes and remove old
   * @param nodes
   * @private
   */
  private updateNodes(
    nodes: d3.HierarchyPointNode<D3FamilyTreeNodeModel>[]
  ): void {
    const node = this.svg.selectAll(".node-wrapper").data(nodes, (d: any) => {
      return d.data.id;
    });

    const nodeEnter = node.enter();

    addNewNodes(nodeEnter, this.onExpand);
    updateCurrentNodes(node);
    removeOldNodes(node);
  }

  /**
   * Add new links and remove old
   * @param links
   * @private
   */
  private updateLinks(
    links: d3.HierarchyPointLink<D3FamilyTreeNodeModel>[]
  ): void {
    const link = this.svg.selectAll("path.link").data(links, (d: any) => {
      return d.target.data.id;
    });

    const linkEnter = link.enter();
    addNewLinks(linkEnter);
    updateLinks(link);
    removeLinks(link);
  }

  render(): React.ReactNode {
    return <div className={this.props.className} ref={this.ref} />;
  }
}

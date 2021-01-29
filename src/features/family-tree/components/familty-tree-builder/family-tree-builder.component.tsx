import * as d3 from "d3";
import React from "react";
import "./family-tree-builder.scss";
import { D3FamilyTreeNodeModel } from "../../models/d3-family-tree-node.model";

const NODE_WIDTH = 130;
const NODE_HEIGHT = 130;

const X_GAP = 10;
const Y_GAP = 40;

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

    /**
     * Use foreignObject to render div in svg
     */
    const nodeG = nodeEnter
      .append("g")
      .attr("class", "node-wrapper")
      .style("opacity", 0);

    const nodeBlock = nodeG
      .append("foreignObject")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("width", NODE_WIDTH)
      .attr("height", NODE_HEIGHT)
      .append("xhtml:div")
      .attr("class", "node")
      .classed("node__withChildren", (d) => !!d.children)
      .attr("xmlns", "http://www.w3.org/1999/xhtml");

    let minDepth = Number.MAX_VALUE;
    nodeEnter.each((node) => {
      minDepth = Math.min(node.depth, minDepth);
    });

    nodeG
      .transition()
      .delay((d) => (d.depth - minDepth) * 800 + 200)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .styleTween("opacity", function () {
        return d3.interpolateNumber(0, 1);
      })
      .duration(1000);

    // Render name
    nodeBlock
      .append("span")
      .attr("class", "node_name typography__primary")
      .text((d) => d.data.name);

    // Render description
    nodeBlock
      .filter((d) => !!d.data.description)
      .append("span")
      .attr("class", "node_description typography__secondary")
      .text((d) => d.data.description ?? "");

    // Render second parent
    const secondParent = nodeBlock
      .filter((d) => !!d.data.secondParent)
      .append("div")
      .attr("class", "node_second_parent");

    secondParent
      .append("span")
      .attr("class", "node_second_parent_name typography__primary")
      .text((d) => d.data.secondParent?.name ?? "");

    secondParent
      .filter((d) => !!d.data.secondParent?.description)
      .append("span")
      .attr("class", "node_second_parent_description typography__secondary")
      .text((d) => d.data.secondParent?.description ?? "");

    nodeBlock
      .append("button")
      .attr("class", "node_expand_button typography_secondary")
      .text("+")
      .classed("hidden", (d) => {
        return !d.data.options?.expandable || d.data.expanded;
      })
      .on("click", (d, s) => s.data.id && this.onExpand(s.data.id));

    node.select("button").classed("hidden", (d) => {
      return !d.data.options?.expandable || d.data.expanded;
    });

    node.exit().remove();
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

    /**
     * M - move to
     * v - vertical line
     * h - horizontal line
     */
    const newLink = linkEnter
      .insert("path", "g")
      .attr("class", "link")
      .attr("visibility", "hidden")
      .attr(
        "d",
        (d) =>
          `
             M${d.source.x + NODE_WIDTH / 2},${d.source.y}
             v${d.target.y - d.source.y - 5}
             h${d.target.x - d.source.x}
           `
      );

    const tweenDash = function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore this === path element
      const length = this.getTotalLength();
      const interpolateFunc = d3.interpolateString(
        "0," + length,
        length + "," + length
      );
      return function (time: number) {
        return interpolateFunc(time);
      };
    };

    const tweenDashReverse = function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore this === path element
      const length = this.getTotalLength();
      const interpolateFunc = d3.interpolateString(
        length + "," + length,
        "0," + length
      );
      return function (time: number) {
        return interpolateFunc(time);
      };
    };

    let minDepth = Number.MAX_VALUE;
    linkEnter.each((node) => {
      minDepth = Math.min(node.source.depth, minDepth);
    });

    newLink
      .transition()
      .duration(1000)
      .delay((d) =>
        d.source.depth === 0 ? 800 : (d.source.depth - minDepth) * 800
      )
      .attr("visibility", "visible")
      .attrTween("stroke-dasharray", tweenDash);

    // remove old links
    link
      .exit()
      .transition()
      .duration(500)
      .attr("visibility", "visible")
      .attrTween("stroke-dasharray", tweenDashReverse)
      .remove();
  }

  render(): React.ReactNode {
    return <div className={this.props.className} ref={this.ref} />;
  }
}

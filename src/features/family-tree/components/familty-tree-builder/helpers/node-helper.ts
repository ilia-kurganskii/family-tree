import * as d3 from "d3";
import { D3FamilyTreeNodeModel } from "../../../models/d3-family-tree-node.model";
import {
  DURATION_ANIMATION_ADD,
  DURATION_ANIMATION_UPDATE,
  NODE_HEIGHT,
  NODE_WIDTH,
} from "../family-tree-builder.const";

function transformTranslateToXY(
  d: d3.HierarchyPointNode<D3FamilyTreeNodeModel>
): string {
  return "translate(" + d.x + "," + d.y + ")";
}

export function addNewNodes(
  nodeEnter: d3.Selection<
    d3.EnterElement,
    d3.HierarchyPointNode<D3FamilyTreeNodeModel>,
    SVGSVGElement,
    unknown
  >,
  expandCallback: (id: string) => void
): void {
  /**
   * Use foreignObject to render div in svg
   */
  const nodeG = nodeEnter
    .append("g")
    .attr("class", "node-wrapper")
    .attr("transform", transformTranslateToXY)
    .style("opacity", 0);

  const nodeBlock = nodeG
    .append("foreignObject")
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
    .duration(DURATION_ANIMATION_ADD);

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
    .on("click", (d, s) => s.data.id && expandCallback(s.data.id));
}

export function updateCurrentNodes(
  node: d3.Selection<
    d3.BaseType,
    d3.HierarchyPointNode<D3FamilyTreeNodeModel>,
    SVGSVGElement,
    unknown
  >
): void {
  node
    .transition()
    .duration(0)
    .style("opacity", 1)
    .transition()
    .duration(DURATION_ANIMATION_UPDATE)
    .attr("transform", transformTranslateToXY);

  node.select("button").classed("hidden", (d) => {
    return !d.data.options?.expandable || d.data.expanded;
  });
}

export function removeOldNodes(
  node: d3.Selection<
    d3.BaseType,
    d3.HierarchyPointNode<D3FamilyTreeNodeModel>,
    SVGSVGElement,
    unknown
  >
): void {
  node.exit().remove();
}

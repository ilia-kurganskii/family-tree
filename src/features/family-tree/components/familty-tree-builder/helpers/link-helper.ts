import * as d3 from "d3";
import { D3FamilyTreeNodeModel } from "../../../models/d3-family-tree-node.model";
import {
  DURATION_ANIMATION_ADD,
  DURATION_ANIMATION_REMOVE,
  DURATION_ANIMATION_UPDATE,
  NODE_WIDTH,
} from "../family-tree-builder.const";

function buildLinkPath(d: d3.HierarchyPointLink<D3FamilyTreeNodeModel>) {
  return (
    `m${NODE_WIDTH / 2} 0` +
    ` v${d.target.y - d.source.y - 5}` +
    ` h${d.target.x - d.source.x}`
  );
}

function transformTranslateToSource(
  d: d3.HierarchyPointLink<D3FamilyTreeNodeModel>
): string {
  return "translate(" + d.source.x + "," + d.source.y + ")";
}

function tweenDash() {
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
}

function tweenDashReverse() {
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
}

export function addNewLinks(
  linkEnter: d3.Selection<
    d3.EnterElement,
    d3.HierarchyPointLink<D3FamilyTreeNodeModel>,
    SVGSVGElement,
    unknown
  >
): void {
  /**
   * M - move to
   * v - vertical line
   * h - horizontal line
   */
  const newLink = linkEnter
    .insert("path", "g")
    .attr("class", "link")
    .attr("visibility", "hidden")
    .attr("transform", transformTranslateToSource)
    .attr("d", buildLinkPath);

  let minDepth = Number.MAX_VALUE;
  linkEnter.each((node) => {
    minDepth = Math.min(node.source.depth, minDepth);
  });

  newLink
    .transition()
    .duration(DURATION_ANIMATION_ADD)
    .delay((d) =>
      d.source.depth === 0 ? 800 : (d.source.depth - minDepth) * 800
    )
    .attr("visibility", "visible")
    .attrTween("stroke-dasharray", tweenDash)
    .transition();
}

export function updateLinks(
  link: d3.Selection<
    d3.BaseType,
    d3.HierarchyPointLink<D3FamilyTreeNodeModel>,
    SVGSVGElement,
    unknown
  >
): void {
  link
    .transition()
    .duration(DURATION_ANIMATION_UPDATE)
    .attr("transform", transformTranslateToSource)
    .attr("d", buildLinkPath)
    .attr("stroke-dasharray", "")
    .attr("visibility", "visible");
}

export function removeLinks(
  link: d3.Selection<
    d3.BaseType,
    d3.HierarchyPointLink<D3FamilyTreeNodeModel>,
    SVGSVGElement,
    unknown
  >
): void {
  // remove old links
  link
    .exit()
    .transition()
    .duration(DURATION_ANIMATION_REMOVE)
    .attr("visibility", "visible")
    .attrTween("stroke-dasharray", tweenDashReverse)
    .remove();
}

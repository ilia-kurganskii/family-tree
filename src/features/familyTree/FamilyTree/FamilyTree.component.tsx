import React from "react";
import * as d3 from "d3";
import "./FamilyTree.scss";
import {GordeevaMockData} from "./FamilyTree.mock";

const NODE_WIDTH = 130;
const NODE_HEIGHT = 130;

const X_GAP = 10;
const Y_GAP = 40;


const SCROLL_STYLE = {overflow: "scroll"}

export interface FamilyNode {
    name: string;
    description?: string;
    secondParent?: {
        name: string,
        description?: string;
    },
    options?: {
        expandable?: boolean,
        expanded?: boolean
    }
    children?: FamilyNode[]
}

interface FamilyTreeData {
    root: FamilyNode
}

interface FamilyTreeProps {
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
    marginTop?: number;
    data?: FamilyTreeData;
}

export default class FamilyTree extends React.Component<FamilyTreeProps, any> {

    ref = React.createRef<HTMLDivElement>();

    componentDidMount() {
        let {marginBottom = 10, marginLeft = 10, marginRight = 10, marginTop = 10} = this.props;

        const svg = d3.select(this.ref.current).append('svg');
        const tree = d3.tree<FamilyNode>().nodeSize([NODE_WIDTH + X_GAP, NODE_HEIGHT + Y_GAP])
        const root = tree(d3.hierarchy<FamilyNode>(GordeevaMockData));

        const nodes = root.descendants();
        const links = root.links();

        let left = root.x;
        let right = root.x;
        let bottom = root.y;
        let top = root.y;

        nodes.forEach((node) => {
            left = Math.min(node.x, left);
            right = Math.max(node.x, right);
            bottom = Math.min(node.y, bottom);
            top = Math.max(node.y, top);
        });

        const width = right - left + NODE_WIDTH + marginLeft + marginRight;
        const height = top - bottom + NODE_HEIGHT + marginBottom + marginTop;

        svg.attr("viewBox", [left - marginLeft, bottom - marginBottom, width, height].toString())
            .attr("width", width + "px")
            .attr("height", height + "px")
            .attr("xmlns", "http://www.w3.org/2000/svg")


        const linkEnter = svg.append("g")
            .attr("fill", "none")
            .attr("stroke", "#000")
            .attr('stroke-width', 1)
            .selectAll(".link")
            .data(links)
            .enter()

        linkEnter.insert("path", "g")
            .attr("d", (d) =>
                `
             M${d.source.x + NODE_WIDTH / 2},${d.source.y}
             v${d.target.y - d.source.y - 2}
             h${d.target.x - d.source.x}
           `
            )


        let nodeEnter = svg
            .selectAll(".node")
            .data(nodes)
            .enter();

        const nodeBlock = nodeEnter
            .append("foreignObject")
            .attr("x", d => d.x)
            .attr("y", d => d.y)
            .attr("fill", "black")
            .attr("width", NODE_WIDTH)
            .attr("height", NODE_HEIGHT)
            .append("xhtml:div")
            .attr("class", d => d.children ? "node node__withChildren" : "node")
            .attr("xmlns", "http://www.w3.org/1999/xhtml")

        // Render name
        nodeBlock.append("span")
            .attr("class", "node_name typography__primary")
            .text((d) => d.data.name)

        // Render description
        nodeBlock.filter(d => !!d.data.description).append("span")
            .attr("class", "node_description typography__secondary")
            .text((d) => d.data.description!)

        // Render second parent
        const secondParent = nodeBlock.filter(d => !!d.data.secondParent).append("div").attr("class", "node_second_parent");

        secondParent.append("span")
            .attr("class", "node_second_parent_name typography__primary")
            .text((d) => d.data.secondParent?.name!)

        secondParent.filter(d => !!d.data.secondParent?.description).append("span")
            .attr("class", "node_second_parent_description typography__secondary")
            .text((d) => d.data.secondParent?.description!)


    }


    render() {
        return <div style={SCROLL_STYLE} ref={this.ref}/>
    }
}


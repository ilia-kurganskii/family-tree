import React from "react";
import * as d3 from "d3";
import data from "./flare-2.json";
import "./FamilyTree.scss";

const NODE_WIDTH = 130;
const NODE_HEIGHT = 130;

const HEIGHT_PARENT_NAME = 19;
const OFFSET_NAME_DESCRIPTION = 8;
const HEIGHT_DESCRIPTION = 16;
const OFFSET_SECOND_PARENT = 10;
const OFFSET_SECOND_PARENT_DESCRIPTION = 4;

const X_GAP = 15;
const Y_GAP = 90;

const CIRCLE_RADIUS = 4;

const SCROLL_STYLE = {overflow: "scroll"}

interface FamilyNode {
    name: string;
    description?: string;
    secondParent?: {
        name: string,
        description?: string;
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

        const d3Data = data;

        const svg = d3.select(this.ref.current).append('svg');
        const tree = d3.tree<FamilyNode>().nodeSize([NODE_WIDTH + X_GAP, NODE_HEIGHT + Y_GAP])
        const root = tree(d3.hierarchy<FamilyNode>(d3Data));

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

        svg.attr("viewBox", [left - marginLeft, bottom - marginBottom, width, height].toString()).attr("width", width + "px").attr("height", height + "px")


        const linkEnter = svg.append("g")
            .attr("fill", "none")
            .attr("stroke", "#000")
            .selectAll(".link")
            .data(links)
            .enter()

        linkEnter.insert("path", "g")
            .attr("d", (d) =>
                `
             M${d.source.x + NODE_WIDTH / 2},${d.source.y + NODE_HEIGHT + 15}
             v${d.target.y - d.source.y - NODE_HEIGHT - 30}
             h${d.target.x - d.source.x}
           `
            )

        linkEnter.insert("circle", "g")
            .attr("fill", "#000")
            .attr("r", CIRCLE_RADIUS)
            .attr("cx", d => d.source.x + NODE_WIDTH / 2)
            .attr("cy", d => d.source.y + NODE_HEIGHT + 15)

        let nodeEnter = svg.append("g")
            .selectAll(".node")
            .data(nodes)
            .enter();

        const nodeBlock = nodeEnter
            .append("g")
            .attr("class", "node")
            .attr("transform", d => `translate(${d.x}, ${d.y})`);

        // Render name
        nodeBlock.append("text")
            .attr("class", "node_name")
            .attr("dy", HEIGHT_PARENT_NAME)
            .attr("dx", NODE_WIDTH / 2)
            .text((d) => d.data.name)

        // Render description
        nodeBlock.filter(d => !!d.data.description).append("text")
            .attr("class", "node_description")
            .attr("dy", HEIGHT_PARENT_NAME + OFFSET_NAME_DESCRIPTION + HEIGHT_DESCRIPTION)
            .attr("dx", NODE_WIDTH / 2)
            .text((d) => d.data.description!)

        // Render second parent
        const secondParent = nodeBlock.filter(d => !!d.data.secondParent);

        secondParent.append("text")
            .attr("class", "node_second_parent_name")
            .attr("dy", HEIGHT_PARENT_NAME + OFFSET_NAME_DESCRIPTION + HEIGHT_DESCRIPTION + OFFSET_SECOND_PARENT + HEIGHT_PARENT_NAME * 2)
            .attr("dx", NODE_WIDTH / 2)
            .text((d) => d.data.secondParent?.name!)


    }


    render() {
        return <div style={SCROLL_STYLE} ref={this.ref}/>
    }
}


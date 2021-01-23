import React from "react";
import * as d3 from "d3";
import data from "./flare-2.json";

const HEIGHT_BETWEEN_LEVELS = 60;
const NODE_WIDTH = 30;
const NODE_HEIGHT = 30;

const CIRCLE_RADIUS = 4;

const SCROLL_STYLE = {overflow: "scroll"}

interface FamilyNode {
    name: string;
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
        const tree = d3.tree().nodeSize([NODE_WIDTH, NODE_HEIGHT])
        const root = tree(d3.hierarchy<FamilyNode>(d3Data));

        const nodes = root.descendants();
        const links = root.links();

        nodes.forEach(function (d) { // @ts-ignore
            d.y = d.depth * HEIGHT_BETWEEN_LEVELS;
        });

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

        svg.attr("viewBox", [left - NODE_WIDTH / 2 - marginLeft, bottom - NODE_HEIGHT / 2 - marginBottom, width, height].toString()).attr("width", width + "px").attr("height", height + "px")


        svg.append("g")
            .attr("fill", "none")
            .attr("stroke", "#000")
            .selectAll(".link")
            .data(links)
            .enter()
            .insert("path", "g")
            .attr("d", (d) =>
                `
             M${d.source.x},${d.source.y + 15}
             v${d.target.y - d.source.y - 30}
             h${d.target.x - d.source.x}
           `
            )

        let nodeEnter = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 2)
            .selectAll(".node")
            .data(nodes)
            .enter();

        nodeEnter
            .append("circle")
            .attr("class", "node")
            .attr("r", CIRCLE_RADIUS)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)


    }


    render() {
        return <div style={SCROLL_STYLE} ref={this.ref}/>
    }
}


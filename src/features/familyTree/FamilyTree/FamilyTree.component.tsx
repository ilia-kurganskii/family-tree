import React from "react";
import * as d3 from "d3";
import "./FamilyTree.scss";
import {ProcessedFamilyNode} from "../models/ProcessedFamilyNode.model";

const NODE_WIDTH = 130;
const NODE_HEIGHT = 130;

const X_GAP = 10;
const Y_GAP = 40;

const SCROLL_STYLE = {overflow: "scroll"}

export interface FamilyTreeProps {
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
    marginTop?: number;
    expandBranch: (id: string) => void;
    root: ProcessedFamilyNode;
}

export default class FamilyTree extends React.PureComponent<FamilyTreeProps> {

    private ref = React.createRef<HTMLDivElement>();
    private svg!: d3.Selection<SVGSVGElement, unknown, null, undefined>;
    private tree!: d3.TreeLayout<ProcessedFamilyNode>;

    constructor(props: FamilyTreeProps) {
        super(props);
        this.updateD3 = this.updateD3.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    componentDidMount() {
        this.initSVG();
        this.updateD3(this.props)
    }

    componentDidUpdate(prevProps: Readonly<FamilyTreeProps>, prevState: Readonly<{}>, snapshot?: any) {
        this.updateD3(this.props);
    }

    private onExpand(id: string) {
        this.props.expandBranch(id);
    }

    private initSVG() {
        this.svg = d3.select(this.ref.current).append('svg');
        this.tree = d3.tree<ProcessedFamilyNode>().nodeSize([NODE_WIDTH + X_GAP, NODE_HEIGHT + Y_GAP]);
        this.svg.append("g");
    }

    private updateD3(props: FamilyTreeProps) {
        let {marginBottom = 10, marginLeft = 10, marginRight = 10, marginTop = 10} = props;

        const root = this.tree(d3.hierarchy<ProcessedFamilyNode>(props.root));

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

        this.svg.attr("viewBox", [left - marginLeft, bottom - marginBottom, width, height].toString())
            .attr("width", width + "px")
            .attr("height", height + "px")
            .attr("xmlns", "http://www.w3.org/2000/svg")


        const link = this.svg.selectAll("path.link")
            .data(links, (d: any) => {
                return d.target.data.id;
            })


        const linkEnter = link
            .enter()

        linkEnter.insert("path", "g")
            .attr("class", "link")
            .attr("d", (d) =>
                `
             M${d.source.x + NODE_WIDTH / 2},${d.source.y}
             v${d.target.y - d.source.y - 5}
             h${d.target.x - d.source.x}
           `
            )

        link.exit().remove();

        let node = this.svg
            .selectAll(".node-wrapper")
            .data(nodes, (d: any) => {
                return d.data.id
            })

        const nodeEnter = node.enter();

        nodeEnter.transition().duration(400);

        const nodeBlock = nodeEnter
            .append("foreignObject")
            .attr("class", "node-wrapper")
            .attr("x", d => d.x)
            .attr("y", d => d.y)
            .attr("fill", "black")
            .attr("width", NODE_WIDTH)
            .attr("height", NODE_HEIGHT)
            .append("xhtml:div")
            .attr("class", "node")
            .classed("node__withChildren", d => !!d.children)
            .attr("xmlns", "http://www.w3.org/1999/xhtml")

        node.select(".node").classed("node__withChildren", (d: any) => !!d.children)

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

        nodeBlock.append("button")
            .attr("class", "node_expand_button typography_secondary")
            .text("+")
            .classed("hidden", (d) => {
                return !d.data.options?.expandable || !!d.data.expanded
            })
            .on("click", (d, s) => s.data.id && this.onExpand(s.data.id))

        node.select("button").classed("hidden", (d) => {
            return !d.data.options?.expandable || !!d.data.expanded
        })

        node.exit().remove();


    }


    render() {
        return <div style={SCROLL_STYLE} ref={this.ref}/>
    }
}


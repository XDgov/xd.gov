// define the graph
var nodes_data =  [
    {"name": "eo_13960", "title": "Promoting the Use of Trustworthy Artificial Intelligence in the Federal Government"},
    {"name": "eo_13859", "title": "Maintaining American Leadership in Artificial Intelligence"},
    {"name": "eo_14110", "title": "Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence"},
    {"name": "baibor", "title": "Blueprint for an AI Bill of Rights"},
    {"name": "nist_rmf", "title": "Artificial Intelligence Risk Management Framework"},
    {"name": "m_24_10", "title": "Advancing Governance, Innovation, and Risk Management for Agency Use of Artificial Intelligence"},
    {"name": "hr_2575", "title": "Artificial Intelligence in Government Act"},
    {"name": "s_1353", "title": "Advancing American AI Act"},
    {"name": "hr_6216", "title": "National AI Initiative Act"},
    {"name": "gao_21_519sp", "title": "Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities"}
    ]

var links_data = [
	{"source": "eo_13960", "target": "eo_13859"},
    {"source": "eo_14110", "target": "eo_13960"},
    {"source": "eo_14110", "target": "baibor"},
    {"source": "eo_14110", "target": "nist_rmf"},
    {"source": "baibor", "target": "nist_rmf"},
    {"source": "baibor", "target": "eo_13960"},
    {"source": "nist_rmf", "target": "hr_6216"},
    {"source": "m_24_10", "target": "hr_2575"},
    {"source": "m_24_10", "target": "s_1353"},
    {"source": "m_24_10", "target": "eo_14110"},
    {"source": "m_24_10", "target": "eo_13960"},
    {"source": "m_24_10", "target": "baibor"},
    {"source": "m_24_10", "target": "nist_rmf"},
    {"source": "gao_21_519sp", "target": "nist_rmf"},
    {"source": "gao_21_519sp", "target": "eo_13960"},
    {"source": "gao_21_519sp", "target": "eo_13859"},
]

// create somewhere to put the force directed graph
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// set up the simulation
var simulation = d3.forceSimulation()
					.nodes(nodes_data)
                    .force("x", d3.forceX())
        .force("y", d3.forceY());

const drag = d3.drag();

// add forces
simulation
    .force("charge_force", d3.forceManyBody().strength(-2500))
    .force("center_force", d3.forceCenter(width / 2, height / 2))
    .force("radial_force", d3.forceRadial(100, width / 2, height / 2));


// add edges
var link_force =  d3.forceLink(links_data)
                        .id(function(d) { return d.name; })

simulation.force("links",link_force)

// add arrows to the endpoints of edges
svg.append("svg:defs").append("svg:marker")
  .attr("id", "arrow")
  .attr("refX", 13)
  .attr("refY", 5)
  .attr("markerWidth", 30)
  .attr("markerHeight", 30)
  .attr("markerUnits","userSpaceOnUse")
  .attr("orient", "auto")
  .append("path")
  .attr("d", "M 0 0 12 6 0 12 3 6")
  .style("fill", "#CCCCCC");

// draw lines for the edges
var link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links_data)
    .enter().append("line")
    .attr("stroke-width", 2)
    .attr("marker-end", "url(#arrow)");

// draw circles for the nodes
var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(nodes_data)
        .join("g")
        .on("mouseover", function(event, d) {
            d3.select(this).select("text")
                .attr("font-size", "20px")
                .style('fill', 'black');
            d3.select(this).select("circle")
                .attr("r", 30);
        })
        .on("mouseout", function(event, d) {
            d3.select(this).select("text")
                .attr("font-size", "10px")
                .style('fill', "darkgray");
            d3.select(this).select("circle")
                .attr("r", 20);
        })
        .on("click", function(event, d) {
            // TODO: this should highlight the entry in the table and/or show a list of principles
            const circleElem = d3.select(this).select("circle");

            circleElem.attr("stroke", "red");
            highlightTableColumn(circleElem.attr("id"));
        });

node.append("circle")
    .attr("id", d => d.name)
    .attr("stroke", "white")
    .attr("stroke-width", 1.5)
    .attr("r", 20)
    .attr('fill', d => '#6baed6');

// add text labels
node.append("text")
    .attr("x", 30 + 4)
    .attr("y", "0.31em")
    .attr("font-size", "10px")
    .text(d => d.title);

var drag_controls = d3.drag()
    .on("start",dragstarted)
    .on("drag",dragged)
    .on("end",dragended);

drag_controls(node);


// add tick instructions:
simulation.on("tick", tickActions );

function tickActions() {
    // update circle positions each tick of the simulation
    node.attr("transform", d => `translate(${d.x},${d.y})`);

    // update link positions
    link
        .attr("x1", function(d) { return calcX(d.source, d.target); })
        .attr("y1", function(d) { return calcY(d.source, d.target); })
        .attr("x2", function(d) { return calcX(d.target, d.source); })
        .attr("y2", function(d) { return calcY(d.target, d.source); });

  }

// offsets so edges connect to boundary of circle not center
function calcX(nodeA, nodeB) {
    var dx = nodeB.x - nodeA.x;
    var dy = nodeB.y - nodeA.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var radius = 20;
    return nodeA.x + (dx * radius) / distance;
  }

  function calcY(nodeA, nodeB) {
    var dx = nodeB.x - nodeA.x;
    var dy = nodeB.y - nodeA.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var radius = 20;
    return nodeA.y + (dy * radius) / distance;
  }

// drag event handlers
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }


function highlightTableColumn(documentName) {
    const tableColumn = document.getElementsByClassName(documentName);

    for (let i = 0; i < tableColumn.length; i++) {
        tableColumn[i].classList.add('highlight');
    }
}
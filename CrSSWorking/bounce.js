var width  = window.innerWidth
    height = window.innerHeight;

//svg=d3.select("body")
//    .append("svg:svg")
//    .attr("height",h)
//    .attr("width",w)
    

nodes = d3.range(20).map(function(d,i) {
    radius = Math.random()*40+5;
    x=Math.random()*(w-radius)+radius
    y=Math.random()*(h-radius)+radius
    return {radius:radius,mass:radius,x:x,y:y,px:x+Math.random()*10-5,py:y+Math.random()*10-5}
})

ball = svg.selectAll(".ball").data(nodes)

ball.enter()
    .append("circle")
    .attr("class","ball")
    .attr("r",function(d) { return d.radius})
    
    
force = d3.layout.force()
    .friction(1)
    .nodes(nodes)
    .charge(0).gravity(0)
    .on("tick.redraw",redraw)
    .start()

ball.call(force.drag)   
d3.z.collide(force)
d3.z.deflect(force,0,0,w,h)


function redraw() {
    ball.attr("cx",function(d) { return d.x})
    ball.attr("cy",function(d) { return d.y})
   force.resume() 
}
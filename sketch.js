function setup() {
 
    //window size
    createCanvas(500, 500);
 
    //background color
    background(10,10,255);
 
    //Circle
    noStroke(); //no outline for donut
    fill(255, 255, 0); //make the Circle yellow
    ellipse(250, 250, 450, 450); //shape of Battle Network logo
 
    //inner circle
	//red with a black stroke
    strokeWeight(20);
    stroke(0, 0, 0); //color of the Circle outline
    fill(255, 0, 0); //color of the hole
    ellipse(250, 250, 400, 400);
	
	// line through red circle
    strokeWeight(15); //Line thickness
    stroke(0, 0, 0); //black
    line(385, 100, 115, 400); // Diagonally from edge of the red circle to the other end
    
	
	//Triangle 1
	noStroke();
	fill(0,0,0);//Black triangle
	triangle(439, 160, 310, 50, 315, 180);//placed to intersect the line at thes cooridnates
	
	//Triangle 2
	noStroke();
	fill(0,0,0);//black
	triangle(180, 439, 60, 340, 190, 315);// a rough approximation of Triangle 1 flipped
	
 
 
 
 
 
 
 
   
}
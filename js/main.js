d3.json("data/nations.json",function(pNations){
	
	//get the area

	var sChartArea = d3.select("#chart_area");
	var sFrame = sChartArea.append("svg");
	var sCanvas = sFrame.append("g");

	//get the margins

	var sMargin = {
		top : 19.5,
		right : 19.5,
		bottom : 19.5,
		left : 39.5 
	};

	var sFrameWidth = 960;
	var sFrameHeight = 350;
	var sCanvasWidth = sFrameWidth - sMargin.left - sMargin.right;
	var sCanvasHeight = sFrameHeight - sMargin.top - sMargin.bottom;

	//set the frame attributes
	sFrame.attr("width",sFrameWidth);
	sFrame.attr("height",sFrameHeight);

	//shift the canvas a bit
	sCanvas.attr("transform", "translate("+sMargin.left + "," + sMargin.top + ")");

	//challenge add a circle
	var sChallengeSVG = sCanvas.append("svg");
	var sChallengeSVGCanvas = sChallengeSVG.append("g");
	var sChallengeSVGCircle = sChallengeSVGCanvas.append("circle");
	
	//set the diameter and position
	sChallengeSVGCircle.attr("r",100);
	sChallengeSVGCircle.attr("cx",150);
	sChallengeSVGCircle.attr("cy",150);

	//set the color 
	sChallengeSVGCircle.attr("stroke","green");
	sChallengeSVGCircle.attr("stroke-width",5);
	sChallengeSVGCircle.attr("stroke-dasharray",5);
	sChallengeSVGCircle.attr("fill","blue");


});
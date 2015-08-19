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

	// //challenge add a circle
	// var sChallengeSVG = sCanvas.append("svg");
	// var sChallengeSVGCanvas = sChallengeSVG.append("g");
	// var sChallengeSVGCircle = sChallengeSVGCanvas.append("circle");
	
	// //set the diameter and position
	// sChallengeSVGCircle.attr("r",100);
	// sChallengeSVGCircle.attr("cx",150);
	// sChallengeSVGCircle.attr("cy",150);

	// //set the color 
	// sChallengeSVGCircle.attr("stroke","green");
	// sChallengeSVGCircle.attr("stroke-width",5);
	// sChallengeSVGCircle.attr("stroke-dasharray",5);
	// sChallengeSVGCircle.attr("fill","blue");

	//set the log scale for income
	var sXScale = d3.scale.log(); //income
	sXScale.domain([250,1e5]); // set min and max value
	sXScale.range([0,sCanvasWidth]); //set min and max range on page

	//create x-axis
	var sXAxis = d3.svg.axis()
					.orient("bottom")
					.scale(sXScale);

	//add axis to the page
	sCanvas.append("g")
				.attr("class","x-axis")
				.attr("transform","translate(0,"+sCanvasHeight+")")
				.call(sXAxis);

	//set the linear scale
	var sYScale = d3.scale.linear(); 
	sYScale.domain([85,10]); //set the min and max value
	sYScale.range([0,sCanvasHeight]);

	//create y-axis
	var sYAxis = d3.svg.axis()
					.orient("left")
					.scale(sYScale);

	//add axis to the page
	sCanvas.append("g")
				.attr("class","y-axis")
				//.attr("transform","translate(0"+sCanvasHeight+")")
				.call(sYAxis);


});
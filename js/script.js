$(function() {
	
	// global variables
	var width = 1000;
	var height = 600;
	var margin = {"left": 25, "bottom": 25, "right": 5}
	
	// x scale
	var xScale = d3.scale.linear()
		.domain([0, 100])
		.range([0, width - margin.left - margin.right])
		
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.ticks(0)
		.orient("bottom");
		
	// y scale
	var yScale = d3.scale.linear()
		.domain([0, 100])
		.range([height - margin.bottom, 0])
		
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.ticks(0)
		.orient("left");
		
	// creating the main svg
	var svg = d3.select("#canvas")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "svg")
	
	

	// workstation quadrants
	var quadrant_group = svg.append("g")
		.attr("transform", "translate(" + margin.left + ",0)")
	 
	
	var quadrant_border = quadrant_group.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", width - margin.left - margin.right)
		.attr("height", height - margin.bottom)
		.attr("rx", 20)
		.attr("ry", 20)
		.attr("class", "quadrant_border")
	
	// creating workstation descriptions
	quadrant_group.append("text")
		.attr("x", xScale(5))
		.attr("y", yScale(5))
		.attr("text-anchor", "middle")
		.text("WS-1")
		.attr("class", "quad-label")
	
	quadrant_group.append("text")
		.attr("x", xScale(5))
		.attr("y", yScale(30))
		.attr("text-anchor", "middle")
		.text("WS-2")
		.attr("class", "quad-label")

	quadrant_group.append("text")
		.attr("x", xScale(5))
		.attr("y", yScale(55))
		.attr("text-anchor", "middle")
		.text("WS-3")
		.attr("class", "quad-label")

	quadrant_group.append("text")
		.attr("x", xScale(5))
		.attr("y", yScale(80))
		.attr("text-anchor", "middle")
		.text("WS-4")
		.attr("class", "quad-label")

	quadrant_group.append("text")
		.attr("x", xScale(30))
		.attr("y", yScale(80))
		.attr("text-anchor", "middle")
		.text("WS-5")
		.attr("class", "quad-label")
	
	quadrant_group.append("text")
		.attr("x", xScale(30))
		.attr("y", yScale(55))
		.attr("text-anchor", "middle")
		.text("WS-6")
		.attr("class", "quad-label")
		
	quadrant_group.append("text")
		.attr("x", xScale(30))
		.attr("y", yScale(30))
		.attr("text-anchor", "middle")
		.text("WS-7")
		.attr("class", "quad-label")
	
	quadrant_group.append("text")
		.attr("x", xScale(30))
		.attr("y", yScale(5))
		.attr("text-anchor", "middle")
		.text("WS-8")
		.attr("class", "quad-label")	
	
	quadrant_group.append("text")
		.attr("x", xScale(55))
		.attr("y", yScale(5))
		.attr("text-anchor", "middle")
		.text("WS-9")
		.attr("class", "quad-label")

	quadrant_group.append("text")
		.attr("x", xScale(55))
		.attr("y", yScale(30))
		.attr("text-anchor", "middle")
		.text("WS-10")
		.attr("class", "quad-label")

	quadrant_group.append("text")
		.attr("x", xScale(55))
		.attr("y", yScale(55))
		.attr("text-anchor", "middle")
		.text("WS-11")
		.attr("class", "quad-label")

	quadrant_group.append("text")
		.attr("x", xScale(55))
		.attr("y", yScale(80))
		.attr("text-anchor", "middle")
		.text("WS-12")
		.attr("class", "quad-label")
	
	quadrant_group.append("text")
		.attr("x", xScale(80))
		.attr("y", yScale(80))
		.attr("text-anchor", "middle")
		.text("WS-13")
		.attr("class", "quad-label")
		
	quadrant_group.append("text")
		.attr("x", xScale(80))
		.attr("y", yScale(55))
		.attr("text-anchor", "middle")
		.text("WS-14")
		.attr("class", "quad-label")
			
	quadrant_group.append("text")
		.attr("x", xScale(80))
		.attr("y", yScale(30))
		.attr("text-anchor", "middle")
		.text("WS-15")
		.attr("class", "quad-label")
				
	quadrant_group.append("text")
		.attr("x", xScale(80))
		.attr("y", yScale(5))
		.attr("text-anchor", "middle")
		.text("WS-16")
		.attr("class", "quad-label")
	
	// creating the dividers
	quadrant_group.append("line")
		.attr("x1", 0)
		.attr("y1", yScale(25))
		.attr("x2", xScale(100))
		.attr("y2", yScale(25))
		.attr("class", "divider");
	
	quadrant_group.append("line")
		.attr("x1", 0)
		.attr("y1", yScale(50))
		.attr("x2", xScale(100))
		.attr("y2", yScale(50))
		.attr("class", "divider");

	quadrant_group.append("line")
		.attr("x1", 0)
		.attr("y1", yScale(75))
		.attr("x2", xScale(100))
		.attr("y2", yScale(75))
		.attr("class", "divider");

	quadrant_group.append("line")
		.attr("x1", xScale(25))
		.attr("y1", 0)
		.attr("x2", xScale(25))
		.attr("y2", yScale(0))
		.attr("class", "divider");


	quadrant_group.append("line")
		.attr("x1", xScale(50))
		.attr("y1", 0)
		.attr("x2", xScale(50))
		.attr("y2", yScale(0))
		.attr("class", "divider");

	quadrant_group.append("line")
		.attr("x1", xScale(75))
		.attr("y1", 0)
		.attr("x2", xScale(75))
		.attr("y2", yScale(0))
		.attr("class", "divider");
	
	// random int generator in a given range
	function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
	}
	
	// pubnub registration
	var pubnub = new PubNub({
        publishKey : '<PUT_YOUR_PUB_KEY_HERE>',
        subscribeKey : '<PUT_YOUR_SUB_KEY_HERE>'
    });
	
	
	// push data to pubnub channel in 5 seconds interval -- this could happen from server side (azure)
	setInterval(function(){
		
		// json object array of workers (could be dynamic in actual cases)
		var data = [
		{
			"worker": "WK-1",
			"cov": 85,
			"ate": 58,
			"label_x": -2,
			"label_y": -2,
			"text_anchor": "end"
			
		},
		{
			"worker": "WK-2",
			"cov": 40,
			"ate": 54,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end"
			
		},
		{
			"worker": "WK-3",
			"cov": 30,
			"ate": 40,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end"
			
		},
		{
			"worker": "Wk-4",
			"cov": 47,
			"ate": 38,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end"
			
		},
		{
			"worker": "WK-5",
			"cov": 13,
			"ate": 14,
			"label_x": -2,
			"label_y": -1,
			"text_anchor": "end"
			
		},
		
		{
			"worker": "WK-6",
			"cov": 34,
			"ate": 14,
			"label_x": -2,
			"label_y": -2,
			"text_anchor": "end"
			
		},
		{
			"worker": "WK-7",
			"cov": 20,
			"ate": 18,
			"label_x": +2,
			"label_y": -1,
			"text_anchor": "start"
			
		},
		{
			"worker": "WK-8",
			"cov": 80,
			"ate": 20,
			"label_x": +2,
			"label_y": -2,
			"text_anchor": "start"
		
		},
		{
			"worker": "WK-9",
			"cov": 55,
			"ate": 39,
			"label_x": +2,
			"label_y": -1,
			"text_anchor": "start"
			
		},
		{
			"worker": "WK-10",
			"cov": 60,
			"ate": 43,
			"label_x": +2,
			"label_y": -1,
			"text_anchor": "start"
			
		},
		{
			"worker": "WK-11",
			"cov": 58,
			"ate": 46,
			"label_x": +2,
			"label_y": -1,
			"text_anchor": "start"
			
		},
		{
			"worker": "WK-12",
			"cov": 62,
			"ate": 52,
			"label_x": +2,
			"label_y": 0,
			"text_anchor": "start"
			
		},
		{
			"worker": "WK-13",
			"cov": 15,
			"ate": 80,
			"label_x": -2,
			"label_y": -1,
			"text_anchor": "end"
			
		},
		{
			"worker": "WK-14",
			"cov": 80,
			"ate": 85,
			"label_x": +2,
			"label_y": -2,
			"text_anchor": "start"
			
		},
		{
			"worker": "Wk-15",
			"cov": 63,
			"ate": 70,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end"
			
		},
		{
			"worker": "WK-16",
			"cov": 67,
			"ate": 64,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end"
			
		}
			] 
		
		function getRandomArrayElements(arr, count) {
			var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
			while (i-- > min) {
				index = Math.floor((i + 1) * Math.random());
				temp = shuffled[index];
				shuffled[index] = shuffled[i];
				shuffled[i] = temp;
			}
			return shuffled.slice(min);
		}
		
		
	  pubnub.publish({
					  channel: "workstation",
					  message: getRandomArrayElements(data, 8)
					  }
						);

						console.log("published...")

					},5000);
	
	  console.log("Subscribing..");
	
	
	// subscribe to channel of pubnub -- this is client side 
	 pubnub.subscribe({
        channels: ['workstation'] 
		 });
	
	pubnub.addListener({
        
        message: function(message) {
		quadrant_group.selectAll("circle").remove();
		quadrant_group.selectAll(".worker-label").remove();
		var data = message.message;
		quadrant_group.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", function(d) {
			return "circle item " + d.worker.toLowerCase().replace(/\s/g, "")
		})
		.attr("cx", function(d) {
			return xScale(d.cov);
		})
		.attr("cy", function(d) {
			return yScale(d.ate);
		})
		.attr("r", 4.5)
		.attr("opacity", 1)
		
		.on("mouseover", function(d) {
		   	d3.select(this).classed("circle-hover", true)
			d3.select("text." + this.__data__.worker.toLowerCase().replace(/\s/g, "")).classed("worker-label-hover", true)
		})
		.on("click", function() {
			$(".init-info").hide()
			$(".init-hidden").show()
			var self = this;
			d3.select(".circle-selected").classed("circle-selected", false)
			d3.select(".worker-label-selected").classed("worker-label-selected", false)
			d3.select(self).classed("circle-selected", true)
			d3.select("text." + this.__data__.worker.toLowerCase().replace(/\s/g, "")).classed("worker-label-selected", true)
			d3.select("#language").text(self.__data__.languageLong)
			d3.select("#product").text(self.__data__.product)
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
			d3.select("#strengths").html(function() {
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
				return "<ul>" + 
							self.__data__.cautions.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
		})
		.on("mouseout", function() {
			d3.select(this).classed("circle-hover", false)
			d3.select("text." + this.__data__.worker.toLowerCase().replace(/\s/g, "")).classed("worker-label-hover", false)
		})
		
		// creating the labels for the circles
		quadrant_group.selectAll(".worker-label")
		.data(data)
		.enter()
		.append("text")
		.attr("opacity", 1)
		.attr("class", function(d) {
			return "worker-label item " + d.worker.toLowerCase().replace(/\s/g, "")
		})
		.attr("x", function(d) {
			return xScale(d.cov + d.label_x);
		})
		.attr("y", function(d) {
			return yScale(d.ate + d.label_y);
		})
		.text(function(d) {
			return d.worker
		})
		.attr("text-anchor", function(d) {
			return d.text_anchor
		})
		.on("mouseover", function() {
			d3.select(this).classed("worker-label-hover", true)
			d3.select("circle." + this.__data__.worker.toLowerCase().replace(/\s/g, "")).classed("circle-hover", true)
		})
		.on("mouseout", function() {
			d3.select(this).classed("worker-label-hover", false)
			d3.select("circle." + this.__data__.worker.toLowerCase().replace(/\s/g, "")).classed("circle-hover", false)
		})
		.on("click", function() {
			$(".init-info").hide()
			$(".init-hidden").show()
			var self = this;
			d3.select(".circle-selected").classed("circle-selected", false)
			d3.select(".worker-label-selected").classed("worker-label-selected", false)
			d3.select(self).classed("worker-label-selected", true)
			d3.select("circle." + this.__data__.worker.toLowerCase().replace(/\s/g, "")).classed("circle-selected", true)
			d3.select("#language").text(self.__data__.languageLong)
			d3.select("#product").text(self.__data__.product)
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
			d3.select("#strengths").html(function() {
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
				return "<ul>" + 
							self.__data__.cautions.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
		})
	
		
			
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    });

	
});
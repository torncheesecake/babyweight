var weightConv = {
	button: document.getElementById('addButton'),
	childNameElement: document.getElementById('childName'),
	currentWeight: document.getElementById('weightInKg'),
	lbs: 453.592, // 1lbs to grams
	oz: 28.3495, // 1 oz to grams
	init: function event()
	{
		weightConv.button.addEventListener('click', weightConv.calculateValues);
	},
	getChildName: function getChildName()
	{
		return document.getElementById('childName').value;
	},
	lbsFloor: function lbsFloor()
	{
		return Math.floor(weightConv.lbsTrunc());
	},
	lbsTrunc: function lbsTrunc()
	{
		return Math.trunc(weightConv.kg2grams) / weightConv.lbs;
	},
	ouncesCalc: function ouncesCalc()
	{
		return weightConv.kg2grams - weightConv.lbsFloor() * weightConv.lbs;
	},
	ozFloored: function ozFloored()
	{
		return Math.floor(weightConv.ouncesCalc()) / weightConv.oz;
	},
	ozTrunc: function ozTrunc()
	{
		return Math.trunc(weightConv.ozFloored());
	},
	getTodaysDate: function getTodaysDate()
	{
		return new moment().format("YYYY-MM-DD");
	},
	finalWeight: function finalWeight()
	{
		return weightConv.lbsFloor() + "lbs " + weightConv.ozTrunc() + "ozs";
	},
	calculateValues: function calculateValues()
	{
		weightConv.currentWeight = weightConv.currentWeight.value;
		weightConv.kg2grams = weightConv.currentWeight * 1000; // current Weight to grams e.g 3.5kg to 3500g
		// Print out the process to the console
		var printOut = {
			"date": weightConv.getTodaysDate(),
			"child": weightConv.getChildName(),
			"weight": weightConv.finalWeight()
		};
		if (weightConv.currentWeight > 0)
		{
			var printDate = moment().format("dddd, MMMM Do, YYYY");
			document.getElementById("results").innerHTML =
				"Todays date is " + printDate + " <br /> " +
				printOut.child + " is: " +
				printOut.weight;
			weightConv.currentWeight.value = ""; //Clear the box afterwards
			console.log(printOut);
		}
		else
		{
			document.getElementById("error").innerHTML = "<span class='alert alert-danger'>" + 'Something went wrong! Did you input a value for weight?' + "</span>";
		}
		// send data to php
		$.ajax(
		{
			method: 'POST',
			url: 'http://localhost:5984/weights/',
			contentType: "application/json",
			data: JSON.stringify(printOut),
			dataType: 'json',
			success: function(data)
			{
				document.getElementById("error").innerHTML = "<span class='alert alert-success'>" + 'Date sent to the DB' + "</span>";
				console.log('Data sent to DB');
				setTimeout(function() {
					location.reload(); // remove success data
					document.getElementById('weightInKg').value = ""; // clear weights in Kg box after success
				}, 5000);
			},
			error: function(jqXHR, error, errorThrown)
			{
				document.getElementById("error").innerHTML = "<span class='alert alert-danger'>" + 'Data not sent: ' + errorThrown + " " + jqXHR.responseText + "</span>";
				console.log('Data not sent: ' + errorThrown + " " + jqXHR.responseText);
			}
		});
	}
};
weightConv.init();

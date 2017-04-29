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
			document.getElementById("pResults").innerHTML =
				"Todays date is " + printDate + " <br /> " +
				printOut.child + " is: " +
				printOut.weight;
			weightConv.currentWeight.value = ""; //Clear the box afterwards
			console.log(printOut);
		}
		else
		{
			var error = document.getElementById("pResults").innerHTML = "Did you mean to submit without a value?";
			return error;
		}
		// send data to php
		var jsonOutput = JSON.stringify(printOut);
		$.ajax(
		{
			method: 'POST',
			url: 'send.php',
			data: jsonOutput,
			success: function(data)
			{
				console.log(data);
			},
			error: function(jqXHR, error, errorThrown)
			{
				console.log('Data not sent! ' + errorThrown + " " + jqXHR.responseText);
			}
		});
	}
};
weightConv.init();

var weightConv = {

	button: document.getElementById('addButton'),
	childNameElement: document.getElementById('childName'),
	weightInput: document.getElementById('weightInput'),
	currentWeightInputBox: document.getElementById('weightInKg'),
	dateInput: document.getElementById('dateSelect'),
	lbs: 453.592, // 1lbs to grams
	oz: 28.3495, // 1 oz to grams
	init: function event()
	{
		weightConv.button.addEventListener('click', weightConv.calculateValues);
	},
	calculateValues: function calculateValues()
	{
		weightConv.currentWeight = weightConv.currentWeightInputBox.value;
		weightConv.kg2grams = weightConv.currentWeight * 1000; // current Weight to grams e.g 3.5kg to 3500g
		// Print out the process to the console
		var printOut = {
			date: weightConv.getTodaysDate(),
			child: weightConv.getChildName(),
			result: weightConv.lbsFloor() + "lbs " + weightConv.ozTrunc() + "ozs"
		};
		if (weightConv.currentWeight > 0)
		{
			console.log(printOut);
			document.getElementById("pResults").innerHTML = "Todays date is " + printOut.date + " " + printOut.child + " is: " + printOut.result;
			weightConv.currentWeightInputBox.value = ""; //Clear the box afterwards
		}
		// convert to JSON for moving to DB
		var store = window.JSON.stringify(printOut);
		console.log(store);
		//
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
		return new Date().toLocaleDateString('en-GB');
	}
};

weightConv.init();

var weightConv = {

	button: document.getElementById('addButton'),
	childNameElement: document.getElementById('childName'),
	weightInput: document.getElementById('weightInput'),
	currentWeightInputBox: document.getElementById('weightInKg'),
	init: function event()
	{
		weightConv.button.addEventListener('click', weightConv.calculateValues);
	},

	lbs: 453.592, // 1lbs to grams
	oz: 28.3495, // 1 oz to grams
	currentWeight: 0, // will be a user input with add button
	kg2grams: 0, // current Weight to grams e.g 3.5kg to 3500g

	calculateValues: function calculateValues()
	{
		weightConv.currentWeight = weightConv.currentWeightInputBox.value; // will be a user input with add button
		weightConv.kg2grams = weightConv.currentWeight * 1000; // current Weight to grams e.g 3.5kg to 3500g

		// Print out the process to the console
		var printOut = {
			weightinkg: "Weight in kg: " + weightConv.currentWeight + "kg",
			weightingrams: "Weight in Grams: " + weightConv.kg2grams + "g",
			weightinlbs: "Weight in lbs: " + weightConv.lbsTrunc(),
			lbstruncate: "Lbs Truncate: " + weightConv.lbsFloor(),
			ounces: "Ounces: " + weightConv.ozFloored(),
			oztruncate: "Oz Truncate: " + weightConv.ozTrunc(),
			child: weightConv.getChildName() + " is: ",
			result: weightConv.lbsFloor() + "lbs " + weightConv.ozTrunc() + "ozs"
		};

		if (weightConv.currentWeight > 0)
		{
			console.log(printOut);
			document.getElementById("pResults").innerHTML = printOut.child + printOut.result;
			weightConv.currentWeightInputBox.value = ""; //Clear the box afterwards
		}
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
	}

};

weightConv.init();

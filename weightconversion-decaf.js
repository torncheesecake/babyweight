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
    return new moment().format("DD-MM-YYYY");
  },
  clearReload: function clearReload()
  {
    location.reload(); // reload the page
    document.getElementById('weightInKg').value = ""; // clear any inputs
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
    if(weightConv.currentWeight <= 0 || isNaN(weightConv.currentWeight))
    {
      console.log("Was less than or equal to zero or return NaN");
      document.getElementById("error").innerHTML = "<span class='alert alert-info'>" + "Cannot be blank or zero, please input a value." + "</span>";
      setTimeout(function()
      {
        weightConv.clearReload();
      }, 4000);
      return false;
    }
    else
    {
      var printDate = moment().format("dddd, MMMM Do, YYYY");
      document.getElementById("results").innerHTML = "Todays date is " + printDate + " <br /> " + printOut.child + " is: " + printOut.weight;
      console.log(printOut);
    }
    // send data to DB
    var db = new PouchDB('http://localhost:5984/weights');
    var weight = {
      "_id": new moment().format("DDMMYYYY") + weightConv.getChildName(),
      "name": weightConv.getChildName(),
      "weight": weightConv.finalWeight(),
      "date": weightConv.getTodaysDate()
    };
    db.put(weight, function callback(err, result)
    {
      if(!err)
      {
        document.getElementById("error").innerHTML = "<span class='alert alert-success'>" + 'Data sent to the DB' + "</span>";
        console.log('Data sent to DB');
        setTimeout(function()
        {
          weightConv.clearReload();
        }, 8000);
      }
      else
      {
        document.getElementById("error").innerHTML = "<span class='alert alert-danger'>" + 'Data not sent: ' + errorThrown + " " + jqXHR.responseText + "</span>";
        setTimeout(function()
        {
          weightConv.clearReload();
        }, 12000);
      }
    });
  }
};
weightConv.init();
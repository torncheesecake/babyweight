// Generated by CoffeeScript 1.12.5
(function() {
  var weightConv;

  weightConv = {
    button: document.getElementById('addButton'),
    childNameInput: document.getElementById('childName'),
    currentWeight: document.getElementById('weightInKg'),
    anti: document.getElementById('antiRobot'),
    lbs: 453.592,
    oz: 28.3495,
    antiRobot: function() {
      return document.getElementById('antiRobot').value;
    },
    init: function() {
      weightConv.button.addEventListener('click', weightConv.calculateValues);
    },
    getChildName: function() {
      return document.getElementById('childName').value;
    },
    lbsFloor: function() {
      return Math.floor(weightConv.lbsTrunc());
    },
    lbsTrunc: function() {
      return Math.trunc(weightConv.kg2grams) / weightConv.lbs;
    },
    ouncesCalc: function() {
      return weightConv.kg2grams - (weightConv.lbsFloor() * weightConv.lbs);
    },
    ozFloored: function() {
      return Math.floor(weightConv.ouncesCalc()) / weightConv.oz;
    },
    ozTrunc: function() {
      return Math.trunc(weightConv.ozFloored());
    },
    getTodaysDate: function() {
      return moment().format('YYYY-MM-DD');
    },
    finalWeight: function() {
      return weightConv.lbsFloor() + 'lbs ' + weightConv.ozTrunc() + 'ozs';
    },
    calculateValues: function() {
      var jsonOutput, printDate, printOut;
      weightConv.currentWeight = weightConv.currentWeight.value;
      weightConv.kg2grams = weightConv.currentWeight * 1000;
      printOut = {
        date: weightConv.getTodaysDate(),
        child: weightConv.getChildName(),
        weight: weightConv.finalWeight()
      };
      printDate = moment().format('dddd, MMMM Do, YYYY');
      if ((weightConv.currentWeight != null) && weightConv.currentWeight <= 0 && weightConv.antiRobot !== "Surname") {
        document.getElementById('error').innerHTML = "Please input Values";
        return false;
      } else {
        document.getElementById("pResults").innerHTML = "Todays date is " + printDate + " <br /> " + printOut.child + " is: " + printOut.weight;
        weightConv.currentWeight.value = "";
        console.log(printOut);
      }
      jsonOutput = JSON.stringify(printOut);
      return $.ajax({
        method: 'POST',
        url: 'send.php',
        data: jsonOutput,
        success: function(data) {
          return console.log(data);
        },
        error: function(jqXHR, error, errorThrown) {
          return console.log('Data not sent! ' + errorThrown + ' ' + jqXHR.responseText);
        }
      });
    }
  };

  weightConv.init();

}).call(this);

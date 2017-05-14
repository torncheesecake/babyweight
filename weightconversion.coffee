weightConv =
  button: document.getElementById('addButton')
  childNameInput: document.getElementById('childName')
  currentWeight: document.getElementById('weightInKg')
  lbs: 453.592
  oz: 28.3495

  init: ->
    weightConv.button.addEventListener 'click', weightConv.calculateValues
    return
  getChildName: ->
    document.getElementById('childName').value
  lbsFloor: ->
    Math.floor weightConv.lbsTrunc()
  lbsTrunc: ->
    Math.trunc(weightConv.kg2grams) / weightConv.lbs
  ouncesCalc: ->
    weightConv.kg2grams - (weightConv.lbsFloor() * weightConv.lbs)
  ozFloored: ->
    Math.floor(weightConv.ouncesCalc()) / weightConv.oz
  ozTrunc: ->
    Math.trunc weightConv.ozFloored()
  getTodaysDate: ->
    (new moment).format 'YYYY-MM-DD'
  finalWeight: ->
    weightConv.lbsFloor() + 'lbs ' + weightConv.ozTrunc() + 'ozs'
  calculateValues: ->
    weightConv.currentWeight = weightConv.currentWeight.value
    weightConv.kg2grams = weightConv.currentWeight * 1000

    printOut =
      date: weightConv.getTodaysDate()
      child: weightConv.getChildName()
      weight: weightConv.finalWeight()

    if weightConv.currentWeight > 0
      printDate = moment().format('dddd, MMMM Do, YYYY')
      document.getElementById('pResults').innerHTML = 'Todays date is ' + printDate + ' <br /> ' + printOut.child + ' is: ' + printOut.weight
      weightConv.currentWeight.value = ''
      #Clear the box afterwards
      console.log printOut
    else
      error = document.getElementById('pResults').innerHTML = 'Did you mean to submit without a value?'

    jsonOutput = JSON.stringify(printOut)
    $.ajax
      method: 'POST'
      url: 'send.php'
      data: jsonOutput
      success: (data) ->
        console.log data
      error: (jqXHR, error, errorThrown) ->
        console.log 'Data not sent! ' + errorThrown + ' ' + jqXHR.responseText
weightConv.init()

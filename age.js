// Generated by CoffeeScript 1.12.5
(function() {
  var getAge;

  getAge = function(dateString) {
    var age, ageString, dateAge, dateDob, dateNow, dayString, dob, monthAge, monthDob, monthNow, monthString, now, today, yearAge, yearDob, yearNow, yearString;
    now = new Date;
    today = new Date(now.getYear(), now.getMonth(), now.getDate());
    yearNow = now.getYear();
    monthNow = now.getMonth();
    dateNow = now.getDate();
    dob = new Date(dateString.substring(6, 10), dateString.substring(0, 2) - 1, dateString.substring(3, 5));
    yearDob = dob.getYear();
    monthDob = dob.getMonth();
    dateDob = dob.getDate();
    age = {};
    yearAge = yearNow - yearDob;
    if (monthNow >= monthDob) {
      monthAge = monthNow - monthDob;
    } else {
      yearAge--;
      monthAge = 12 + monthNow - monthDob;
    }
    if (dateNow >= dateDob) {
      dateAge = dateNow - dateDob;
    } else {
      monthAge--;
      dateAge = 31 + dateNow - dateDob;
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
    };
    if (age.years > 1) {
      yearString = ' years';
    } else {
      yearString = ' year';
    }
    if (age.months > 1) {
      monthString = ' months';
    } else {
      monthString = ' month';
    }
    if (age.days > 1) {
      dayString = ' days';
    } else {
      dayString = ' day';
    }
    if (age.years > 0 && age.months > 0 && age.days > 0) {
      ageString = age.years + yearString + ', ' + age.months + monthString + ', and ' + age.days + dayString + ' old.';
    } else if (age.years === 0 && age.months === 0 && age.days > 0) {
      ageString = 'Only ' + age.days + dayString + ' old!';
    } else if (age.years > 0 && age.months === 0 && age.days === 0) {
      ageString = age.years + yearString + ' old. Happy Birthday!!';
    } else if (age.years > 0 && age.months > 0 && age.days === 0) {
      ageString = age.years + yearString + ' and ' + age.months + monthString + ' old.';
    } else if (age.years === 0 && age.months > 0 && age.days > 0) {
      ageString = age.months + monthString + ' and ' + age.days + dayString + ' old.';
    } else if (age.years > 0 && age.months === 0 && age.days > 0) {
      ageString = age.years + yearString + ' and ' + age.days + dayString + ' old.';
    } else if (age.years === 0 && age.months > 0 && age.days === 0) {
      ageString = age.months + monthString + ' old.';
    } else {
      ageString = 'Something went wrong';
    }
    return ageString;
  };

  document.getElementById('age').innerHTML = getAge('10/10/2016');

}).call(this);

var reservations = {
  'BOB': { claimed: false },
  'TED': { claimed: true },
  'ROI': {  }
}

//var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  var name = document.getElementById("name").value;
  name = name.toUpperCase();

  if(reservations[name]){
    // If the reservation exists and is unclaimed, welcome the user (use alert).
    if(!reservations[name].claimed){
      alert("welcome " + name + "!");
    }    
    // If the reservation exists and is already claimed, inform the user about the situation (use alert).
    else{
      alert("already claimed");
    }
  }
  // If there is no reservation, tell the user there is nothing under their name (user alert).
  else{
    //alert("There is nothing under name - " + name);
    reservations[name] = {claimed: true};
    alert("new res for " + name);
  }

  console.log(reservations);
  
  // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  for (var key in reservations) {
    var row = table.insertRow();
    for (var k in reservations[key]) {
      var cell1 = row.insertCell();
      cell1.innerHTML = key + " " + k + " " + reservations[key][k];
    }
  }
}

//claimReservation();
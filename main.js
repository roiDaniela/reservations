var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true },
  'Roi': {  }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  
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
    alert("There is nothing under name - " + name);
  }
}

claimReservation();
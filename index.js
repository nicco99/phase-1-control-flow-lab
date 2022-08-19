function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride<= 400) {
    return "This one is on me!"
  } else if (ride<2500) {
    return 'I will gladly take your thirty bucks.'
  } else if(ride>2500) {
    return "No can do."
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  let  message = (city==="NYC")?"Ok, sounds good.":'No go.';
  //  message = (city!="NYC")?'No go.':"Ok, sounds good.";

  return message;
}
console.log(ternaryCheckCity("NYCuh"))


let tip = "generous";

function switchOnCharmFromTip(tip){
  // Write your code here!
 
  switch(tip) {
  case "generous" :
    return "Thank you so much."
  case "not as generous" :
    return "Thank you."  
   default :
    return "Bye." 
  }
}
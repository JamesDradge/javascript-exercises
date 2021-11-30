const ftoc = function(tempf) {

// [°C] = ([°F] − 32) × 5⁄9

let celsius = (tempf -32) * (5/9);
celsius = Math.round(celsius * 10) /10;
return celsius; 

};

const ctof = function(tempc) {

//  [°F] = [°C] × 9⁄5 + 32

let fahrenheit = tempc * (9/5) + 32;
fahrenheit = Math.round(fahrenheit * 10) /10;
return fahrenheit; 

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

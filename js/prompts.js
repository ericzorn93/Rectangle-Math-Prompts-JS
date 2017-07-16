var width = prompt("What is the width?");

var length = prompt("What is the length?");

var perimeter = width*2 + length*2;

var area = length * width;

alert("Area " + area);

alert("Perimeter " + perimeter);

//Area
document.write("<h2>This is the area of the rectangle: </h2>") + document.write(area);

//Perimeter
document.write("<h2>This is the perimeter of the rectangle: </h2>") + document.write(perimeter);


console.log('This is the Area and Perimeter Prompt Assignment');

console.log('Area: ' + area);

console.log('Permiter: ' + perimeter);

document.getElementById('area').innerHTML = 'Area: ' + area;
document.getElementById('perimeter').innerHTML = 'Perimeter ' +  perimeter;
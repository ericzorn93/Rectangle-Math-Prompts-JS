function getarea() {

    var wid = document.getElementById('wid').value;

    var hgt = document.getElementById('hgt').value;

    var area = hgt * wid;

    var perim = wid * 2 + hgt * 2;

    document.getElementById('area').innerHTML = area;

    document.getElementById('perim').innerHTML = perim;

    //Console Logs
    console.log("Area: " + area);
    console.log("Perimeter " + perim);
}

console.log("This is the Forms version that calculates the area and the perimeter!");
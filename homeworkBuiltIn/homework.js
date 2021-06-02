// Global JavaScript Objects

//Math random

function array () {
    var arr = [];
    for (var i = 0; i < 10; i++){
       var newArr = 49 * Math.random() + 1;
       arr[i] = newArr
    }
    
    return arr;
}

var printArr = array();
console.log(printArr);

// Math round

function arrayRound (arrNum) {
    var newArr = [];
    for (var i = 0; i < 10; i++){
       var arrRound = Math.round(arrNum[i]).toFixed(2);
       newArr[i] = arrRound;
    }
    
    return newArr;
}

var round = arrayRound(printArr);
console.log(round);


// Math floor

function arrFloor (arrNumFloor) {
    var newArr = [];
    for (var i = 0; i < 10; i++){
        var arrFloorNum = Math.floor(arrNumFloor[i]);
        newArr[i] = arrFloorNum;
     }
     return newArr;
}

var numFloor = arrFloor(printArr);
console.log(numFloor);

// Math max

function maxNum() {
    var findMax = Math.max(1, 7, 18, 25, 3, -8);

    return findMax;
}

var newArrMax = maxNum();
console.log(newArrMax);

//Date

function findDate() {
    var date = new Date();
    console.log(date);
    
    var time = date.getHours() + ":" + date.getMinutes();
    console.log(time);

    var dateToday = date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + ".";
    console.log(dateToday);
}

findDate();
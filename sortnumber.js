
let numbers=[42,6,82,44,71,16,94,120,35,22];
document.getElementById("displaynum").innerHTML=numbers;
numbers.sort(function (a,b){return b-a});
document.getElementById("result").innerHTML=numbers;
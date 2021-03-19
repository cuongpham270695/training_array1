let numbers = [1,3,5,7,8,13,16,18,20,25];
let V = parseInt(prompt("Choose your number:", ));
for (let i=0;i<numbers.length;i++){
    if (numbers.indexOf(V) > -1){
        document.getElementById("display").innerHTML= "V is in an array";
    } else {
        document.getElementById("display").innerHTML= "V is not in an array!";
    }
}

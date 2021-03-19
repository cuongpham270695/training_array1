let numbers=[3,7,8,12,15,6,4,9,14,10];
let V=parseInt(prompt("Enter your number:"));
if(numbers.indexOf(V)>-1){
    numbers.splice(numbers.indexOf(V),1);
}document.write(numbers);
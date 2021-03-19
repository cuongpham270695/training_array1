let numbers=[5,2,15,9,8,17,26,3,12,7];
let max_number=numbers[0];
let index=0;
for (let i=1;i<numbers.length;i++){
    if(numbers[i]>max_number){
        max_number=numbers[i];
        index=i;
    }
} document.write("Max number is " +max_number +" at the "+index + "th position!");
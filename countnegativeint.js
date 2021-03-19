let numbers=[5,-7,9,-3,-11,-2,6,-4];
count=0;
for (let i=0;i<numbers.length;i++){
   if (numbers[i]<0){
       count++;
   }
}document.write("Số phần tử nguyên âm có trong mảng là:"+count);
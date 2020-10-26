var number = [1, 5, 4, 13, 1, 542, 7, 555];
//초기화
var i = 0; 
var sum = 0;
var length = number.length;

while (i < length) {
    sum = sum + number[i];
    
    i++; //array는 0부터시작. 
}
console.log(`Sum : ${sum}`);
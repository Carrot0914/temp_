var number = [1, 5, 4, 13, 1, 542, 7, 555];
//�ʱ�ȭ
var i = 0; 
var sum = 0;
var length = number.length;

while (i < length) {
    sum = sum + number[i];
    
    i++; //array�� 0���ͽ���. 
}
console.log(`Sum : ${sum}`);
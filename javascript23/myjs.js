for(var i = 1; i <= 100; i++){
    document.write("媳妇我错了");
} 
//for(初始化变量;条件表达式;操作表达式){
//    
//}

for(var i = 1; i <=100; i++){
    document.write("こんにちは");
}

for(var i = 1; i < 10; i++){
    document.write("あなたは今年"+ i + "歳です");
}
var sum = 0;
for(var i = 1; i <= 100; i++){
    sum = sum + i; 
}
document.write(sum);

for(var i = 1; i <= 5; i++){
    if( i == 3){
        continue;
    }
    console.log("我正在吃第" + i + "个包子");
}

for(i = 1; i <= 10; i++){
    if(i == 5) continue;
    document.write(i + "\n");
}

var sum2 = 0;
for(i = 1; i <= 100; i++){
    if(i % 7 == 0){
        continue;
    }
    sum2 = sum2 + i;
}
document.write(sum2);

for(i = 1; i <= 5; i++){
    if(i == 3) break;
    document.write("你正在吃第" + i + "包子");
}

var ito = [1,2,3,4,5,6];
var arr = new Array();//通过new关键字来创建一个数组

var arr1 = [1,2,3,"pink老师",true];
var arr2 = [123,"零基础学javascript",true];
document.write(arr2);
console.log(arr2);
document.write(arr2[0]);
document.write(arr2[1]);

var arr3 = ["迪丽热巴", "古力娜扎", "佟丽娅"];
for(i = 0; i < arr3.length; i++){
    console.log(arr3[i]);
    document.write(arr3[i]);
}








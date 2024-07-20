// Demo-12 js part

//Variables
// var a = 10;
// var a =20;
// a=30;
// console.log(a);

// {
//     var a=40;
// }
// console.log(a);

// Primitive Data Types

// String
// type of
// var str="Hello"
// console.log(typeof(str));

// Number
// var num=12;
// console.log((typeof num));

// Boolean
// var Bool=true;
// console.log(typeof Bool);

//Undefined 
// var a;
// console.log(typeof a);

// Null
// var nul=null
// console.log(typeof nul);

// Non Primitive Data Types

// var userData = {
//     name: "Demo_1",
//     age: 22,
//     address: "qwerty"
// }
// console.log("Name:-" + userData.name + "\n" + "Age:-" + userData.age + "\n" + "Address:-" + userData.address);

// document.write("Name:-" + userData.name + "<br>" + "Age:-" + userData.age + "<br>" + "Address:-" + userData.address)

//Array

// var arr = [1,2,null,4,undefined,6,true,{name:"Demo_2"},9];
// console.log(arr);

// var arr = [1,2,3,4,[1,2,[1,2,3,4,userData],4,5],6,7,8,9];
// console.log(arr[4][2][4].name);

// var arr = [1,2,3,4,[1,2,[1,2,3,4,5],4,5],6,7,8,9];
// var userData = {
//     name: "Demo_1",
//     age: 22,
//     address: "qwerty",
//     arr: arr
// }
// console.log(userData.arr[4]);

// Demo-13 js part

// JavaScript Operator

// var data = 10;
// console.log(data++);
// console.log(data);

// var val_1 =10;
// var val_2 ="10";
// var result = val_1==val_2;
// console.log(result);

// var val_1 =10;
// var val_2 ="10";
// var result = val_1===val_2;
// console.log(result);

// var val_1 =100;
// var val_2 ="10";
// var result = val_1!==val_2;
// console.log(result);

// var val_1 =30;
// var val_2 =20;
// var result = val_1<=val_2;
// console.log(result);

// console.log(10<=20 && 10==30);
// console.log(10<=20 || 10==30);

// var result=10;
// console.log(result+=1);
// console.log(result);

// Conditional statement 

// if(10==20){
//     console.log("Your Value Is ture");
// }
// else{
//     console.log("Your Value is false");
// }

// var age =prompt("Enter Your Age")
// if (age >= 18 && age <=55) {
//     var _10th = prompt("Your 10th status(pass or fail)")
//     if (_10th == "pass" || _10th=="PASS") {
//         console.log("You can apply");
//     }else if (_10th=="fail" || _10th=="FAIL"){
//         console.log("You Have to complete your 10th")
//     }
//     else{
//         console.log("Enter Valid Data");
//     }
// }else if(age>55){
//     console.log("You are too older you can't apply");
// } 
// else {
//     console.log("Enter Valid Data");
// }

// var P1 = Number(prompt("Enter P1 data"));
// var P2 = Number(prompt("Enter P2 data"));

// var result= P1+P2;
// console.log(result);

//user = prompt("Enter Your Marks");
//100 to 90 A Grade
//90 to 70 B Grade
//70 to 50 C Grade
//50 to 33 D Grade
//33 to 0 Fail

//JavaScript Function

// function func(){
//     console.log(10+20);
// }
// func()

// function func(a,b=0){
//     console.log(a+b);
// }
// func(10,20)
// func(20)

// function func(a,b,c){

// }
// func(10,20,"+");
// func(10,20,"-");
// func(10,20,"*");
// func(10,20,"/");
// func(10,20,"%");

// function calculator(a, b, c) {
//     switch (c) {
//         case "+": console.log("Add", a + b);
//             break; 
//         case "-": console.log("Subtract", a - b);
//             break; 
//         case "*": console.log("Multiply", a * b);
//             break;
//         case "/": console.log("Divison", a / b);
//             break; 
//         case "%": console.log("Modulo", a % b);
//             break;

//     }
// }
// calculator(12, 34, "-")

// Demo-14 js part

// var numberData = 5;
// switch (numberData) {
//     case 1: console.log("Value is 1");
//         break;
//     case 2: console.log("Value is 2");
//         break;
//     case 3: console.log("Value is 3");
//         break;
//     case 4: console.log("Value is 4");
//         break;
//     case 4: console.log("Value is 4");
//         break;
//     case 5: console.log("Value is 5");
//         break;
// }

// function calculator(a, b, c) {
//     switch (c) {
//         case "+": console.log("Add", a + b);
//             break; 
//         case "-": console.log("Subtract", a - b);
//             break; 
//         case "*": console.log("Multiply", a * b);
//             break;
//         case "/": console.log("Divison", a / b);
//             break; 
//         case "%": console.log("Modulo", a % b);
//             break;

//     }
// }
// calculator(12, 34, "-")

// var arr = [1,2,"Hello",4,5];
//arr.length
// console.log(arr.length);

// for(var i=0; i<arr.length; i++){
//     var result=arr[i];
//     console.log(arr[i]);
//     document.write("<li>"+result+"</li>")
// }

// var arr = [1,2,3,4,5];
// //arr.toString
// var result = arr.toString()
// console.log( typeof (arr));
// console.log("Result:"+ typeof result);

//arr.at()
// var arr = [1, 2, 3, 4, 5];
// var result = arr.at(2)
// console.log(result);

// array.join()
// var arr = [1, 2, 3, 4, 5];
// var result =arr.join("}{");
// console.log(result);

//Array.pop()&push()
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.pop();

// arr.push("Hello")
// console.log(arr);

//array.shift() and unshift()
// var arr = [1, 2, 3, 4, 5];
// var arr_2=[6,7,8,9];
//  console.log(arr);
//  arr.shift();
//  console.log(arr);

// arr.push(arr_2);
// var finalarray=arr.flat();
// console.log(arr);
// console.log(finalarray);

//Array delete()
// var arr = [1, 2, 3, 4, 5];
// var arr_2 = [6, 7, 8, 9];

// delete arr[2];
// arr[3] = 30;
// arr[5] = 60;
// console.log(arr);

//array.concat()
// var arr = [1, 2, 3, 4, 5];
// var arr_2 = [6, 7, 8, 9];
// var result= arr.concat(arr_2,[1,2,3,4,5]);
// console.log(result); 

//Array.slice()
// var arr = [1, 2, 3, 4, 5];
// var arr_2 = [6, 7, 8, 9];
// var result=arr.slice(0,2);
// console.log(arr);
// console.log(result);

//array.splice()
// var arr = [1, 2, 3, 4, 5];
// var arr_2 = [6, 7, 8, 9];
// console.log(arr);
// arr.splice(0,3,"Hello");
// console.log(arr);

// function func(){
//     console.log("Hello...");
// }

//task - var str ="HEllo I am from Bariny Beam "
// to count how many vowels are in this string and who are they?

// Demo-15 js part

// arrow function with implicit return
// var c=()=>12
// console.log(c());

// fat arrow function with a parameter
// var b= (parm)=>{}
// b(12);

// template literals ' "" `baktick`
// console.log("hey " + 2 + 2 +" IS 4");
// console.log(`hey ${2+3}`);

//default parameter- jb aaap value na de function pram ko to wo defalut value lega yani 0
// function abcd(prm=0){
//     console.log(prm);
// }
// abcd(12);
// abcd(122);
// abcd();

// rest/spred: ... jo ki alag alg work karte h diffrent context mai
// spread use hota h copy yaa fir us location par kisia aur ki values ko spread(bekherna) krne ke liye
// rest use hota hai jab aapko bache hue values ko ek variable mai dalne ho
//rest
// function abcd(a,b,c,...d){
//     console.log(a,b,c, d);
// }
// abcd(1,2,3,4,5,6,7,8)
// // spread
// var a=[1,2,3,4,5,6,7,8];
// var  b=[...a];

// destructring- array and object se data bahar nikalna
// var a =[1,2,3,];
// var [b,c,d,e]=a;
// console.log(a)

// var obj={name:"sadab", age:18};
// var {age}=obj;

// classes= to make object from a particular blueprint

// Promises= to tske care of async part, Promise is also constructor function
// var ans = new Promise((res, rej) => {
//     if (true) {
//         return res();
//     }
//     else {
//         return rej();
//     }
// })
// ans
//     .then(function () {
//         console.log("resolve Ho Gya h");
//     })
//     .catch(function() {
//         console.log("Rejcet ho gya");
//     })

// // user will ask for a number between 0 se 9 and if the number is below 5 resolve if not then reject
// var ans= new Promise((res, rej)=>{
//     var n=Math.floor(Math.random()*10);
//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })
// ans.then(function(){
//     console.log("Below");
// })
// .catch(function(){
//     console.log("Above")
// })

// // sbse pahle ghar par aao
// // gate  kholo gate lagao
// // khana pakao khana kaho
// // mobile chalao
// // so jao kyui tm thak chuke ho
// var ans=new Promise((res,rej)=>{
//     return res("sbse pahle ghar par aao");
// })
// var p2=ans.then(function(data){
//     console.log(data)
//     return new Promise(function(res, rej){
//         return res("gate  kholo gate lagao")
//     })
// })
// var p3=p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("khana pakao khana kaho")
//     })
// })
// var p4=p3.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("mobile chalao");
//     })
// })
// var p5=p4.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("so jao kyui tm thak chuke ho");
//     })
// })
// p5.then(function(data){
//     console.log(data)
// })

// async await=koi bhi aaisa function jismai aao async code likhoge, kyukiki aysc code hai to aap Promise ka isstemaal kar skte hai, jb uska ans aayega aapko then lagana padega, us then ko lagane se bachne ke liye,aap async await ka istemaal kar skte ho

// function  abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }
// abcd();

// async function abcd(){
//     let raw=await fetch(`https://randomuser.me/api/`);
//     let ans=await raw.json();
//     console.log(ans)
// }
// // 5 use cases ekdum real world waale
// // node mai db
// // fecth
// // settimeout
// // setinterval

//try catch=to take care of code when its get a rest
// console.log("hey")
// try{
//     console.log(hey)
// }
// catch(err){
//     console.log(err);
// }
// console.log("hey")
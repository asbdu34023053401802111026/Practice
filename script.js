// // document.getElementById("sample").innerHTML = " <h3>heiiijij</h3>"
// // const button = document.getElementById("s1");
// // const  message = document.getElementById("s");

// // button.addEventListener("click",function() {
// //     message.textContent=" javascript is working ";
// // })
   
// // const heading=document.getElementById("g");
// // heading.textContent= "haritech";
// // let mark=8;
// // let b=8;
// // let c=7;
// // console.log(a
// // +b
// // );
// // console.log(a*b);
// // if(mark>b){
// //     console.log("crt");
    

// // }
// // else if(mark>b){
// //     console.log("not crt");
    
// // }else if(mark>c){
// //     console.log("hhbejyg");
    

// // }
// // else{
// //     console.log("kks");
    
// // }

// // let a=["haritech","harish","kumar",10];
// // // console.log(a[0]);
// // // console.log(a[1]);
// // // console.log(a[2]);
// // // console.log(a[3]);
// // console.log(a.slice(2, 4));
// // // console.log(a.add("haran")
// // // );
// // console.log(a);
// // console.log(a.pop());
// // console.log(a); 
// // a.push("haran");
// // console.log(a);

// let s_d={
//     name:"haritech",
//     age:10,
//     address:"chennai",
//     email:"haritech@example.com"
// };
// s_d.name="haran";
// s_d.native="chennai";
// s_d.age=20;
// console.log(s_d);
// console.log(s_d.email+" \n "+s_d.name+" "+s_d.age+" "+s_d.address);


// let b=[
//     {
//         name:"haran",
//         age:20,
//         address:"chennai",
//         email:"haran@example.com"
//     }
//     ,{
//         name:"harish",
//         age:30,
//         address:"chennai",
//         email:"harish@example.com"
//     }
//     ,{
//         name:"kumar",
//         age:40,
//         address:"chennai",
//         email:" hari@220027"
//     },"yahith",23,["haran","harish","kumar"]
// ];
// console.log(b);
// console.log(s_d);
// console.log(b[2].email+""+b[0]);


// 
// let a=[
//     10,"hari","yahith"
// ];
// console.log(a);
// console.log(a.push("haran"));
// console.log(a);
// let b={
//     name:"hari",
//     age:20,
//     address:"chennai",
//     email:"haran@example.com"
// }
// console.log(b);
// b.native="chennai";
// console.log(b);


// let s=[
//     {
//         name:"haran",age:20
//     },
//     {
//         name:"harish",age:30
//     },{
//         name:"kumar",age:40
//     }
// ];

// for(let i=0;i<s.length;i++){
//     console.log(s[i].name+" "+s[i].age);
// }


// console.log("======================Student passed list======================");


// let s=[

//     {
//         name:"haran",
//         marks:100
//     },
//     {
//         name:"harish",marks:91   
//     },
//     {
//         name:"kumar",marks:40
//     }
// ];

// for(let i=0;i<s.length;i++){
//     if(s[i].marks>=100){
//         console.log("A+");

//     }else if(s[i].marks>90){
//         console.log("B+");
//     }else if(s[i].marks>80){
//         console.log("C+");
//     }else if(s[i].marks<60){
//         console.log("Fail");
//     }
// }

// console.log("======================Total and Average======================");
// let a=[100,80,60,80];
// let t=0;
// for(let i=0;i<a.length;i++){
//     t=t+a[i];
// }let avg=t/a.length;
// console.log(t); 
// console.log(avg);

// console.log("======================Highest mark======================");
// let b=[{
//     name:"haran",
//     marks:100
// },{
//     name:"harish",
//     marks:90
// },{
//     name:"kumar",
//     marks:80
// }];
// for(let i=0;i<b.length;i++){
//     if(b[i].marks>=100){
//         console.log("Highst mark is "+b[i].name);
//     }else{
//         console.log("conguratulations "+b[i].name+"   you have passed");
//     }

// }

// console.log("======================Total price======================");
// let g=[{
// product:"mobile",
// price:10000
// },{
//     product:"laptop",
//     price:50000
// },{
//     product:"tv",
//     price:30000     
// }
// ,{
//     product:"gold winner",
//     price:100
// }
// ];
// let t1=0;
// for(let i=0;i<g.length-1;i++){
// t1=t1+g[i].price;
// }
// console.log( "Total price: "+t1);

// console.log("======================Search student======================");

// const readline=require("readline");
// const w=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// }); 
// let students=[{
//     name:"haran",
//     marks:100}
// ,
// {
//     name:"harish",
//     marks:90        

// },{
//         name:"yahiya",
//         marks:80    
// },{
//     name:"ram",
//     marks:70
// }


// ];
// w.question("enter the name of student:",function(name){
// let found=false;
 
// for(let i=0;i<students.length;i++){
//     if(students[i].name===name){
// console.log("stutent : "+students[i].name+" Mark is "+students[i].marks);
// found=true;
// break;

// }}
// if(found===false){
//     console.log("student not found");   
//     w.close();
// }});


// const u={
//     name:"haran",
//     age:20,
//     address:"chennai",
// }
// for(const key in u){
//     console.log(key);
//     console.log(u[key]);
// }

// const c=["red","green","blue"];
// for (const value of c){
//     console.log(value);
//     // console.log(c[value]);
// }


// let s={
//     name:"haran",
//     age:20,
//     course:"javascript",
//     marks:100
// }
// for(let key in s){
//     console.log(key);
//     console.log(s[key]);
// }
// console.log("======================Product======================");
// let p={
//     p_n:"mobile",
//     p_price:10000,
// }
// for(const key in p){
//     console.log(key+" = "+p[key]);
//     console.log(p[key]);
// }





let fruits=["apple","banana","orange"];
let index=0;
while(index<fruits.length){ 
    console.log(fruits[index]);
    index++;
}
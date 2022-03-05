// // printing in js
// console.log("Hello World");
// console.log("kya hal hai bhai");

// variable in javascript
// let str='saba akram';
// console.log(str);

// for(let i=10;i>=0;i--)
// {
//     console.log(i);
// }
// let count=1;
// while(count<=10)
// {
//     console.log(count);
//     count++;
// }
let a=89;
let flag=0;
for(let i=2;i*i<=a;i++)
{
    if(a%i==0)
    {
        flag=1;
    }
}
if(flag==0){
    console.log('prime');
}
else
{
    console.log('not prime');
}

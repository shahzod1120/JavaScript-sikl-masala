'use strict'

// ************** 2-dars for() ***************

// M-1
// let k = +prompt('k = ')
// let n = +prompt('n = ')
// for (let i = 0; i < n; i++) {
//     console.log(k)
// }

// M-2
// let b = +prompt('B = ')
// let a = +prompt('A = ')

// for (let i = b; i <= a; i++) {
//     console.log(i)
// }

// M-3
// let b = +prompt('B = ')
// let a = +prompt('A = ')

// for (let i = a-1; i > b; i--) {
//     console.log(i)
// }

// M-4
// let a = 10000;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}kg: ${i*a}`)
// }

// M-5
// let a = 10000;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i/10}kg: ${i*a/10}`)
// }

// M-6
// let a = 10000;
// for (let i = 12; i <= 20; i+=2) {
//     console.log(`${i/10}kg: ${i*a/10}`)
// }

// M-7
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let s = 0
// for (let i = a; i <= b; i++) {
//     s += i; 
// }
// console.log(s)

// M-8
// let a = +prompt('a = ');
// let b = +prompt('b = ');
// let s = 1;
// for (let i = a; i <= b; i++) {
//     s *= i; 
// }
// console.log(s)

// M-9
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let s = 0
// for (let i = a; i <= b; i++) {
//     s += Math.pow(i,2); 
// }
// console.log(s)

// M-10
// let n = +prompt('n = ');
// let s = 0;
// for (let i = 1; i <= n; i++) {
//     s += (1/i)
// }
// console.log(s)

// M-11
// let n = +prompt('n = ');
// for (let i = 1; i <= n; i+=2) {
//   console.log(i)
// }

// M-12
// let n = +prompt('n = ');
// for (let i = 2; i <= n; i+=2) {
//   console.log(i)
// }

// M-13
// let n = +prompt('n = ');
// let s = 0;
// for (let i = 0; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if((n-i)%j == 0 && (n-i) != 0){
//             s++;
//         }
//     }
//     if(s > 2){
//       console.log(n-i);
//     }
//     s=0;
// }

// M-14
// let n = +prompt('n = ');
// for (let i = 0; i <= n; i++) {
//   console.log(i*i);
// }

// M-15
// let n = +prompt('n = ');
// for (let i = 0; i <= n; i++) {
//   console.log(n-i);
// }

// M-16
// let n = +prompt('n = ');
// for (let i = 0; i <= n; i++) {
//   if(i%5 !== 0){
//     console.log(i)
//   }
// }

// M-17
// let n = +prompt('n = ');
// let s = 1;
// for (let i = 1; i <= n; i++) {
//   s *= i;
// }
// console.log(s);

// M-18
// let n = +prompt('n = ');
// let s = 1, k = 0;
// for (let i = 1; i <= n; i++) {
//   k+=(s*=i);
// }
// console.log(k);

// M-19
// let n = +prompt('n = ');
// let x = +prompt('x = ')
// let s = 1, k = 1;
// for (let i = 1; i <= n; i++) {
//   k+=((pow(x,i))/(s*=i));
// }
// console.log(k);

// M-20
// let n = +prompt('n = ');
// let x = +prompt('x = ');
// for (let i = 1; i <= n; i++) {
//   if(i%x == 0){
//     console.log(i)
//   }
// }


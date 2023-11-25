//generator functions
//when gen function is invoked it gives an iterator object, we can iterate through values by using next() 
// function* gen(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let iterator=gen()
// // console.log(iterator.next()); //{value:1,done:false}
// // console.log(iterator.next().value);// 2
// // console.log(iterator.next().value); //3
// // console.log(iterator.next());   //{value:undefined,done:true}

// console.log(iterator.next());
// console.log(iterator.return("hello"));
// console.log(iterator.next()); //this will not work
// console.log(iterator.throw(new Error("this is ud")));

// function* fib(){
//     let a=0;
//     let b=1;
//     while(true){
//         let next=a+b;
//         if(next>=100){
//             break;
//         }
//         yield next;
//         a=b;
//         b=next;
//     }
// }
// let iterator=fib()
// for (const value of iterator) {
//     console.log(value);
// }

function curryAdd(x){
    return function(y){
        return x+y
    }
}
console.log(curryAdd(5)(6));
// let add5=curryAdd(5);
// let add7=curryAdd(7);
// let add12=curryAdd(12);
// console.log(add5(6)); //11
// console.log(add7(5)); //12
// console.log(add12(5)); //17
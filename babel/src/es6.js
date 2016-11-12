// 'use strict';
// /**
// * 输出
// */
// function echo (str){
//     console.log(str);
// }
// /**
// * 字符串处理
// */
// let str = `Hi, this is zhongjianyu`;
//  echo (str.charAt(0)); // 'H'
// echo (str.split('').reverse().join(''));// 'uynaijgnohz si siht ,iH'
// echo (str.indexOf('i')); // 1
// echo (str.lastIndexOf('i')); // 18
// echo (str.includes('zhongjianyu')); // true
// echo (str.startsWith('Hi')); // true
// echo ('x'.repeat(5)); // xxxxx
// /**
// * z
// * h
// * o
// * n
// * g
// /*for (let char of 'zhong'){
// echo(char);
// }*/
// [1,2,...[4,6]]


// let func = i => i+1

// let i = 3;

// if (i==3){
//     let i = 4
// }

class Student{
  constructor(props) {
    this.name = props.name
    this.age = props.age
  }
  say(){
    console.log(`i am a student, my name is ${this.name}`)
  }
}

let xiaoming  = new Student({name:'xiaoming',age:18})

xiaoming.say()









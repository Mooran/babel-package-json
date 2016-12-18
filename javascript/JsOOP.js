// var Student = {
//     name: 'Robot',
//     height: 1.2,
//     run: function () {
//         console.log(this.name + ' is running...');
//     }
// };

// var xiaoming = {
//     name: '小明'
// };

// xiaoming = Object.create(Student);

// console.log(xiaoming)

var Student = function(props){
    this.name = props.name || 'Unnamed';
}

Student.prototype.say = function(){
    console.log(`Hello, ${this.name}`)
}

function PrimaryStudent(props) {
    // 调用Student构造函数，绑定this变量:
    Student.call(this, props);
    this.grade = props.grade || 1;
}

function SeniorStudent(props) {
    // 调用Student构造函数，绑定this变量:
    Student.call(this, props);
    this.grade = props.grade || 1;
}

let F = function(){}
// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
SeniorStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
SeniorStudent.prototype.constructor = SeniorStudent;


PrimaryStudent.prototype.__proto__ = Student.prototype

let xiaoming = new PrimaryStudent({name:'xiaoming'});
let xiaohong = new SeniorStudent({name:'xiaohong'})
console.log(xiaoming,xiaohong)
